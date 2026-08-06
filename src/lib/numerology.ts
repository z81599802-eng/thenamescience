/**
 * Core numerology engine — pure functions, no side effects.
 * Pythagorean and Chaldean letter maps, digit reduction with master numbers.
 */

export const PYTHAGOREAN: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8,
};

export const CHALDEAN: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 8,
  g: 3,
  h: 5,
  i: 1,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 7,
  p: 8,
  q: 1,
  r: 2,
  s: 3,
  t: 4,
  u: 6,
  v: 6,
  w: 6,
  x: 5,
  y: 1,
  z: 7,
};

const VOWELS = new Set(["a", "e", "i", "o", "u"]);
export const MASTER_NUMBERS = [11, 22, 33];
export const KARMIC_DEBT = [13, 14, 16, 19];

export function digitSum(n: number): number {
  return String(Math.abs(n))
    .split("")
    .reduce((a, d) => a + Number(d), 0);
}

/** Reduce to a single digit, preserving master numbers when requested. */
export function reduce(n: number, keepMaster = true): number {
  let value = Math.abs(Math.trunc(n));
  while (value > 9) {
    if (keepMaster && MASTER_NUMBERS.includes(value)) return value;
    value = digitSum(value);
  }
  return value;
}

export function letters(name: string): string[] {
  return name.toLowerCase().replace(/[^a-z]/g, "").split("");
}

export function nameTotal(name: string, system: "pythagorean" | "chaldean" = "pythagorean") {
  const map = system === "chaldean" ? CHALDEAN : PYTHAGOREAN;
  return letters(name).reduce((sum, ch) => sum + (map[ch] ?? 0), 0);
}

export function nameNumber(name: string, system: "pythagorean" | "chaldean" = "pythagorean") {
  const total = nameTotal(name, system);
  return { total, number: reduce(total) };
}

/** Soul urge — vowels only. */
export function soulNumber(name: string) {
  const total = letters(name)
    .filter((c) => VOWELS.has(c))
    .reduce((s, c) => s + (PYTHAGOREAN[c] ?? 0), 0);
  return { total, number: reduce(total) };
}

/** Personality — consonants only. */
export function personalityNumber(name: string) {
  const total = letters(name)
    .filter((c) => !VOWELS.has(c))
    .reduce((s, c) => s + (PYTHAGOREAN[c] ?? 0), 0);
  return { total, number: reduce(total) };
}

type DateParts = { year: number; month: number; day: number };

export function parseDate(input: string): DateParts | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input.trim());
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  return { year, month, day };
}

/** Life path: reduce day, month and year separately, then combine. */
export function lifePath(dateStr: string) {
  const d = parseDate(dateStr);
  if (!d) return null;
  const parts = [reduce(d.day), reduce(d.month), reduce(d.year)];
  const total = parts.reduce((a, b) => a + b, 0);
  return { parts, total, number: reduce(total) };
}

/** Destiny / birth-total number: sum of every digit in the date. */
export function destinyNumber(dateStr: string) {
  const d = parseDate(dateStr);
  if (!d) return null;
  const total = digitSum(d.day) + digitSum(d.month) + digitSum(d.year);
  return { total, number: reduce(total) };
}

export function birthdayNumber(dateStr: string) {
  const d = parseDate(dateStr);
  if (!d) return null;
  return { total: d.day, number: reduce(d.day) };
}

export function personalYear(dateStr: string, year = new Date().getFullYear()) {
  const d = parseDate(dateStr);
  if (!d) return null;
  const total = reduce(d.day) + reduce(d.month) + reduce(year);
  return { total, year, number: reduce(total, false) };
}

/** Digits-only inputs: mobile, house, vehicle numbers. */
export function digitsNumber(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  const total = digits.split("").reduce((a, d) => a + Number(d), 0);
  return { digits, total, number: reduce(total) };
}

export function compatibility(dateA: string, dateB: string) {
  const a = lifePath(dateA);
  const b = lifePath(dateB);
  if (!a || !b) return null;
  const diff = Math.abs(reduce(a.number, false) - reduce(b.number, false));
  const harmonic = [0, 3, 6].includes(diff) ? 24 : [1, 4].includes(diff) ? 10 : 0;
  const blend = reduce(a.number + b.number);
  const score = Math.min(98, 58 + harmonic + (MASTER_NUMBERS.includes(blend) ? 12 : blend));
  return { a: a.number, b: b.number, blend, score };
}

export const LUCKY_COLORS: Record<number, string[]> = {
  1: ["Golden Amber", "Warm Ivory", "Copper"],
  2: ["Pearl White", "Soft Sage", "Moon Silver"],
  3: ["Champagne Gold", "Saffron", "Warm Beige"],
  4: ["Stone Grey", "Deep Olive", "Muted Bronze"],
  5: ["Fresh Emerald", "Mint", "Light Ash"],
  6: ["Rose Beige", "Ivory Cream", "Powder Blue"],
  7: ["Sea Green", "Smoke Grey", "Pale Aqua"],
  8: ["Midnight Charcoal", "Deep Indigo", "Antique Gold"],
  9: ["Terracotta", "Burnt Coral", "Bronze"],
  11: ["Silver Mist", "Ivory", "Pale Gold"],
  22: ["Deep Emerald", "Ivory", "Bronze"],
  33: ["Warm Gold", "Cream", "Soft Rose"],
};

export const LUCKY_DAYS: Record<number, string[]> = {
  1: ["Sunday", "Monday"],
  2: ["Monday", "Friday"],
  3: ["Thursday", "Tuesday"],
  4: ["Saturday", "Sunday"],
  5: ["Wednesday", "Friday"],
  6: ["Friday", "Wednesday"],
  7: ["Monday", "Sunday"],
  8: ["Saturday", "Friday"],
  9: ["Tuesday", "Thursday"],
  11: ["Monday", "Thursday"],
  22: ["Saturday", "Friday"],
  33: ["Friday", "Thursday"],
};

