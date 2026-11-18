import ModeLayout from "../Components/ModeLayout";

export default function Offline() {
  return (
    <ModeLayout
      current="/offline"
      title="Offline Mode"
      subtitle="Learn at the institute with faculty and lab practice."
      intro="Offline mode means regular classes at the institute, with experienced faculty, a disciplined environment and hands-on practice in our lab."
      points={[
        "Good and experienced faculty",
        "Well-maintained practical lab with networking",
        "Extra lab time as per requirement",
        "Fully ventilated classrooms and Wi-Fi",
        "Flexible batch timings",
        "Power backup support available",
        "Offline examinations",
        "First aid medical facility available",
      ]}
    />
  );
}
