import { Link } from "react-router-dom";
import { Wifi, Tv, Coffee, ParkingSquare } from "lucide-react";
import { BookingWidget } from "../components/BookingWidget";
import { images } from "../data/images";
import { site } from "../data/site";
import "./HomePage.css";

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
export default function HomePage() {
  return (
    <>
      {/* ---------- Full-screen hero ---------- */}
      <section className="hero" aria-label="Welcome">
        <picture>
          <source media="(max-width: 760px)" srcSet={`${images.hero}?w=900`} />
          <img
            src={images.hero}
            alt="Dharma Retreat House lit up in the evening"
            className="hero__img"
          />
        </picture>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content container">
          <h1 className="hero__title animate-fade-up">
            A peaceful stay.
            <br />A purpose beyond it.
          </h1>
          <p className="hero__lede animate-fade-up">
            Enjoy a welcoming place to stay and dine, while supporting a
            meaningful cause — every night here helps {site.charityName} thrive.
          </p>
          <div className="animate-fade-up">
            <BookingWidget variant="hero" />
          </div>
        </div>
      </section>
      /* Put the navigation grid card here */
      {/* ---------- Amenities ---------- */}
      <section className="section" aria-labelledby="amenities-title">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Homestay comforts</span>
            <h2 id="amenities-title">Homestay Comforts &amp; Amenities</h2>
            <p className="lede">
              Everything you need for an easy, restful mountain stay.
            </p>
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
      <section className="section" aria-labelledby="quotes-title">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Guest words</span>
            <h2 id="quotes-title">What guests say</h2>
            <p className="lede">
              Placeholder testimonials — replace with real guest feedback.
            </p>
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
        </div>
      </section>
      {/* ---------- Contact CTA ---------- */}
      <section className="section section--sage" aria-labelledby="cta-title">
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
