import { redirect } from "next/navigation";

export default function PublicSafetyRedirect() {
  redirect("/stand/public-safety");
}
