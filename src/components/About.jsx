import { about } from "../constants/data";

export default function About() {
  return (
    <section id="about" className="container max-w-6xl py-20">
      <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        Hi! I&apos;m {about.name} — a {about.role} based in {about.location}.
        I enjoy crafting performant, accessible, and elegant web applications.
        I value clean code, thoughtful UX, and continuous learning.
      </p>
    </section>
  );
}
