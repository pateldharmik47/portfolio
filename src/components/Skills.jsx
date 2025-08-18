import { skills } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" className="container max-w-6xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <li key={s} className="px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-700 hover:translate-y-[-2px] transition cursor-pointer">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
