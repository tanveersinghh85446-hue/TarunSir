import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="text-7xl font-bold text-gold sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
      <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
      <p className="mt-4 text-gray-700">
        The page you are looking for does not exist or has been moved.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded bg-navy px-6 py-3 font-semibold text-white hover:text-gold"
        >
          Go to Home
        </Link>
        <Link
          to="/course"
          className="rounded border border-navy px-6 py-3 font-semibold text-navy hover:border-gold hover:text-gold"
        >
          View Courses
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        Need help?{" "}
        <Link
          to="/contact"
          className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
        >
          Contact us
        </Link>
      </p>
    </section>
  );
}
