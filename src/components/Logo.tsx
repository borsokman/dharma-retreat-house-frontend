import { Link } from "react-router-dom";

const iconUrl = `${import.meta.env.BASE_URL}homepage-icon.svg`;

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "#F9F6F0" : "var(--text)";
  return (
    <Link
      to="/"
      aria-label="Dharma Retreat House — home"
      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
    >
      <img
        src={iconUrl}
        alt=""
        width={36}
        height={36}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: "1.25rem",
          color,
          lineHeight: 1.15,
        }}
      >
        Dharma Retreat House
      </span>
    </Link>
  );
}
