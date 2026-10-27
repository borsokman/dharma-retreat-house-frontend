import { Link } from "react-router-dom";
import { Wifi, Tv, Coffee, ParkingSquare, ArrowRight } from "lucide-react";
import { BookingWidget } from "../components/BookingWidget";
import { images } from "../data/images";
// import { site } from "../data/site";
import "./HomePage.css";

type NavigationCard = {
  title: string;
  image: string;
  alt: string;
  to?: string;
};

const navigationCards: NavigationCard[] = [
  {
    title: "Rooms & Suites",
    image: images.rooms.luxurySuite,
    alt: "Luxury suite at Dharma Retreat House",
    to: "/stay",
  },
  {
    title: "Buffet",
    image: images.buffet.interior,
    alt: "Freshly prepared buffet at Dharma Retreat House",
    to: "/buffet",
  },
  {
    title: "Explore Tawang",
    image: images.tawang.hero,
    alt: "Mountain landscape in Tawang",
    to: "/tawang",
  },
  {
    title: "Dharma Coffee House & Library",
    image: images.gallery.gardenPath,
    alt: "Placeholder image for Dharma Coffee House",
  },
  {
    title: "Gallery",
    image: images.gallery.monastery,
    alt: "Placeholder image for the gallery",
    to: "/gallery",
  },
  {
    title: "Our Mission",
    image: images.mission.classroom,
    alt: "Placeholder image for the school mission",
    to: "/our-mission",
  },
];

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    body: "Complimentary high-speed internet throughout all guest rooms & lounge areas.",
  },
  {
    icon: Tv,
    title: '55" Google TV',
    body: "In-room smart streaming entertainment for relaxing mountain evenings.",
  },
  {
    icon: Coffee,
    title: "Home-Style Breakfast",
    body: "Delicious hot, complimentary home-style breakfast prepared fresh daily.",
  },
  {
    icon: ParkingSquare,
    title: "Private Guest Parking",
    body: "Ample, safe, and convenient private vehicle parking on premises.",
  },
];

const reviewsUrl =
  "https://www.google.com/maps/place/Dharma+Retreat+House/@27.594589,91.8584247,17z/data=!4m12!3m11!1s0x375cf5c9ed88412b:0xd486e28ff3387c18!5m3!1s2026-10-26!4m1!1i2!8m2!3d27.594589!4d91.8609996!9m1!1b1!16s%2Fg%2F11yvds_jj7?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D";

function NavigationCardView({ card }: { card: NavigationCard }) {
  const content = (
    <>
      <div className="home-nav-card__image">
        <img
          src={card.image}
          alt={card.alt}
          loading="lazy"
          width="940"
          height="650"
        />
      </div>
      <div className="home-nav-card__body">
        <h2>{card.title}</h2>
      </div>
    </>
  );

  return card.to ? (
    <Link to={card.to} className="home-nav-card card card--hover">
      {content}
    </Link>
  ) : (
    <article className="home-nav-card card home-nav-card--coming-soon">
      {content}
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ---------- Full-screen hero ---------- */}
      <section className="hero" aria-label="Welcome">
        <picture>
          <source
            media="(max-width: 760px)"
            srcSet={`${images.heroLight}?w=900`}
          />
          <img
            src={images.heroLight}
            alt="Dharma Retreat House lit up in the evening"
            className="hero__img hero__img--light"
          />
        </picture>
        <img
          src={images.heroDark}
          alt=""
          aria-hidden="true"
          className="hero__img hero__img--dark"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 className="hero__title animate-fade-up">
            A peaceful stay.
            <br />A purpose beyond it.
          </h1>
          <p className="hero__lede animate-fade-up">
            A tranquil, boutique homestay experience combining authentic
            Himalayan warmth with modern comforts and scenic mountain vistas.
          </p>
          <div className="animate-fade-up">
            <BookingWidget variant="hero" />
          </div>
        </div>
      </section>

      {/* ---------- Navigation cards ---------- */}
      <section
        className="section home-navigation"
        aria-labelledby="home-navigation-title"
      >
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Find Your Way Around</span>
          </div>
          <div className="home-nav-grid">
            {navigationCards.map((card) => (
              <NavigationCardView key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Amenities ---------- */}
      <section className="section" aria-labelledby="amenities-title">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Homestay Comforts</span>
          </div>
          <div className="amenities">
            {amenities.map((a) => (
              <article key={a.title} className="card card--hover amenity">
                <a.icon size={26} aria-hidden="true" />
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section section--sage" aria-labelledby="quotes-title">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Guest words</span>
          </div>
          <div className="quotes">
            <figure className="card card--hover quote">
              <blockquote>
                "One of the best places to stay in Tawang! Comfortable rooms,
                warm hospitality, excellent service, and delicious food. Truly a
                wonderful stay and highly recommended."
              </blockquote>
              <figcaption>James Man Rangai, Germany</figcaption>
            </figure>
            <figure className="card card--hover quote">
              <blockquote>
                "Great ambience, great hospitality and most amazing rooms ever."
              </blockquote>
              <figcaption>Kunchok Dolma, Nepal</figcaption>
            </figure>
            <figure className="card card--hover quote">
              <blockquote>
                "Had a wonderful stay at Dharma Retreat House! Everything was
                excellent—the rooms were clean and comfortable, the food was
                delicious, and the staff were extremely kind and welcoming. The
                peaceful atmosphere made the stay even more special. Overall, a
                beautiful experience with great hospitality. Highly recommended!
                Would definitely love to visit again. ❤️"
              </blockquote>
              <figcaption>Rinchin Jangmu, India</figcaption>
            </figure>
          </div>
          <div className="text-center home-reviews__link">
            <a
              className="btn btn--primary"
              href={reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read all Google reviews{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Contact CTA ---------- */}
      <section className="section" aria-labelledby="cta-title">
        <div className="container text-center">
          <h2 id="cta-title">Come and stay</h2>
          <p className="lede" style={{ maxWidth: 560, margin: "0 auto 24px" }}>
            Questions about rooms, the buffet or something else? We're happy to
            help.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
