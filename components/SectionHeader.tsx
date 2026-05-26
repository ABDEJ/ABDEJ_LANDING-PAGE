export default function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      {label && (
        <p className="text-secondary text-xs tracking-[3px] font-bold uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-bold max-w-xl text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}