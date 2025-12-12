export const metadata = {
  title: "Volunteer | Elvis for Congress",
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
