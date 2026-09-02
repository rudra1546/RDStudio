import { Link } from "react-router-dom";

type FooterColProps = {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
};

export default function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>

      <ul className="mt-4 space-y-2.5">
        {items.map((item) => {
          const isInternal = item.href.startsWith("/") && !item.href.endsWith(".pdf");
          return (
            <li key={item.label}>
              {isInternal ? (
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
