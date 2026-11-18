import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";

const steps = [
  {
    title: "Choose your course",
    text: "Pick from our short and long term courses.",
    to: "/course",
    linkText: "View courses",
  },
  {
    title: "Choose your learning mode",
    text: "Study online, offline or a mix of both.",
    to: "/mode",
    linkText: "See modes",
  },
  {
    title: "Fill the application",
    text: "Share your details and we will get in touch with you.",
    to: "/apply",
    linkText: "Apply now",
  },
  {
    title: "Deposit your fee",
    text: "Pay the maintenance charges before the due date. Fee once paid is not refundable.",
    to: "/pay-fee",
    linkText: "Fee details",
  },
  {
    title: "Get your ID card and start",
    text: "You will be issued a photo identity card. Keep 75% attendance to be eligible for the examination.",
  },
];

export default function EnrollNow() {
  return (
    <>
      <PageHeader
        title="Enroll Now"
        subtitle="Admission is conducted throughout the year. Follow these simple steps."
      />

      <section className="mx-auto max-w-3xl px-4 py-14">
        <ol className="space-y-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-gold">
                {index + 1}
              </span>
              <div>
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="mt-1 text-gray-700">{step.text}</p>
                {step.to && (
                  <Link
                    to={step.to}
                    className="mt-2 inline-block text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
                  >
                    {step.linkText}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CTA title="Ready to enroll?" text="Start your application today." />
    </>
  );
}
