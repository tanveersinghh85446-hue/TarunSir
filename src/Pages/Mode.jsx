import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";
import { modes } from "../data/modes";

export default function Mode() {
  return (
    <>
      <PageHeader
        title="Learning Modes"
        subtitle="Choose the way of learning that suits you best."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <div
              key={mode.to}
              className="flex flex-col rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6"
            >
              <h2 className="text-xl font-bold text-black">{mode.title}</h2>
              <p className="mt-2 flex-1 font-semibold text-black">{mode.text}</p>
              <Link
                to={mode.to}
                className="mt-5 inline-block self-start rounded bg-black px-5 py-2 text-sm font-semibold text-white "
              >
                Know more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
