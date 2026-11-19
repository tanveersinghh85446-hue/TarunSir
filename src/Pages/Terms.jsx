import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { institute } from "../data/siteData";

const lastUpdated = "19 November 2026";

const sections = [
  {
    title: "Acceptance of Terms",
    text: `By using this website or taking admission at ${institute.name}, you agree to follow these terms and conditions. If you do not agree, please do not use the website or take admission.`,
  },
  {
    title: "Use of the Website",
    text: "The information on this website, such as courses and features, is shared to help students. We may change or update it at any time without prior notice. Please use the website only for lawful purposes.",
  },
  {
    title: "Admission",
    points: [
      "Admission is conducted throughout the year.",
      "The details you give in the application form must be true and correct.",
      "Admission is subject to the rules and regulations of the institute.",
    ],
  },
  {
    title: "Fees & Payment",
    points: [
      "Fee once paid will not be refundable under any circumstances.",
      "Students who took admission from the 1st to 15th must pay the maintenance charges before the 10th of every month.",
      "Students who took admission from the 16th to 26th must pay before the 20th of every month.",
      "A fine of ₹10 per day is charged for late payment.",
      "A plastic photo identity card is issued to every student at a cost of ₹50.",
      "Students must keep all fee receipts until the course is complete, for clearance at the end.",
    ],
  },
  {
    title: "Attendance & Examination",
    points: [
      "75% attendance is compulsory for appearing in the examination.",
      "No student is allowed to give the exam without submitting the assignment file.",
      "Students of computer courses must secure a minimum combined aggregate of 40% in theory and practical exams.",
      "Students who fail can appear for a re-examination after paying ₹300.",
    ],
  },
  {
    title: "Certificates",
    text: "Certificates and diplomas are not issued to students who leave the course in between.",
  },
  {
    title: "Student Conduct",
    points: [
      "Students must carry their identity card at all times while at the institute and show it when requested.",
      "Students must maintain complete silence, strict discipline and decorum inside the premises.",
      "Smoking, eating, chewing, etc. are strictly prohibited inside the premises.",
      "Visitors, friends or relatives are not allowed in the classroom or lab.",
    ],
  },
  {
    title: "Batch & Centre Transfer",
    text: "A batch or institute transfer may have to wait for availability. No student is allowed to move from one centre to another without written consent from the Institute Incharge.",
  },
  {
    title: "Intellectual Property",
    text: `The text, logo, images and other content of this website, and the study material given to students, belong to ${institute.name}. Please do not copy, share or sell them without our written permission.`,
  },
  {
    title: "Limitation of Liability",
    text: `This website is provided "as is". We try to keep the information correct, but we do not guarantee that it is always complete or up to date. ${institute.name} is not responsible for any loss arising from the use of this website.`,
  },
  {
    title: "Changes to These Terms",
    text: "We may update these terms from time to time. The latest version will always be available on this page, with the date of the last update.",
  },
];

export default function Terms() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle={`Last updated: ${lastUpdated}`}
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-gray-700">
          Please read these terms and conditions carefully before using our
          website or taking admission at {institute.fullName}.
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
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-gray-200 pt-6 text-gray-700">
          Questions about these terms?{" "}
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
