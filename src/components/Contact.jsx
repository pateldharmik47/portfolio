import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../constants/data";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus({ state: "success", message: "Message sent successfully ✅" });
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setStatus({ state: "error", message: "An error occurred ❌. Please try again." });
      });
  };


  return (
    <section id="contact" className="container max-w-6xl py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {/* Static info with symbols */}
        <div className="space-y-4">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
            <span className="text-2xl">✉️</span>
            <span className="group-hover:underline">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 group">
            <span className="text-2xl">📞</span>
            <span className="group-hover:underline">{contact.phone}</span>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
            <span className="text-2xl">🐙</span>
            <span className="group-hover:underline">GitHub</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
            <span className="text-2xl">🔗</span>
            <span className="group-hover:underline">LinkedIn</span>
          </a>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input type="text" name="from_name" placeholder="Your Name" value={formData.from_name} onChange={handleChange} required className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input type="email" name="from_email" placeholder="Your Email" value={formData.from_email} onChange={handleChange} required className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"></textarea>
          </div>

          <button type="submit" disabled={status.state === "loading"} className="rounded-2xl px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-soft hover:opacity-90 transition disabled:opacity-60">
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p className={
              status.state === "success" ? "text-green-600" :
                status.state === "error" ? "text-red-600" :
                  "text-gray-600"
            }>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
