import { Link } from "react-router-dom";

const iconUrl = `${import.meta.env.BASE_URL}home-icon.jpg`;

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
        width={34}
        height={34}
        aria-hidden="true"
        style={{
          borderRadius: 8,
          objectFit: "cover",
          flexShrink: 0,
        }}
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
