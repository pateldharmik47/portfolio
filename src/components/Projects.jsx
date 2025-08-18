import { projects } from "../constants/data";

export default function Projects() {
  return (
    <section id="projects" className="container max-w-6xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
             className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-soft transition">
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
