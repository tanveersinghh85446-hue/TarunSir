import PageHeader from "../Components/PageHeader";
import { CONTACT_PHONE } from "../data/contact";

// Put your online payment link here. Keep it empty if you do not have one.
const payLink = "";

// Add the real payment details here, for example:
//   { label: "UPI ID", value: "name@bank" },
//   { label: "Account Holder", value: "..." },
//   { label: "Account Number", value: "..." },
//   { label: "IFSC Code", value: "..." },
// While this list is empty, the page asks students to contact the institute.
const paymentDetails = [];

const dueDates = [
  {
    admission: "1st to 15th of the month",
    pay: "Before the 10th of every month",
  },
  {
    admission: "16th to 26th of the month",
    pay: "Before the 20th of every month",
  },
];

const otherCharges = [
  { label: "Late fine", value: "₹10 per day" },
  { label: "Photo identity card", value: "₹50" },
  { label: "Re-examination fee", value: "₹300" },
];

export default function PayFee() {
  return (
    <>
      <PageHeader
        title="Pay Fee"
        subtitle="We charge only a nominal maintenance fee, affordable for all."
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        {/* Payment details */}
        <div className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-6">
          <h2 className="text-xl font-semibold">Payment details</h2>
          {paymentDetails.length > 0 ? (
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {paymentDetails.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-gray-500">{item.label}</dt>
                  <dd className="break-all font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-4 text-gray-700">
              Please contact the institute on{" "}
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="font-semibold text-navy underline"
              >
                {CONTACT_PHONE}
              </a>{" "}
              for the payment details.
            </p>
          )}
          {payLink && (
            <a
              href={payLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded bg-gold px-8 py-3 font-semibold text-navy hover:bg-gold-light"
            >
              Pay Online
            </a>
          )}
        </div>

        {/* Due dates */}
        <h2 className="mt-12 text-2xl font-bold">
          Maintenance charge <span className="text-gold">due dates</span>
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-105 border border-gray-200 text-left">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-4 py-3">Admission taken on</th>
                <th className="px-4 py-3">Pay</th>
              </tr>
            </thead>
            <tbody>
              {dueDates.map((row) => (
                <tr key={row.admission} className="border-t border-gray-200">
                  <td className="px-4 py-3">{row.admission}</td>
                  <td className="px-4 py-3">{row.pay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Other charges */}
        <h2 className="mt-12 text-2xl font-bold">
          Other <span className="text-gold">charges</span>
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {otherCharges.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-gray-200 bg-white p-4 text-center"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-1 text-xl font-bold text-navy">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Notes */}
        <ul className="mt-10 list-disc space-y-2 pl-6 text-gray-700 marker:text-gold">
          <li>Fee once paid will not be refundable under any circumstances.</li>
          <li>
            Keep all fee receipts until the course is complete, for clearance at
            the end.
          </li>
        </ul>
      </section>
    </>
  );
}
