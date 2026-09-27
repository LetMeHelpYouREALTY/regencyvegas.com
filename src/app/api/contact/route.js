import { NextResponse } from 'next/server';
import {
  buildContactFubEvent,
  postFollowUpBossEvent,
} from '@/lib/followUpBoss';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function countDigits(value) {
  return (String(value || '').match(/\d/g) || []).length;
}

function validateContactBody(body) {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const interest = body.interest;

  if (!name) {
    return { error: 'Name is required' };
  }

  const hasValidEmail = email && EMAIL_REGEX.test(email);
  const hasValidPhone = countDigits(phone) >= 10;

  if (!hasValidEmail && !hasValidPhone) {
    return { error: 'A valid email or phone number is required' };
  }

  if (email && !hasValidEmail) {
    return { error: 'Invalid email address' };
  }

  if (phone && !hasValidPhone) {
    return { error: 'Invalid phone number' };
  }

  if (!message) {
    return { error: 'Message is required' };
  }

  if (!interest) {
    return { error: 'Interest is required' };
  }

  return {
    data: { name, email, phone, message, interest },
  };
}

/**
 * API Route Handler for Contact Form Submissions
 * POST /api/contact
 */
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const validation = validateContactBody(body ?? {});
  if (validation.error) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const referer = request.headers.get('referer') || '';
  const sourceUrl =
    (typeof body.sourceUrl === 'string' && body.sourceUrl.trim()) || referer || undefined;

  const eventPayload = buildContactFubEvent({
    ...validation.data,
    sourceUrl,
    formName: 'Contact Form',
  });

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  const fubResult = await postFollowUpBossEvent(eventPayload, { apiKey });

  if (fubResult.missingKey) {
    console.error(
      'FOLLOW_UP_BOSS_API_KEY is not configured; contact form cannot send to Follow Up Boss.'
    );
    return NextResponse.json(
      { error: 'Lead routing is temporarily unavailable' },
      { status: 503 }
    );
  }

  if (!fubResult.ok) {
    const statusLabel = fubResult.status || 'network error';
    console.error(`Follow Up Boss event failed with status: ${statusLabel}`);
    return NextResponse.json(
      { error: 'Failed to deliver message to CRM' },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: 'Your message has been received. We will contact you soon.',
    },
    { status: 200 }
  );
}
