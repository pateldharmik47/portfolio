import protfolio from '../assets/projects/portfolio.png';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
  { id: "github", title: "GitHub", url: "https://github.com/pateldharmik47" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com/in/iampateldharmik" },
];

export const about = {
  name: "Dharmik Patel",
  role: "Full Stack Developer",
  description:
    "Passionate about building fast, accessible, and delightful web experiences. I focus on JavaScript, React, Node.js.",
  location: "Gandhinagar, IN",
};

export const skills = [
  "React", "JavaScript", "HTML5", "CSS3", "Node.js", "Express", "MongoDB", "MySQL",
  "Tailwind CSS", "REST APIs", "Git", "GitHub", "Postman"
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, blog posts, and career highlights with dark mode and animations.",
    tech: ["HTML5", "JavaScript", "ReactJs", "Tailwind", "Vite"],
    image: protfolio,
    link: "https://github.com/username/portfolio"
  },
  {
    title: "MERN Authentication App",
    description:
      "Full-featured authentication app with Google OAuth, JWT tokens, and cookie-based session management.",
    tech: ["HTML5", "JavaScript", "React", "NodeJs", "ExpressJs", "MongoDB"],
    image: "https://picsum.photos/seed/ecom/640/360",
    link: "https://github.com/pateldharmik47/mern-auth"
  },
  {
    title: "Online Bookstore",
    description:
      "Designed a full-stack MERN application for book management with responsive UI.",
    tech: ["HTML5", "JavaScript", "React", "NodeJs", "ExpressJs", "MongoDB"],
    image: "https://picsum.photos/seed/chat/640/360",
    link: "https://github.com/pateldharmik47/Basic-MERN-Project-of-BooksStore"
  }
];

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Software Developer",
    duration: "Sep 2023 — Present",
    description:
      "Built React components, optimized bundle size, integrated REST APIs, and improved UI/UX consistency across modules."
  },
  {
    company: "Internship Inc.",
    role: "Web Developer Intern",
    duration: "Jan 2023 — May 2023",
    description:
      "Implemented responsive pages, collaborated with designers, and delivered features under agile sprints."
  }
];

export const contact = {
  email: "dharmikpatel1947@gmail.com",
  phone: "+91 84016 94209",
  github: "https://github.com/pateldharmik47",
  linkedin: "https://linkedin.com/in/iampateldharmik"
};
