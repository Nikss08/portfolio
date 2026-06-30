import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-ink/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate/70">
          © {new Date().getFullYear()} {profile.name}. Built with the MERN stack.
        </p>
        <p className="font-mono text-xs text-slate/70">{`// designed & developed by ${profile.name.split(" ")[0]}`}</p>
      </div>
    </footer>
  );
}
