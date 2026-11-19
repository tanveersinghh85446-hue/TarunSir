import { FiCheckCircle } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import FormField from "../Components/FormField";
import useFormSubmit from "../utils/useFormSubmit";
import { institute } from "../data/siteData";

const benefits = [
  `Registered by ${institute.registeredBy}`,
  `${institute.certification} certified institute`,
  "Wide range of career oriented courses",
  "Nominal and affordable fee for students",
  "Admission conducted throughout the year",
];

export default function Franchise() {
  const { status, notice, handleSubmit, reset } = useFormSubmit("Franchise enquiry");

  return (
    <>
      <PageHeader
        title="Franchise"
        subtitle={`Become a part of the ${institute.name} family.`}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-black">
            Why partner with{" "}
            <span className="text-black">{institute.name}</span>
          </h2>
          <p className="mt-3 text-gray-700">
            We want to bring quality skill training to more students. If you are
            interested in starting a centre with us, send us your details.
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <FiCheckCircle className="mt-1 shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6">
          <h2 className="text-xl text-black font-bold">Franchise enquiry</h2>

          {status === "sent" ? (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-green-500">
                Thank you !
              </p>
              <p className="mt-2 text-black font-semibold">
                We have received your enquiry and will get in touch with you
                soon.
              </p>
              <button
                type="button"
                onClick={() => reset()}
                className="mt-4 rounded bg-green-500 px-5 py-2 text-sm font-semibold text-white hover:text-black"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <FormField label="Full Name" name="name" required />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                required
              />
              <FormField label="Email" name="email" type="email" />
              <FormField label="City" name="city" required />
              <FormField label="Message" name="message" rows={4} />
              {notice && (
                <p className="text-sm font-medium text-gray-800" role="alert">
                  {notice}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
