export const metadata = {
  title: "Contact | Elvis Lossa for Congress",
  description: "Contact Elvis Lossa's campaign for questions, support, or media inquiries.",
  openGraph: {
    title: "Contact | Elvis Lossa for Congress",
    description: "Contact Elvis Lossa's campaign for questions, support, or media inquiries.",
    url: "https://www.elvisforcongress.com/contact",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/contact.svg",
        alt: "Contact Elvis Lossa for Congress",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Elvis Lossa for Congress",
    description: "Contact Elvis Lossa's campaign for questions, support, or media inquiries.",
    images: ["https://www.elvisforcongress.com/og/contact.svg"],
  },
};

import PageHeading from "@/components/PageHeading";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
      <PageHeading>Contact Us</PageHeading>

      <p className="text-lg dark:text-gray-300">
        Have questions? Want to share your concerns? Our team is here to help.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-3">
            📞 Phone
          </h3>
          <a
            href="tel:+17374150809"
            className="text-lg text-sky-700 dark:text-sky-400 font-semibold hover:underline"
          >
            (737) 415-0809
          </a>
        </div>

        <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100 mb-3">
            ✉️ Email
          </h3>
          <a
            href="mailto:campaign@elvisforcongress.com"
            className="text-lg text-sky-700 dark:text-sky-400 font-semibold hover:underline"
          >
            campaign@elvisforcongress.com
          </a>
        </div>
      </div>

      <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
        />

        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
          required
        ></textarea>

        <button className="bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800">
          Send Message
        </button>
      </form>

      {/* Mailing address */}
      <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
        <h3 className="text-base font-semibold text-sky-900 dark:text-sky-100 mb-2">Mailing Address</h3>
        <address className="not-italic whitespace-pre-line">
          Elvis for Congress
          {"\n"}P.O. Box 1272
          {"\n"}Cedar Park, TX 78630
        </address>
      </div>
    </div>
  );
}
