type FooterColProps = {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
};

export default function FooterCol({
  title,
  items,
}: FooterColProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold">
        {title}
      </h4>

      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}