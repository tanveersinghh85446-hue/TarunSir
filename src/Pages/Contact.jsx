import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import PageHeader from "../Components/PageHeader";
import FormField from "../Components/FormField";
import FAQ from "../Components/FAQ";

// Replace these placeholders with the real details.
const contact = {
  address: "Your address here",
  phone: "+91 00000 00000",
  email: "email@example.com",
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send the form data to your backend or email service here
    setSent(true);
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question? We would love to hear from you."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-3">
        {/* Contact info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5">
            <FiMapPin className="mt-4 shrink-0 text-red-600" size={20} />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-700">{contact.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5">
            <FiPhone className="mt-4 shrink-0 text-black" size={20} />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-gray-700 hover:text-black"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-5">
            <FiMail className="mt-4 shrink-0 text-green-500" size={20} />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-gray-700 hover:text-green-400"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div className="rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold">Send us a message</h2>

          {sent ? (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">Thank you!</p>
              <p className="mt-2 text-gray-700">
                We have received your message and will reply soon.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 rounded bg-navy px-5 py-2 text-sm font-semibold text-white hover:text-gold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" name="name" required />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                />
              </div>
              <FormField label="Email" name="email" type="email" />
              <FormField label="Message" name="message" rows={5} required />
              <button
                type="submit"
                className="rounded bg-yellow-300 px-8 py-3 font-semibold text-black hover:bg-yellow-400"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <FAQ />
    </>
  );
}
