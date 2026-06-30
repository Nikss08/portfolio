import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { profile } from "../data/content";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");
  setErrorMsg("");

  try {
    const formData = new FormData();

    formData.append("access_key", "4557a898-7be4-4fc6-b9dc-963332185e63");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    // Optional
    formData.append("subject", "New Portfolio Contact");
    formData.append("from_name", "Nikunj Portfolio");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("sent");
      setForm(initialForm);
    } else {
      throw new Error(data.message || "Something went wrong.");
    }
  } catch (err) {
    setStatus("error");
    setErrorMsg(err.message);
  }
};
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel index="05" name="contact" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
              Let's work together.
            </h2>
            <p className="font-body text-slate mt-4 leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is open.
            </p>

            <div className="flex flex-col gap-2 mt-6 font-mono text-sm">
              <a href={`mailto:${profile.email}`} className="text-ink hover:text-accent-dark transition-colors">
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate hover:text-accent-dark transition-colors">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate hover:text-accent-dark transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-slate">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-paper border border-ink/10 font-body text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-slate">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-paper border border-ink/10 font-body text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-slate">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-paper border border-ink/10 font-body text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="font-display font-semibold text-sm px-6 py-3 rounded-full bg-ink text-offwhite hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

           {status === "sent" && (
  <p className="font-mono text-xs text-green-700" font-size="10px">
    ✅ Thank you! Your message has been sent successfully.
  </p>
)}
           {status === "error" && (
  <p className="font-mono text-xs text-red-600">
    ❌ {errorMsg}
  </p>
)}
          </form>
        </div>
      </div>
    </section>
  );
}
