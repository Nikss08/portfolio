export default function SectionLabel({ index, name }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-xs text-accent-dark tracking-wide">
        {`// ${index} ${name}`}
      </span>
      <span className="flex-1 h-px bg-ink/10" />
    </div>
  );
}
