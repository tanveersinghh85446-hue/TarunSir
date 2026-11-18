import PageHeader from "../Components/PageHeader";
import CTA from "../Components/CTA";
import { rules } from "../data/siteData";

export default function Apply() {
  return (
    <>
      <PageHeader
        title="Apply for Admission"
        subtitle="Admission is conducted throughout the year."
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Rules & <span className="text-gold">Regulations</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Please read these rules carefully before taking admission.
        </p>

        <ol className="mt-6 list-decimal space-y-3 rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white py-6 pl-10 pr-5 text-gray-700 marker:font-semibold marker:text-navy">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

      <CTA
        title="Ready to take admission?"
        text="Get in touch with us and we will guide you through the admission process."
        buttonText="Contact Us"
        to="/contact"
      />
    </>
  );
}
