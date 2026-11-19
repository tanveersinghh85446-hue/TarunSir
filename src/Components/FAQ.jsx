const faqs = [
  {
    q: "Is the fee refundable?",
    a: "No. Fee once paid will not be refundable under any circumstances.",
  },
  {
    q: "When do I have to pay the monthly maintenance charges?",
    a: "If you took admission from the 1st to 15th, pay before the 10th of every month. If you took admission from the 16th to 26th, pay before the 20th of every month. A fine of ₹10 per day is charged after the due date.",
  },
  {
    q: "Is attendance compulsory?",
    a: "Yes. 75% attendance is compulsory for appearing in the examination.",
  },
  {
    q: "What marks do I need to pass?",
    a: "Students of computer courses must secure a minimum combined aggregate of 40% in theory and practical exams. If you fail, you can appear for a re-examination after paying ₹300.",
  },
  {
    q: "Do you offer both short and long term courses?",
    a: "Yes. We offer both short and long term courses, according to your needs and aims.",
  },
  {
    q: "Can I take admission at any time of the year?",
    a: "Yes. Admission is conducted throughout the year.",
  },
  {
    q: "Will I get an identity card?",
    a: "Yes. Every student is issued a plastic photo identity card at a cost of ₹50. Please carry it at all times while at the institute.",
  },
  {
    q: "Will I get a certificate if I leave the course in between?",
    a: "No. Certificates and diplomas are not issued to students who leave the course in between.",
  },
  {
    q: "Can I change my batch or centre?",
    a: "A batch or institute transfer may have to wait for availability. Moving to another centre needs written consent from the Institute Incharge.",
  },
  {
    q: "Is there an internship?",
    a: "An internship programme is available for meritorious students.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <h2 className="text-2xl font-bold sm:text-3xl text-black">
        Frequently Asked <span className="text-yellow-300">Questions</span>
      </h2>

      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="rounded-lg border border-gray-200 bg-white p-4 open:border-yellow-300"
          >
            <summary className="cursor-pointer text-black font-semibold">{item.q}</summary>
            <p className="mt-3 text-black">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
