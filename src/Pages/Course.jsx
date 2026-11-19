import { FiBookOpen } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";
import { courseGroups } from "../data/siteData";

export default function Course() {
  return (
    <>
      <PageHeader
        title="Our Courses"
        subtitle="We offer both short and long term courses, according to your needs and aims."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6"
            >
              <h2 className="text-xl text-black font-semibold">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {group.courses.map((course) => (
                  <li
                    key={course}
                    className="flex items-start font-semibold gap-2 text-black"
                  >
                    <FiBookOpen className="mt-1 shrink-0 text-yellow-300" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
