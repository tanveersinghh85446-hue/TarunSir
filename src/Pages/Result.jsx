import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import FormField from "../Components/FormField";
import { results } from "../data/results";

export default function Result() {
  const [searched, setSearched] = useState(false);
  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const rollNo = new FormData(e.target).get("rollNo").trim().toLowerCase();
    const found = results.find((r) => r.rollNo.toLowerCase() === rollNo);

    setStudent(found || null);
    setSearched(true);
  }

  if (results.length === 0) {
    return (
      <>
        <PageHeader
          title="Check Result"
          subtitle="Examination results will be published here."
        />
        <section className="mx-auto max-w-xl px-4 py-14 text-center">
          <p className="rounded-lg border border-gray-200 p-6 text-gray-700">
            Results are not available online yet. Please contact the institute
            to know your result.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Check Result"
        subtitle="Enter your roll number to see your result."
      />

      <section className="mx-auto max-w-xl px-4 py-14">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-gray-200 border-t-4 border-t-yellow-300 bg-white p-6"
        >
          <FormField label="Roll Number" name="rollNo" required />
          <button
            type="submit"
            className="w-full rounded bg-yellow-300  px-6 py-3 font-semibold text-black"
          >
            Check Result
          </button>
        </form>

        {searched && student && (
          <div className="mt-8 rounded-lg border border-gold bg-navy/5 p-6">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gray-500">Roll Number</dt>
                <dd className="font-semibold">{student.rollNo}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Course</dt>
                <dd className="font-semibold">{student.course}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Marks</dt>
                <dd className="font-semibold">{student.marks}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Status</dt>
                <dd className="font-semibold">{student.status}</dd>
              </div>
            </dl>
          </div>
        )}

        {searched && !student && (
          <p className="mt-8 rounded-lg border border-gray-200 p-5 text-center text-gray-700">
            No result found for this roll number. Please check it and try again,
            or contact the institute.
          </p>
        )}
      </section>
    </>
  );
}
