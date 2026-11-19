import PageHeader from "../Components/PageHeader";
import FormField from "../Components/FormField";
import useFormSubmit from "../utils/useFormSubmit";
import { courseGroups, rules } from "../data/siteData";

const allCourses = courseGroups.flatMap((group) => group.courses);
const modeOptions = ["Online", "Offline", "Hybrid"];

export default function Apply() {
  const { status, notice, handleSubmit, reset } = useFormSubmit("Admission application");

  return (
    <>
      <PageHeader
        title="Apply for Admission"
        subtitle="Admission is conducted throughout the year."
      />

      {/* Application form */}
      <section className="mx-auto max-w-2xl px-4 py-14">
        <div className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-6">
          <h2 className="text-xl font-semibold">Application form</h2>

          {status === "sent" ? (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">Thank you!</p>
              <p className="mt-2 text-gray-700">
                We have received your application. Our team will contact you
                soon.
              </p>
              <button
                type="button"
                onClick={() => reset()}
                className="mt-4 rounded bg-navy px-5 py-2 text-sm font-semibold text-white hover:text-gold"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <FormField label="Full Name" name="name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                />
                <FormField label="Email" name="email" type="email" />
              </div>
              <FormField
                label="Course"
                name="course"
                options={allCourses}
                required
              />
              <FormField
                label="Learning Mode"
                name="mode"
                options={modeOptions}
                required
              />
              <FormField label="Message" name="message" rows={3} />

              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="rulesAccepted"
                  required
                  className="mt-1"
                />
                <span>I have read the rules & regulations given below.</span>
              </label>

              {notice && (
                <p className="text-sm font-medium text-gray-800" role="alert">
                  {notice}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-light"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Rules */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-4xl px-4 py-14">
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
        </div>
      </section>
    </>
  );
}