export const LUCKY_NUMBERS: Record<number, number[]> = {
  1: [1, 10, 19, 28],
  2: [2, 11, 20, 29],
  3: [3, 12, 21, 30],
  4: [4, 13, 22, 31],
  5: [5, 14, 23],
  6: [6, 15, 24],
  7: [7, 16, 25],
  8: [8, 17, 26],
  9: [9, 18, 27],
  11: [2, 11, 20, 29],
  22: [4, 13, 22, 31],
  33: [6, 15, 24, 33],
};

export type NumberProfile = {
  number: number;
  title: string;
  keyword: string;
  summary: string;
  strengths: string[];
  caution: string;
};

export const NUMBER_PROFILES: Record<number, NumberProfile> = {
  1: {
    number: 1,
    title: "The Initiator",
    keyword: "Leadership",
    summary:
      "A pioneering vibration. You are built to begin things, to hold a vision steady until it becomes real, and to lead without waiting for permission.",
    strengths: ["Original thinking", "Decisive action", "Self-reliance"],
    caution: "Learning to receive help is your growth edge.",
  },
  2: {
    number: 2,
    title: "The Diplomat",
    keyword: "Harmony",
    summary:
      "A sensitive, cooperative vibration. You read rooms before words are spoken and build trust through patience rather than force.",
    strengths: ["Intuition", "Partnership", "Gentle persuasion"],
    caution: "Guard against over-adapting to keep the peace.",
  },
  3: {
    number: 3,
    title: "The Communicator",
    keyword: "Expression",
    summary:
      "A creative, luminous vibration. Language, art and presence are your instruments; you lift the mood of every space you enter.",
    strengths: ["Creativity", "Optimism", "Charisma"],
    caution: "Focus turns your many talents into one legacy.",
  },
  4: {
    number: 4,
    title: "The Architect",
    keyword: "Foundation",
    summary:
      "A grounded, structural vibration. You convert ideas into systems and are trusted with what must not fail.",
    strengths: ["Discipline", "Reliability", "Craftsmanship"],
    caution: "Allow flexibility; not every plan needs defending.",
  },
  5: {
    number: 5,
    title: "The Explorer",
    keyword: "Freedom",
    summary:
      "A quicksilver vibration of movement and change. You learn by experience and thrive where variety is welcome.",
    strengths: ["Adaptability", "Curiosity", "Magnetism"],
    caution: "Commitment is what turns experience into mastery.",
  },
  6: {
    number: 6,
    title: "The Guardian",
    keyword: "Nurture",
    summary:
      "A warm, responsible vibration. Home, beauty and service run through your chart; people heal in your presence.",
    strengths: ["Care", "Aesthetic sense", "Loyalty"],
    caution: "Serve without carrying what is not yours.",
  },
  7: {
    number: 7,
    title: "The Seeker",
    keyword: "Wisdom",
    summary:
      "An analytical and contemplative vibration. You are here to look beneath the surface and return with understanding.",
    strengths: ["Depth", "Research", "Discernment"],
    caution: "Solitude is fuel, not a hiding place.",
  },
  8: {
    number: 8,
    title: "The Builder of Wealth",
    keyword: "Authority",
    summary:
      "A powerful executive vibration. You understand value, leverage and long horizons, and you are meant to steward resources.",
    strengths: ["Strategy", "Resilience", "Material mastery"],
    caution: "Balance ambition with rest and relationship.",
  },
  9: {
    number: 9,
    title: "The Humanitarian",
    keyword: "Completion",
    summary:
      "A broad, compassionate vibration. You carry the wisdom of every number before you and are drawn to work larger than yourself.",
    strengths: ["Compassion", "Vision", "Artistry"],
    caution: "Release what has finished so the new can arrive.",
  },
  11: {
    number: 11,
    title: "The Illuminator",
    keyword: "Intuition",
    summary:
      "A master vibration of heightened perception. You are a channel — insight arrives before evidence does.",
    strengths: ["Inspiration", "Sensitivity", "Spiritual clarity"],
    caution: "Ground your energy through routine and stillness.",
  },
  22: {
    number: 22,
    title: "The Master Builder",
    keyword: "Manifestation",
    summary:
      "A master vibration that unites vision with structure. You can build things that outlive you.",
    strengths: ["Scale", "Patience", "Practical vision"],
    caution: "Begin smaller than your vision to keep momentum.",
  },
  33: {
    number: 33,
    title: "The Master Teacher",
    keyword: "Devotion",
    summary:
      "A rare vibration of selfless guidance. Teaching, healing and uplifting others is the throughline of your path.",
    strengths: ["Empathy", "Guidance", "Grace"],
    caution: "Protect your own well being first.",
  },
};

export function profileFor(n: number): NumberProfile {
  return NUMBER_PROFILES[n] ?? NUMBER_PROFILES[reduce(n, false)] ?? NUMBER_PROFILES[1]!;
}

export function karmicNote(total: number): string | null {
  return KARMIC_DEBT.includes(total)
    ? `Total ${total} carries a karmic-debt signature — a lesson number worth reviewing in consultation.`
    : null;
}

export function luckySetFor(n: number) {
  const key = NUMBER_PROFILES[n] ? n : reduce(n, false);
  return {
    numbers: LUCKY_NUMBERS[key] ?? LUCKY_NUMBERS[1]!,
    colors: LUCKY_COLORS[key] ?? LUCKY_COLORS[1]!,
    days: LUCKY_DAYS[key] ?? LUCKY_DAYS[1]!,
  };
}
