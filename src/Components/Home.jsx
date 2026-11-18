import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import CTA from "./CTA";
import { institute, courseGroups, features, aboutText } from "../data/siteData";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Welcome to
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-6xl">
            {institute.name}
          </h1>
          <p className="mt-3 text-lg text-white/90 sm:text-2xl">
            {institute.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-white/80">
            Career oriented courses with experienced faculty, practical labs and
            personal guidance, at a nominal fee that is affordable for everyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/apply"
              className="rounded bg-gold px-7 py-3 font-semibold text-navy hover:bg-gold-light"
            >
              Apply Now
            </Link>
            <Link
              to="/course"
              className="rounded border border-white px-7 py-3 font-semibold text-white hover:border-gold hover:text-gold"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-black">Certified by</p>
            <p className="font-semibold">{institute.certification}</p>
          </div>

          <div>
            <p className="text-sm font-bold text-black">Admission</p>
            <p className="font-semibold">Open throughout the year</p>
          </div>

          <div>
            <p className="text-sm font-bold text-black">Registered by</p>
            <p className="font-semibold">{institute.registeredBy}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl text-black">
          About <span className="text-yellow-300">{institute.name}</span>
        </h2>
        <p className="mt-4 max-w-3xl text-gray-700">{aboutText[3]}</p>
        <Link
          to="/about"
          className="mt-4 inline-block font-semibold text-black underline decoration-yellow-300   decoration-2 underline-offset-6"
        >
          Read more about us
        </Link>
      </section>

      {/* Courses */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl text-black">
            Our <span className="text-yellow-300">Courses</span>
          </h2>
          <p className="mt-2 text-black">
            Short term and long term courses, according to your needs and aims.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courseGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-5"
              >
                <h3 className="text-lg  text-black font-bold">{group.title}</h3>
                <p className="mt-2 text-sm text-black font-semibold">
                  {group.courses.join(", ")}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/course"
            className="mt-8 inline-block rounded bg-navy px-6 py-3 font-semibold text-white hover:text-yellow-300"
          >
            See all courses
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl text-black">
          Why <span className="text-yellow-300">{institute.name}</span>
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.slice(0, 8).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <FiCheckCircle className="mt-1 shrink-0 text-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/about"
          className="mt-6 inline-block font-semibold text-navy underline decoration-yellow-300 decoration-2 underline-offset-6"
        >
          See all features
        </Link>
      </section>

      <CTA />
    </>
  );
}
