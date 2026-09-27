const SITE_SOURCE = 'regencyvegas.com';
const FUB_EVENTS_URL = 'https://api.followupboss.com/v1/events';

export function splitName(fullName) {
  const trimmed = (fullName || '').trim();
  if (!trimmed) {
    return { firstName: '', lastName: '' };
  }
  const parts = trimmed.split(/\s+/);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';
  return { firstName, lastName };
}

export function mapInterestToEventType(interest) {
  switch (interest) {
    case 'selling':
      return 'Seller Inquiry';
    case 'buying':
    case 'both':
    case 'general':
      return 'General Inquiry';
    default:
      return 'General Inquiry';
  }
}

export function buildInterestSummary(interest) {
  const labels = {
    buying: 'Buying a home',
    selling: 'Selling a home',
    both: 'Buying and selling',
    general: 'General question',
  };
  return interest ? labels[interest] || interest : 'Not specified';
}

/**
 * @param {object} input
 * @param {string} input.name
 * @param {string} [input.email]
 * @param {string} [input.phone]
 * @param {string} [input.interest]
 * @param {string} [input.message]
 * @param {string} [input.sourceUrl]
 * @param {string} [input.formName]
 */
export function buildContactFubEvent(input) {
  const { firstName, lastName } = splitName(input.name);
  const interestSummary = buildInterestSummary(input.interest);
  const visitorMessage = (input.message || '').trim();
  const messageParts = [
    visitorMessage,
    `Interest: ${interestSummary}`,
    input.email ? `Email: ${input.email}` : null,
    input.phone ? `Phone: ${input.phone}` : null,
  ].filter(Boolean);

  const formName = input.formName || 'Contact Form';
  const sourceUrl = input.sourceUrl || `https://www.${SITE_SOURCE}/contact`;

  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type: mapInterestToEventType(input.interest),
    message: messageParts.join('\n'),
    description: `${formName} — ${sourceUrl}`,
    sourceUrl,
    person: {
      firstName,
      lastName,
      emails: input.email ? [{ value: input.email }] : [],
      phones: input.phone ? [{ value: input.phone }] : [],
      tags: [SITE_SOURCE, formName],
    },
  };
}

/**
 * @param {object} eventPayload
 * @param {{ apiKey: string, fetchImpl?: typeof fetch }} options
 */
export async function postFollowUpBossEvent(eventPayload, { apiKey, fetchImpl = fetch }) {
  if (!apiKey) {
    return { ok: false, status: 503, missingKey: true };
  }

  const authorization = `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`;

  try {
    const response = await fetchImpl(FUB_EVENTS_URL, {
      method: 'POST',
      headers: {
        Authorization: authorization,
        'Content-Type': 'application/json',
        'X-System': SITE_SOURCE,
      },
      body: JSON.stringify(eventPayload),
    });

    return {
      ok: response.ok,
      status: response.status,
      missingKey: false,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      missingKey: false,
      error,
    };
  }
}

export { SITE_SOURCE, FUB_EVENTS_URL };
