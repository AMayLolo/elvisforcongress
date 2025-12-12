
import { redirect } from "next/navigation";

export default function IssuesRedirect() {
  // Redirect legacy /issues to the new /stand route
  redirect("/stand");
}
