import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { institute } from "../data/siteData";

const lastUpdated = "19 November 2026";

const sections = [
  {
    title: "Information We Collect",
    text: "When you fill a form on our website (admission, contact or franchise enquiry), we may collect:",
    points: [
      "Your name, phone number and email address",
      "Your city, if you send a franchise enquiry",
      "The course and learning mode you are interested in",
      "Any message you write to us",
    ],
    after:
      "We may also collect basic technical information, such as your browser type and device, through standard website logs or analytics tools.",
  },
  {
    title: "How We Use Your Information",
    points: [
      "To reply to your enquiries and messages",
      "To process your admission and contact you about it",
      "To share updates about courses, fees and examinations",
      "To improve our website and services",
    ],
  },
  {
    title: "Sharing of Information",
    text: `${institute.name} does not sell or rent your personal information. We may share it only with service providers who help us run the website and handle your forms or emails, or when the law requires us to do so.`,
  },
  {
    title: "Cookies",
    text: "Our website may use cookies or similar tools to make the site work properly and to understand how visitors use it. You can turn off cookies in your browser settings.",
  },
  {
    title: "Data Security",
    text: "We take reasonable steps to protect your information. However, no website or internet transfer is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "How Long We Keep Your Information",
    text: "We keep your information only as long as it is needed for admission, our records or legal requirements.",
  },
  {
    title: "Your Rights",
    text: "You can ask us to show, correct or delete the personal information you have shared with us. Please contact us and we will help you.",
  },
  {
    title: "Children",
    text: "If you are under 18, please take the permission of your parent or guardian before sharing your information on this website.",
  },
  {
    title: "Links to Other Websites",
    text: "Our website may contain links to other websites. We are not responsible for their content or privacy practices.",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this privacy policy from time to time. The latest version will always be available on this page, with the date of the last update.",
  },
];

export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-gray-700">
          At {institute.name}, we respect your privacy. This policy explains
          what information we collect through our website, and how we use and
          protect it.
        </p>

        <div className="mt-8 space-y-8">
          {sections.map((section, index) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold">
                <span className="text-gold">{index + 1}.</span> {section.title}
              </h2>

              {section.text && (
                <p className="mt-2 text-gray-700">{section.text}</p>
              )}

              {section.points && (
                <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700 marker:text-gold">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {section.after && (
                <p className="mt-2 text-gray-700">{section.after}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-gray-700">
          Questions about this policy?{" "}
          <Link
            to="/contact"
            className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
          >
            Contact us
          </Link>
          .
        </p>
      </section>
    </>
  );
}
