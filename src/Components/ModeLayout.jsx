import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import PageHeader from "./PageHeader";
import CTA from "./CTA";
import { modes } from "../data/modes";

// Common layout for the Online, Offline and Hybrid pages.
export default function ModeLayout({
  title,
  subtitle,
  intro,
  points,
  current,
}) {
  const otherModes = modes.filter((mode) => mode.to !== current);

  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-gray-700">{intro}</p>

        <h2 className="mt-8 text-2xl font-bold">
          What you <span className="text-gold">get</span>
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <FiCheckCircle className="mt-1 shrink-0 text-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-xl font-bold">Other learning modes</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {otherModes.map((mode) => (
              <Link
                key={mode.to}
                to={mode.to}
                className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-5 hover:border-t-navy"
              >
                <h3 className="font-semibold">{mode.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{mode.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to start learning?"
        text="Choose your course and apply for admission."
      />
    </>
  );
}
