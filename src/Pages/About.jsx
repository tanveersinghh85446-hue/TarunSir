import { FiCheckCircle } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";
import {
  institute,
  aboutText,
  directorMessage,
  features,
} from "../data/siteData";

export default function About() {
  return (
    <>
      <PageHeader
        title={`About ${institute.name}`}
        subtitle={institute.fullName}
      />

      {/* About */}
      <section className="mx-auto max-w-4xl space-y-4 px-4 py-14 font-semibold text-black">
        {aboutText.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </section>

      {/* Recognition */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Our <span className="text-yellow-300">Recognition</span>
          </h2>
          <div className="mt-6 rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6 text-center">
            <p className="text-3xl font-bold">{institute.name}</p>
            <p className="mt-2 text-gray-700">{institute.tagline}</p>
            <p className="mt-5 text-sm text-gray-500">Registered by</p>
            <p className="font-semibold">{institute.registeredBy}</p>
            <p className="mt-4 text-sm text-gray-500">Certified by</p>
            <p className="font-semibold">{institute.certification}</p>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Director's <span className="text-yellow-300">Message</span>
        </h2>
        <div className="mt-6 space-y-4 border-l-4 border-yellow-300 pl-5 text-gray-700">
          <p className="font-semibold text-navy">Dear Students,</p>
          {directorMessage.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p className="font-semibold text-navy">
            Sincerely,
            <br />
            Director, {institute.name}
          </p>
        </div>
      </section>

      {/* Key features */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl text-black">
            Key Features of <span className="text-yellow-300">Institute</span>
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <li
                key={item}
                className="flex font-semibold text-black items-start gap-2"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
