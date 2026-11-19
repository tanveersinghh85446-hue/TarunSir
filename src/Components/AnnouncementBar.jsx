import { Link } from "react-router-dom";

export default function AnnouncementBar() {
  return (
    <div className="bg-navy px-4 py-2 text-center text-sm text-white">
      <span>Admission is open throughout the year.</span>
      <Link
        to="/enroll-now"
        className="ml-2 font-semibold text-yellow-300 underline underline-offset-4"
      >
        Enroll Now
      </Link>
    </div>
  );
}
