import { experience } from "../constants/data";

export default function Experience() {
  return (
    <section id="experience" className="container max-w-6xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      <div className="mt-8 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>
        <ul className="space-y-10">
          {experience.map((e, i) => (
            <li key={i} className="relative flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{e.company}</p>
                <p className="text-xs text-gray-500">{e.duration}</p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-900 dark:bg-white"></div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-600 dark:text-gray-300">{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
