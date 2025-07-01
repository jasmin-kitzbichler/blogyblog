export const categoryMap = {
  shooting: {
    label: { de: "Sportschießen", en: "Sport Shooting" },
    emoji: "🎯",
  },
  personal: {
    label: { de: "Persönliches", en: "Personal" },
    emoji: "🙋🏼‍♀️",
  },
  tech: {
    label: { de: "Tech", en: "Tech" },
    emoji: "💻",
  },
  travel: {
    label: { de: "Reisen", en: "Travel" },
    emoji: "🗺️",
  },
  updates: {
    label: { de: "Update", en: "Update" },
    emoji: "🛠️",
  },
  photography: {
    label: { de: "Photography", en: "Photography" },
    emoji: "📷",
  },
} as const;

export type CategoryKey = keyof typeof categoryMap;
