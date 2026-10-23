import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images } from "../data/images";
import "./TawangPage.css";

/* ---------- Intro blocks (zig-zag image + text) ---------- */

const introBlocks: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  size: "tall" | "medium" | "short";
}[] = [
  {
    title: "An unexplored beauty of the North-East",
    paragraphs: [
      "Tawang in Arunachal Pradesh, located in the north-eastern part of India bordering Tibet in the north and Bhutan in the south-west, is praised by all as the unexplored beauty of the North-East with majestic mountain peaks, lakes, forests and waterfalls.",
      "It is one of the most beautiful places in India, ornamented with its rich cultures and traditions.",
    ],
    image: images.tawang.hero,
    alt: "Lush blue-green mountain ridges of Tawang under a dramatic cloudy sky",
    imageSide: "right",
    size: "medium",
  },
  {
    title: "Land of monasteries and masters",
    paragraphs: [
      "Tawang is home to Tawang Monastery, the second largest Buddhist monastery in the world, founded by the great 5th Dalai Lama in the 17th century.",
      "It is also the birthplace of the 6th Dalai Lama and has been the birthplace of many great masters over the centuries.",
    ],
    image: images.tawang.waterfall1,
    alt: "A powerful waterfall plunging down dark rocks in Tawang",
    imageSide: "left",
    size: "medium",
  },
  {
    title: "A small district with a big heart",
    paragraphs: [
      "With an area of 2,000 square kilometres and a population of around sixty thousand, Tawang is one of the smallest districts in Arunachal Pradesh. The majority of the people are followers of Tibetan Buddhism and are very dedicated, religious and hard-working. The local spoken dialect is Monpa, emerging from the Bhoti language, which resembles the Central Tibetan dialect and is also spoken in many other parts of the Himalayan region.",
      "Tawang is blessed with a number of monasteries, nunneries and stupas, which give it a very religious appearance, while at the same time there have been tremendous developments in infrastructure lately.",
      "In today's globalised world the people of Tawang, like many small traditional communities around the world, are facing challenges in preserving their distinctive identity while at the same time integrating into a global community.",
    ],
    image: images.tawang.lake,
    alt: "A calm lake framed by dense pine forest and prayer flags in Tawang",
    imageSide: "right",
    size: "tall",
  },
];

/* ---------- Visiting places (zig-zag, ordered by travel distance) ---------- */

const visitingPlaces: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  size: "tall" | "medium" | "short";
}[] = [
  // Within the city
  {
    title: "Tawang Monastery",
    paragraphs: [
      "Placeholder text — a short description of Tawang Monastery will appear here.",
    ],
    image: images.tawang.monastery,
    alt: "Tawang Monastery",
    imageSide: "left",
    size: "medium",
  },
  {
    title: "Urgeling Gompa",
    paragraphs: [
      "Placeholder text — a short description of Urgeling Gompa will appear here.",
    ],
    image: images.tawang.urgelingGompa,
    alt: "Urgeling Gompa",
    imageSide: "right",
    size: "medium",
  },
  {
    title: "Tawang War Memorial",
    paragraphs: [
      "Placeholder text — a short description of the Tawang War Memorial will appear here.",
    ],
    image: images.tawang.warMemorial,
    alt: "Tawang War Memorial",
    imageSide: "left",
    size: "medium",
  },
  // South-east toward Sela Pass
  {
    title: "Nuranang Waterfalls",
    paragraphs: [
      "Placeholder text — a short description of Nuranang Waterfalls will appear here.",
    ],
    image: images.tawang.nuranang,
    alt: "Nuranang Waterfalls",
    imageSide: "right",
    size: "medium",
  },
  {
    title: "Jaswantgarh War Memorial",
    paragraphs: [
      "Placeholder text — a short description of Jaswantgarh War Memorial will appear here.",
    ],
    image: images.tawang.jaswantgarh,
    alt: "Jaswantgarh War Memorial",
    imageSide: "left",
    size: "medium",
  },
  {
    title: "Sela Lake",
    paragraphs: [
      "Placeholder text — a short description of Sela Lake will appear here.",
    ],
    image: images.tawang.selaLake,
    alt: "Sela Lake",
    imageSide: "right",
    size: "medium",
  },
  {
    title: "Sela Pass",
    paragraphs: [
      "Placeholder text — a short description of Sela Pass will appear here.",
    ],
    image: images.tawang.selaPass,
    alt: "Sela Pass",
    imageSide: "left",
    size: "medium",
  },
  // North of Tawang
  {
    title: "Penga Teng Tso Lake",
    paragraphs: [
      "Placeholder text — a short description of Penga Teng Tso Lake will appear here.",
    ],
    image: images.tawang.pengaTengTso,
    alt: "Penga Teng Tso Lake",
    imageSide: "right",
    size: "medium",
  },
  {
    title: "Sungester Lake",
    paragraphs: [
      "Placeholder text — a short description of Sungester Lake will appear here.",
    ],
    image: images.tawang.sungesterLake,
    alt: "Sungester Lake",
    imageSide: "left",
    size: "medium",
  },
  {
    title: "Bumla Pass",
    paragraphs: [
      "Placeholder text — a short description of Bumla Pass will appear here.",
    ],
    image: images.tawang.bumlaPass,
    alt: "Bumla Pass",
    imageSide: "right",
    size: "medium",
  },
];

