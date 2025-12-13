export const metadata = {
  title: "Volunteer | Elvis Lossa for Congress",
  description:
    "Help the campaign — sign up to volunteer, host, or canvass in District 31.",
  openGraph: {
    title: "Volunteer | Elvis Lossa for Congress",
    description: "Help the campaign — sign up to volunteer, host, or canvass in District 31.",
    url: "https://www.elvisforcongress.com/volunteer",
    images: [
      {
        url: "https://www.elvisforcongress.com/og/volunteer.svg",
        alt: "Volunteer for Elvis Lossa",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer | Elvis Lossa for Congress",
    description: "Help the campaign — sign up to volunteer, host, or canvass in District 31.",
    images: ["https://www.elvisforcongress.com/og/volunteer.svg"],
  },
};

import PageHeading from "@/components/PageHeading";
import VolunteerForm from "@/components/VolunteerForm";

export default function VolunteerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
  <PageHeading>Volunteer</PageHeading>

      <p className="text-lg dark:text-gray-300">
        This movement is powered by people like you. No experience necessary —
        just passion and a desire to make a difference.
      </p>

      <VolunteerForm />
    </div>
  );
}
