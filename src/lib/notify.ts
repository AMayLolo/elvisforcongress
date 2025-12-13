import sendgrid from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@elvisforcongress.com';
const NOTIFY_EMAILS = (process.env.NOTIFY_EMAILS || '').split(',').map((s) => s.trim()).filter(Boolean);

if (SENDGRID_API_KEY) {
  try {
    sendgrid.setApiKey(SENDGRID_API_KEY);
  } catch (e) {
    // ignore — will error when sending if misconfigured
    console.error('SendGrid init error', e);
  }
}

type NotifyOptions = {
  subject: string;
  text: string;
  html?: string;
};

export async function notifyStaff({ subject, text, html }: NotifyOptions) {
  try {
    if (!SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not set — skipping notification');
      return;
    }

    if (!NOTIFY_EMAILS.length) {
      console.warn('NOTIFY_EMAILS not configured — skipping notification');
      return;
    }

    const msg = {
      to: NOTIFY_EMAILS,
      from: FROM_EMAIL,
      subject,
      text,
      html,
    } as any;

    await sendgrid.send(msg);
  } catch (err) {
    console.error('notifyStaff error:', err);
  }
}

export default notifyStaff;
