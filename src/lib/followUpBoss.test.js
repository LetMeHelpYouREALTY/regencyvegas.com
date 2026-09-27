import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildContactFubEvent,
  mapInterestToEventType,
  postFollowUpBossEvent,
  FUB_EVENTS_URL,
} from './followUpBoss.js';

describe('followUpBoss', () => {
  it('maps selling interest to Seller Inquiry', () => {
    assert.equal(mapInterestToEventType('selling'), 'Seller Inquiry');
    assert.equal(mapInterestToEventType('buying'), 'General Inquiry');
  });

  it('builds event payload with person and tags', () => {
    const payload = buildContactFubEvent({
      name: 'Jane Buyer',
      email: 'jane@example.com',
      phone: '7025551234',
      interest: 'buying',
      message: 'Looking for a home in Regency.',
      sourceUrl: 'https://www.regencyvegas.com/contact',
      formName: 'Contact Form',
    });

    assert.equal(payload.source, 'regencyvegas.com');
    assert.equal(payload.type, 'General Inquiry');
    assert.equal(payload.person.firstName, 'Jane');
    assert.equal(payload.person.lastName, 'Buyer');
    assert.deepEqual(payload.person.tags, ['regencyvegas.com', 'Contact Form']);
    assert.match(payload.message, /Looking for a home/);
  });

  it('posts to FUB with Basic auth when fetch is mocked', async () => {
    const fetchImpl = mock.fn(async (url, options) => {
      assert.equal(url, FUB_EVENTS_URL);
      assert.equal(options.method, 'POST');
      assert.match(options.headers.Authorization, /^Basic /);
      assert.equal(options.headers['X-System'], 'regencyvegas.com');
      return { ok: true, status: 201 };
    });

    const result = await postFollowUpBossEvent(
      { source: 'regencyvegas.com', type: 'General Inquiry' },
      { apiKey: 'test-key-not-real', fetchImpl }
    );

    assert.equal(result.ok, true);
    assert.equal(fetchImpl.mock.calls.length, 1);
  });

  it('returns missingKey when api key is absent', async () => {
    const result = await postFollowUpBossEvent({}, { apiKey: '' });
    assert.equal(result.missingKey, true);
    assert.equal(result.status, 503);
  });
});
