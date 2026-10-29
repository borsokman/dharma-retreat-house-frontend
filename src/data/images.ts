/**
 * Central image registry.
 *
 * The hero uses the real photo in /public. Every other image is a neutral
 * placeholder: replace the entry with the real photo URL when available —
 * every page references images from here only.
 */
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='940' height='650'%3E%3Crect width='940' height='650' fill='%23E8EDE5'/%3E%3Cpath d='M470 180c100 60 180 150 168 260S520 610 470 610s-146-60-158-170 68-200 158-260Z' fill='%23D3DCD0'/%3E%3C/svg%3E";
const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const images = {
  heroLight: publicAsset("dharmahouse-hero-light.jpg"),
  heroDark: publicAsset("dharmahouse-hero-dark.jpg"),
  tawang: {
    hero: publicAsset("tawang/tawang-hero.jpg"),
    welcomeGate: publicAsset("tawang/tawang-welcome.jpg"),
    map: publicAsset("tawang/tawang-map.jpg"),
    monks: publicAsset("tawang/monks.jpg"),
    town: publicAsset("tawang/tawang-town.jpg"),
    alcove: publicAsset("tawang/tawang-alcove.jpg"),
    lake: publicAsset("tawang/tawang-lake-1.jpg"),
    bridge: publicAsset("tawang/tawang-bridge.jpg"),
    selaRoad: publicAsset("tawang/tawang-lake-2.jpg"),
    plainsDusk: publicAsset("tawang/tawang-mountains-3.jpg"),
    mountainLake: publicAsset("tawang/tawang-mountains-4.jpg"),
    monastery: publicAsset("tawang/tawang-monastery.jpg"),
    urgelingGompa: publicAsset("tawang/urgelling-gompa.jpg"),
    warMemorial: publicAsset("tawang/tawang-war-memorial.jpg"),
    nuranang: publicAsset("tawang/nuranang-waterfall.jpg"),
    jaswantgarh: publicAsset("tawang/jaswant-garh-memorial.jpg"),
    selaLake: publicAsset("tawang/sela-lake.jpg"),
    selaPass: publicAsset("tawang/sela-pass.jpg"),
    pengaTengTso: publicAsset("tawang/pankang-teng-tso.jpg"),
    sungesterLake: publicAsset("tawang/sangetsar-lake.jpg"),
    bumlaPass: publicAsset("tawang/bumla-pass.jpg"),
    monpaCulture: publicAsset("tawang/monpa-people.jpg"),
  },
  rooms: {
    gardenDouble: PLACEHOLDER,
    woodenDetail: PLACEHOLDER,
    mountainTwin: PLACEHOLDER,
    balcony: PLACEHOLDER,
    valleySuite: PLACEHOLDER,
    breakfast: PLACEHOLDER,
    luxurySuite: publicAsset("rooms/luxury-suite.jpg"),
    superDeluxe: publicAsset("rooms/super-deluxe.jpg"),
    twinExecutive: publicAsset("rooms/twin-executive.jpg"),
    standardKing: publicAsset("rooms/standard-king.jpg"),
    standardTwin: publicAsset("rooms/standard-twin.jpg"),
  },
  buffet: {
    interior: publicAsset("buffet/dining-buffet.jpg"),
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
