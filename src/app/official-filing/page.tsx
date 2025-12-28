import PageHeading from "@/components/PageHeading";

export const metadata = {
  title: "Official Candidate Filing | Elvis Lossa for Congress",
  description:
    "Elvis Lossa has officially filed with the Federal Election Commission as a candidate for U.S. Congress representing Texas’ 31st Congressional District.",
  openGraph: {
    title: "Elvis Lossa Officially Files for Congress",
    description:
      "Official filing confirmation for Elvis Lossa, candidate for U.S. Congress in Texas’ 31st District.",
    url: "https://www.elvisforcongress.com/official-filing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Lossa Officially Files for Congress",
    description:
      "Official filing confirmation for Elvis Lossa, candidate for U.S. Congress in Texas’ 31st District.",
  },
};

export default function OfficialFilingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Structured Data: Article for filing confirmation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Elvis Lossa Officially Files for U.S. Congress",
            author: {
              "@type": "Person",
              name: "Elvis Lossa",
            },
            publisher: {
              "@type": "Organization",
              name: "Elvis Lossa for Congress",
              url: "https://www.elvisforcongress.com",
            },
            mainEntityOfPage:
              "https://www.elvisforcongress.com/official-filing",
            about: {
              "@type": "Person",
              name: "Elvis Lossa",
            },
          }),
        }}
      />

      <div className="space-y-8 max-w-3xl">
        <PageHeading as="h1">Official Candidate Filing</PageHeading>

        <p className="text-lg dark:text-gray-300">
          Elvis Lossa has officially filed with the Federal Election Commission as
          a candidate for the United States Congress representing Texas’ 31st
          Congressional District.
        </p>

        <p className="text-lg dark:text-gray-300">
          The Federal Election Commission (FEC) maintains the official public
          record of candidate filings for federal office. Elvis Lossa’s filing
          confirms his candidacy and eligibility to appear on the ballot, subject
          to applicable election laws and procedures.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-sky-900 dark:text-white">
            Federal Election Commission Filing
          </h2>

          <p className="text-lg dark:text-gray-300">
            Elvis Lossa’s candidate filing is publicly available through the
            Federal Election Commission under the following candidate
            identification number:
          </p>

          <p className="text-lg font-semibold dark:text-white">
            FEC Candidate ID: <span className="font-mono">H6TX31177</span>
          </p>

          <p className="text-lg dark:text-gray-300">
            View the official filing record on the Federal Election Commission
            website:
          </p>

          <p>
            <a
              href="https://www.fec.gov/data/candidate/H6TX31177/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-900 font-semibold hover:underline"
            >
              Federal Election Commission — Elvis Lossa Candidate Filing
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-sky-900 dark:text-white">
            Transparency and Accountability
          </h2>

          <p className="text-lg dark:text-gray-300">
            Filing with the Federal Election Commission is an essential step in
            ensuring transparency, accountability, and compliance with federal
            election laws. Voters can review campaign finance reports and filing
            information directly through the FEC’s public database.
          </p>

          <p className="text-lg dark:text-gray-300">
            Elvis Lossa is committed to operating an open and transparent
            campaign and to earning the trust of voters across Central Texas and
            Texas’ 31st Congressional District.
          </p>
        </section>
      </div>
    </div>
  );
}
