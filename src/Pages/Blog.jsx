import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" subtitle="News and articles from ANITIO." />

      <section className="mx-auto max-w-2xl px-4 py-14 text-center">
        <div className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-8">
          <h2 className="text-2xl font-bold">
            Coming <span className="text-gold">Soon</span>
          </h2>
          <p className="mt-3 text-gray-700">
            We are preparing helpful articles and news for our students. Please
            visit again soon.
          </p>
          <Link
            to="/course"
            className="mt-6 inline-block rounded bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-light"
          >
            View Courses
          </Link>
        </div>
      </section>
    </>
  );
}
