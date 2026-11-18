import ModeLayout from "../Components/ModeLayout";

export default function Online() {
  return (
    <ModeLayout
      current="/online"
      title="Online Mode"
      subtitle="Learn from home, at your own comfort."
      intro="Online mode is for students who cannot attend the institute daily. You get the same career oriented courses, with study material and guidance, without having to travel."
      points={[
        "Study from the comfort of your home",
        "Well-prepared study material for all courses",
        "Assignment for every semester",
        "Regular tests and assessments",
        "Online examinations",
        "Personal guidance to every student",
      ]}
    />
  );
}