/* ---------- Monpa People and Culture ---------- */

const monpaCulture: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  size: "tall" | "medium" | "short";
}[] = [
  {
    title: "The Monpa People and Culture",
    paragraphs: [
      "The Monpas are one of the major tribes of Arunachal Pradesh. The Monpas are Buddhists by religion and Tawang Monastery is the fountainhead of their spiritual lives. They are by and large agriculturists and they have their own distinctive way of clothing themselves, well adapted to the conditions of their environment.",
    ],
    image: images.tawang.monpaCulture,
    alt: "Monpa people in traditional attire",
    imageSide: "right",
    size: "medium",
  },
];

/* ---------- Best Time to Visit ---------- */

const bestTimeParagraphs: string[] = [
  "Tawang is a town in Arunachal Pradesh, profusely bestowed with pristine nature and a vibrant ethnicity. There is a mesh of India and China which can be witnessed during your trip to Tawang. The popular Tawang Monastery plays a special role in attracting different travellers here. The best time to visit Tawang is between March and October; for season-wise details of the town, read further.",
];

const seasonTable: {
  season: string;
  months: string;
  temperature: string;
}[] = [
  { season: "Summers", months: "March to June", temperature: "5 °C – 22 °C" },
  { season: "Monsoon", months: "July to September", temperature: "15 °C – 20 °C" },
  { season: "Winters", months: "November to February", temperature: "2 °C – 10 °C" },
];

const seasonDetails: {
  heading: string;
  text: string;
}[] = [
  {
    heading: "Tawang in summer — March to June",
    text: "Summer is the best time to visit Tawang. The temperature during this time ranges between 5 °C and 22 °C. The days are pleasant and nights are colder. On your visit to Tawang, don't forget to visit the popular attractions: Tawang Monastery, Sela Pass, Taktsang Gompa, Gorichen Peak and Shonga-tser Lake.",
  },
  {
    heading: "Tawang in monsoon — July to September",
    text: "Tawang is mostly wet during the monsoon season. Copious rainfall is sprinkled all over the vicinity and the temperature drops. However, Tawang looks even more enchanting during this season. Visiting Tawang in monsoon is a good idea if you love rains.",
  },
  {
    heading: "Tawang in winter — November to February",
    text: "Winters in Tawang are chilly and the temperature sometimes drops near the freezing point. The maximum temperature during winters in Tawang gets around 10 °C. The coldest month of winter is January. If you are travelling to Tawang during this season, make sure you have enough clothing to keep yourself warm.",
  },
];

/* ---------- ILP / PAP info (two-column, no image) ---------- */

const ilpColumns: {
  title: string;
  icon: "india" | "foreign";
  items: { label: string; value: string }[];
  note?: string;
}[] = [
  {
    title: "For Indian Citizens",
    icon: "india",
    items: [
      {
        label: "Requirement",
        value:
          "All Indian citizens residing outside Arunachal require an Inner Line Permit (ILP) to enter the state. This is a mandatory safety and conservation measure.",
      },
      {
        label: "Online Application",
        value: "Apply via the official eILP portal (eilp.arunachal.gov.in).",
      },
      { label: "Validity", value: "Usually issued for 15 days, extendable." },
      {
        label: "Offline",
        value:
          "Available at Resident Commissioner offices in Delhi, Kolkata and Guwahati.",
      },
      {
        label: "Documents needed",
        value: "Aadhaar Card, passport-size photo and address proof.",
      },
    ],
  },
  {
    title: "For Foreign Nationals",
    icon: "foreign",
    items: [
      {
        label: "Requirement",
        value:
          "Foreign travellers require a Protected Area Permit (PAP). This is typically issued for a group of 2 or more people.",
      },
      { label: "Group Requirement", value: "Minimum 2 adults required." },
      { label: "Duration", value: "Issued for 30 days." },
      { label: "Fee", value: "Approximately $50 per person." },
    ],
    note: "Certain areas near borders may have additional restrictions for foreign tourists.",
  },
];

/* ---------- How to reach blocks (zig-zag) ---------- */

