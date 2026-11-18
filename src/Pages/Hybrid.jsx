import ModeLayout from "../Components/ModeLayout";

export default function Hybrid() {
  return (
    <ModeLayout
      current="/hybrid"
      title="Hybrid Mode"
      subtitle="The best of classroom and online learning."
      intro="Hybrid mode combines both. You do your practical work at the institute and study the rest from home, so you save time without missing hands-on practice."
      points={[
        "Practical work in the institute lab",
        "Theory and study material at home",
        "Flexible batch timings",
        "Regular tests and assessments",
        "Online / offline examinations",
        "Personal guidance to every student",
      ]}
    />
  );
}
