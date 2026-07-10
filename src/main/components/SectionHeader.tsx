import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  desc?: string;
};

export default function SectionHeader({ eyebrow, title, desc }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>

        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>

        {desc && <p className="mt-4 text-lg text-muted-foreground">{desc}</p>}
      </div>
    </Reveal>
  );
}