const reachBlocks: {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  size: "tall" | "medium" | "short";
}[] = [
  {
    title: "How to reach Tawang by air",
    paragraphs: [
      "The nearest international airport from Tawang is Lokpriya Gopinath Bordoloi International Airport, Guwahati, roughly 480 km from Tawang. It is well connected with major cities like Delhi, Mumbai, Kolkata, Bengaluru, Hyderabad, Chennai and many others.",
    ],
    image: images.tawang.plainsDusk,
    alt: "Distant blue mountain ranges at dusk over a wide river plain",
    imageSide: "right",
    size: "short",
  },
  {
    title: "Guwahati to Tawang by helicopter",
    paragraphs: [
      "Helicopter service operates from Guwahati Airport to Tawang on Monday, Tuesday, Thursday and Friday. Due to the limited number of seats (on average only 10–12), booking early is essential. The helicopter journey to Tawang over Bhutan takes around 55 minutes.",
    ],
    image: images.tawang.selaRoad,
    alt: "The winding road climbing toward Sela Pass under heavy clouds",
    imageSide: "left",
    size: "short",
  },
  {
    title: "Guwahati to Tawang by road",
    paragraphs: [
      "Tawang is 480 km from Guwahati city in Assam. A journey by car takes around 12 hours, passing through various small towns and villages. The highest peak to cross is Sela Pass, at an altitude of 4,170 metres above sea level.",
    ],
    image: images.tawang.bridge,
    alt: "A wooden suspension bridge decorated with colourful prayer flags over a river",
    imageSide: "right",
    size: "medium",
  },
];

/* ---------- Render helpers ---------- */

type Block = {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  size: "tall" | "medium" | "short";
};

function ZigZagBlock({ block }: { block: Block }) {
  return (
    <article
      className={`tawang-block tawang-block--${block.imageSide} tawang-block--${block.size}`}
    >
      <div className="tawang-block__img">
        <img src={block.image} alt={block.alt} loading="lazy" />
      </div>
      <div className="tawang-block__body">
        <h2>{block.title}</h2>
        {block.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default function TawangPage() {
  return (
    <>
      {/* Hero */}
      <section className="tawang-hero" aria-label="Welcome to Tawang">
        <img
          src={images.tawang.hero}
          alt="Blue mountain ridges of Tawang beneath dramatic clouds"
          className="tawang-hero__img"
        />
        <div className="tawang-hero__overlay" aria-hidden="true" />
        <div className="tawang-hero__content container">
          <p className="eyebrow tawang-hero__eyebrow">Arunachal Pradesh, India</p>
          <h1>Tawang</h1>
          <p className="tawang-hero__lede">
            Majestic peaks, quiet lakes and living monastery culture — the
            unexplored beauty of India's North-East.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" aria-label="About Tawang">
        <div className="container">
          {introBlocks.map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}
        </div>
      </section>

      {/* Visiting places */}
      <section className="section section--sage" aria-label="Places to visit around Tawang">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Explore the region</p>
            <h2>Places to visit around Tawang</h2>
            <p className="lede">
              Organised by travel distance from the hotel in Tawang — starting
              within the town, then heading south-east toward Sela Pass, and
              finally north toward the border.
            </p>
          </div>

          <h3 className="tawang-route-label">Within Tawang town</h3>
          {visitingPlaces.slice(0, 3).map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}

          <h3 className="tawang-route-label">
            South-east toward Sela Pass
          </h3>
          {visitingPlaces.slice(3, 7).map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}

          <h3 className="tawang-route-label">North of Tawang</h3>
          {visitingPlaces.slice(7).map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}
        </div>
      </section>

      {/* Monpa People and Culture */}
      <section className="section" aria-label="The Monpa people and culture">
        <div className="container">
          {monpaCulture.map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="section section--sage" aria-label="Best time to visit Tawang">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Plan your trip</p>
            <h2>Best time to visit Tawang</h2>
          </div>

          <div className="best-time-intro">
            {bestTimeParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="season-table-wrap">
            <table className="season-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Months</th>
                  <th>Temperature</th>
                </tr>
              </thead>
              <tbody>
                {seasonTable.map((row) => (
                  <tr key={row.season}>
                    <td data-label="Season">{row.season}</td>
                    <td data-label="Months">{row.months}</td>
                    <td data-label="Temperature">{row.temperature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="season-details">
            {seasonDetails.map((s) => (
              <div className="season-detail" key={s.heading}>
                <h3>{s.heading}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ILP / PAP — two-column */}
      <section className="section" aria-label="Inner Line Permit information">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Before you travel</p>
            <h2>Inner Line Permit (ILP) information</h2>
            <p className="lede">
              Essential travel documents required for every visitor entering the
              state of Arunachal Pradesh.
            </p>
          </div>

          <div className="ilp-grid">
            {ilpColumns.map((col) => (
              <div className="ilp-card" key={col.title}>
                <h3 className="ilp-card__title">{col.title}</h3>
                <dl className="ilp-card__list">
                  {col.items.map((item) => (
                    <div className="ilp-card__item" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
                {col.note && (
                  <p className="ilp-card__note">
                    <strong>Note:</strong> {col.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach */}
      <section className="section section--sage" aria-label="How to reach Tawang">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Getting here</p>
            <h2>How to reach Tawang</h2>
          </div>
          {reachBlocks.map((block) => (
            <ZigZagBlock key={block.title} block={block} />
          ))}

          <div className="text-center" style={{ marginTop: "var(--space-5)" }}>
            <p className="lede" style={{ maxWidth: 560, margin: "0 auto 16px" }}>
              Dharma Retreat House sits right in this landscape — rest here
              while you explore.
            </p>
            <Link to="/stay" className="btn btn--primary">
              Book your stay <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
