import SectionTag from "./SectionTag";

type Props = {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function PageHeader({ tag, title, subtitle }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
      <SectionTag>{tag}</SectionTag>
      <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-4" style={{ color: "var(--fg)" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--fg-2)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
