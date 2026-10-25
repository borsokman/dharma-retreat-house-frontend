/**
 * Central image registry.
 *
 * The hero uses the real photo in /public. Every other image is a neutral
 * placeholder: replace the entry with the real photo URL when available —
 * every page references images from here only.
 */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='940' height='650'%3E%3Crect width='940' height='650' fill='%23E8EDE5'/%3E%3Cpath d='M470 180c100 60 180 150 168 260S520 610 470 610s-146-60-158-170 68-200 158-260Z' fill='%23D3DCD0'/%3E%3C/svg%3E";

export const images = {
  hero: "/dharmahouse-hero.jpg",
  tawang: {
    hero: "/tawang/tawang-hero.jpg",
    welcomeGate: "/tawang/tawang-welcome.jpg",
    monks: "/tawang/monks.jpg",
    town: "/tawang/tawang-town.jpg",
    alcove: "/tawang/tawang-alcove.jpg",
    lake: "/tawang/tawang-lake-1.jpg",
    bridge: "/tawang/tawang-bridge.jpg",
    selaRoad: "/tawang/tawang-lake-2.jpg",
    plainsDusk: "/tawang/tawang-mountains-3.jpg",
    mountainLake: "/tawang/tawang-mountains-4.jpg",
    monastery: "/tawang/tawang-monastery.jpg",
    urgelingGompa: "/tawang/urgelling-gompa.jpg",
    warMemorial: "/tawang/tawang-war-memorial.jpg",
    nuranang: "/tawang/nuranang-waterfall.jpg",
    jaswantgarh: "/tawang/jaswant-garh-memorial.jpg",
    selaLake: "/tawang/sela-lake.jpg",
    selaPass: "/tawang/sela-pass.jpg",
    pengaTengTso: "/tawang/pankang-teng-tso.jpg",
    sungesterLake: "/tawang/sangetsar-lake.jpg",
    bumlaPass: "/tawang/bumla-pass.jpg",
    monpaCulture: "/tawang/monpa-people.jpg",
    bestTime: PLACEHOLDER,
  },
  rooms: {
    gardenDouble: PLACEHOLDER,
    woodenDetail: PLACEHOLDER,
    mountainTwin: PLACEHOLDER,
    balcony: PLACEHOLDER,
    valleySuite: PLACEHOLDER,
    breakfast: PLACEHOLDER,
    luxurySuite: "/rooms/luxury-suite.jpg",
    superDeluxe: "/rooms/super-deluxe.jpg",
    twinExecutive: "/rooms/twin-executive.jpg",
    standardKing: "/rooms/standard-king.jpg",
    standardTwin: "/rooms/standard-twin.jpg",
  },
  restaurant: {
    interior: "/buffet/dining-buffet.jpg",
    tableSetting: PLACEHOLDER,
    candles: PLACEHOLDER,
    wine: PLACEHOLDER,
  },
  mission: {
    classroom: PLACEHOLDER,
    studying: PLACEHOLDER,
    teacher: PLACEHOLDER,
  },
  gallery: {
    monastery: PLACEHOLDER,
    stupa: PLACEHOLDER,
    prayerFlags: PLACEHOLDER,
    himalayaSunrise: PLACEHOLDER,
    himalayaMist: PLACEHOLDER,
    goldenHour: PLACEHOLDER,
    gardenPath: PLACEHOLDER,
    gardenFlowers: PLACEHOLDER,
    gardenStone: PLACEHOLDER,
  },
} as const;
