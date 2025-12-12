/**
 * Simple test script to POST sample payloads to the local API endpoints.
 * Usage:
 *   node scripts/test-sms.js --url=http://localhost:3000
 */
const http = require('http');
const https = require('https');

function postJson(url, obj) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const u = new URL(url);
    const body = JSON.stringify(obj);
    const opts = {
      hostname: u.hostname,
      port: u.port || (u.protocol === 'https:' ? 443 : 80),
      path: u.pathname + (u.search || ''),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = lib.request(opts, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async function () {
  const args = process.argv.slice(2);
  const urlArg = args.find((a) => a.startsWith('--url='));
  const base = urlArg ? urlArg.split('=')[1] : 'http://localhost:3000';

  console.log('Posting test SMS opt-in to /api/sms');
  const sms = await postJson(base + '/api/sms', {
    phone: '(512) 555-1212',
    consent: true,
    source: 'test-script',
    utm: { utm_source: 'script' },
  });
  console.log('sms response', sms.status, sms.body);

  console.log('Posting test opt-out webhook to /api/sms/webhook');
  const webhook = await postJson(base + '/api/sms/webhook', {
    From: '+15125551212',
    Body: 'STOP',
    MessageSid: 'TESTMSG123',
  });
  console.log('webhook response', webhook.status, webhook.body);
})();
