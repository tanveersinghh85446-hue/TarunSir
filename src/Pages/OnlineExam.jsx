import PageHeader from "../Components/PageHeader";

// Put the link of your exam portal here. Keep it empty until it is ready.
const examLink = "";

const instructions = [
  "Submit your assignment file. You will not be allowed to give the exam without it.",
  "75% attendance is compulsory for appearing in the examination.",
  "Carry your photo identity card and show it when requested.",
  "Students of computer courses must secure a minimum combined aggregate of 40% in theory and practical exams.",
  "If you fail, you can appear for a re-examination after paying ₹300.",
];

export default function OnlineExam() {
  return (
    <>
      <PageHeader
        title="Online Examination"
        subtitle="Read the instructions carefully before you appear."
      />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <div className="rounded-lg border border-gray-200 border-t-4 border-t-gold bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Start your exam</h2>
          {examLink ? (
            <a
              href={examLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded bg-gold px-8 py-3 font-semibold text-navy hover:bg-gold-light"
            >
              Start Exam
            </a>
          ) : (
            <p className="mt-2 text-gray-700">
              The exam link will be shared by the institute before your exam.
            </p>
          )}
        </div>

        <h2 className="mt-12 text-2xl font-bold">
          Exam <span className="text-gold">Instructions</span>
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-gray-700 marker:font-semibold marker:text-navy">
          {instructions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </>
  );
}
