import { Link } from "react-router-dom";

export default function CTA({
  title = "Admissions are open throughout the year",
  text = "Build your career with practical, job oriented training.",
  buttonText = "Apply Now",
  to = "/apply",
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{text}</p>
        <Link
          to={to}
          className="mt-6 inline-block rounded bg-gold px-8 py-3 font-semibold text-navy hover:bg-gold-light"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
