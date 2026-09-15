export const STUDIO = {
  name: "The Name Science Studio",
  short: "The Name Science",
  tagline: "Numerology & Namelogy Consultation Studio",
  url: "https://www.thenamescience.com",
  phone: "+91 86829 54420",
  whatsapp: "918682954420",
  email: "studio@thenamescience.com",
  address: "12 Ivory Lane, Alwarpet, Chennai 600018, India",
  hours: "Mon – Sat · 10:00 – 19:00 IST",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  duration: string;
  mode: string;
};

export const SERVICES: Service[] = [
  {
    slug: "dob-analysis",
    title: "DOB Analysis",
    summary: "Complete Date of Birth chart calculation & life path guidance.",
    detail:
      "We map your core birth date numbers, Life Path, Destiny, and personal year cycles into actionable decisions for your life path.",
    duration: "60 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "name-correction",
    title: "Name Analysis & Correction",
    summary: "Refine your name spelling so it vibrates harmoniously with your birth chart.",
    detail:
      "Subtle spelling shifts change the numeric total of your name. We test variant spellings against your chart to find the most supportive vibration.",
    duration: "60 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "mobile-number",
    title: "Mobile Number Selection",
    summary: "Choose personal phone numbers aligned with your personal goals.",
    detail:
      "Your mobile number is repeated daily. We analyze candidates and recommend digit combinations that attract positive energy and growth.",
    duration: "45 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "vehicle-number",
    title: "Vehicle Number Selection",
    summary: "Select auspicious license plate digits for safety and smooth travel.",
    detail:
      "We evaluate candidate vehicle numbers against your birth chart to ensure safety, harmony, and protection on every journey.",
    duration: "45 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "atm-pin-password",
    title: "ATM PIN & Password Vibrations",
    summary: "Harmonize security PINs and daily financial codes.",
    detail:
      "Align your primary ATM PINs and daily transaction passcodes with favorable wealth digits to promote financial flow and protection.",
    duration: "30 minutes",
    mode: "Online",
  },
  {
    slug: "bank-account-number",
    title: "Bank Account Number Selection",
    summary: "Choose bank account number totals for wealth compounding.",
    detail:
      "Evaluate account numbers for businesses or individuals to choose account digit totals that support prosperity and financial stability.",
    duration: "45 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "business-name",
    title: "Business & Brand Naming",
    summary: "Company, brand, domain and trading name alignment for founders.",
    detail:
      "For new ventures and rebrands: we evaluate shortlisted business names, legal entities, domain options, and recommend auspicious launch windows.",
    duration: "90 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "business-mobile-number",
    title: "Business Mobile Number Selection",
    summary: "Select commercial phone lines tailored for sales and client trust.",
    detail:
      "Commercial lines carry business energy. We test business contact numbers against founder charts and industry sector temperaments.",
    duration: "45 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "passwords-security",
    title: "Security Passwords & Passcodes",
    summary: "Numeric selection for digital security codes and vault passcodes.",
    detail:
      "Practical guidance on personal and corporate security passcode totals for positive resonance and peace of mind.",
    duration: "30 minutes",
    mode: "Online",
  },
  {
    slug: "baby-naming",
    title: "Baby Naming Consultation",
    summary: "A shortlist of beautiful, harmonious names for your child.",
    detail:
      "We prepare curated names with meanings, numeric values, and pronunciation notes, fully aligned with your child's birth date.",
    duration: "60 minutes",
    mode: "Online or in studio",
  },
  {
    slug: "lucky-number-consultation",
    title: "Lucky Number & Date Consultation",
    summary: "Lucky numbers, colors, dates and house numbers for your season.",
    detail:
      "Comprehensive analysis for personal lucky digits, apartment/house numbers, signing dates, and favorable color palettes.",
    duration: "45 minutes",
    mode: "Online or in studio",
  },
];

export const PACKAGES = [
  {
    name: "Essential",
    price: "₹4,500",
    for: "A single focused question",
    includes: [
      "45 minute consultation",
      "Core number summary",
      "Written one-page report",
      "7 days of follow-up over email",
    ],
  },
  {
    name: "Signature",
    price: "₹9,800",
    for: "Personal transformation work",
    includes: [
      "75 minute consultation",
      "Full chart with all core numbers",
      "Name refinement recommendations",
      "Lucky numbers, colours and dates",
      "30 days of follow-up support",
    ],
    featured: true,
  },
  {
    name: "Atelier",
    price: "₹24,000",
    for: "Founders, families and brands",
    includes: [
      "Three sessions across the quarter",
      "Business or baby naming shortlist",
      "Personal year forecast",
      "Partner or team compatibility review",
      "Priority WhatsApp access",
    ],
  },
];

export const STATS = [
  { value: 22, suffix: "+", label: "Years of practice" },
  { value: 2000, suffix: "+", label: "Consultations completed" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
  { value: 96, suffix: "%", label: "Clients who return" },
];

export const WHY_US = [
  {
    title: "Twenty Two years of practice",
    body: "A single practitioner-led studio. Every chart is read by hand, never generated by a template.",
  },
  {
    title: "A structured, scientific method",
    body: "Pythagorean and Chaldean systems applied consistently, with the reasoning always shown to you.",
  },
  {
    title: "Thousands of clients",
    body: "Families, founders, artists and executives, many returning for a decade.",
  },
  {
    title: "Personal guidance",
    body: "No scripts. Sessions move at your pace, in your language, with notes you can revisit.",
  },
  {
    title: "Completely confidential",
    body: "Birth details and business plans stay inside the studio. Always.",
  },
  {
    title: "Practical outcomes",
    body: "Every reading ends with three decisions to make and dates to make them on.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ananya R.",
    role: "Founder, textile atelier",
    quote:
      "The name refinement was subtle — two letters. Within a year our export enquiries had tripled and the brand finally felt like mine.",
    before: "Stalled brand, unclear positioning",
    after: "3× export enquiries in 12 months",
  },
  {
    name: "Karthik & Meera",
    role: "Married 2023",
    quote:
      "The compatibility reading gave us language for the differences we already felt. It made our first year kinder.",
    before: "Recurring friction over money",
    after: "A shared calendar and clearer roles",
  },
  {
    name: "Dr. Suresh V.",
    role: "Consultant surgeon",
    quote:
      "I arrived sceptical and left with a structure. The personal-year work explained a decade of my career in one hour.",
    before: "Career plateau after 12 years",
    after: "New department leadership role",
  },
  {
    name: "Priya N.",
    role: "New parent",
    quote:
      "Eighteen names, each with meaning and numbers explained. Choosing our daughter's name became joyful instead of stressful.",
    before: "Family disagreement on names",
    after: "A name everyone loves",
  },
];

export const JOURNEY = [
  {
    step: "Intake",
    body: "You share your birth date, time, place and the question you are carrying.",
  },
  {
    step: "Chart preparation",
    body: "The studio prepares your full numeric chart by hand before you arrive.",
  },
  { step: "Consultation", body: "A calm, unhurried conversation — online or in studio." },
  {
    step: "Written report",
    body: "Your chart, recommendations and dates, beautifully documented.",
  },
  { step: "Follow through", body: "Support while you implement the changes you decided on." },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "numerology-basics",
    title: "Numerology Basics: The Nine Vibrations",
    category: "Foundations",
    excerpt:
      "Every number from one to nine carries a temperament. Learn to read them before you read a chart.",
    readTime: "7 min",
    date: "2026-06-18",
    body: [
      "Numerology begins with a simple premise: quantity carries quality. A single unit behaves differently from a pair, and a pair behaves differently from a trio. Watch any group of people form and you will see it — one leads, two negotiate, three create.",
      "The nine base vibrations are the alphabet of the practice. One initiates. Two harmonises. Three expresses. Four structures. Five moves. Six protects. Seven investigates. Eight commands resources. Nine completes and releases.",
      "Before calculating anything, learn to recognise these temperaments in the world around you. A chart only becomes useful once the numbers stop being arithmetic and start being character.",
    ],
  },
  {
    slug: "power-of-your-name",
    title: "The Quiet Power of Your Name",
    category: "Namelogy",
    excerpt:
      "Your name is the sound you answer to thousands of times a year. Namelogy asks what that sound is building.",
    readTime: "6 min",
    date: "2026-06-02",
    body: [
      "A name is repetition. It is spoken to you, about you, and by you more often than any other word in your life. Namelogy treats that repetition as a vibration with a measurable value.",
      "We calculate a name using either the Pythagorean or Chaldean map, then compare that total with the birth chart. Where the two agree, life tends to feel frictionless. Where they disagree, effort produces less than it should.",
      "Correction is rarely dramatic. A doubled letter, a dropped initial, a different transliteration — enough to move the total without losing the name your family gave you.",
    ],
  },
  {
    slug: "choosing-lucky-numbers",
    title: "How to Choose Lucky Numbers Well",
    category: "Practical",
    excerpt: "Mobile numbers, vehicle plates, apartment numbers — small choices, repeated daily.",
    readTime: "5 min",
    date: "2026-05-21",
    body: [
      "Lucky numbers are not talismans. They are alignment: choosing, where you have a choice, the digits that agree with your chart rather than argue with it.",
      "Reduce the full number to a single digit and read it against your Life Path. Then check the running total for karmic-debt signatures of 13, 14, 16 and 19.",
      "Where you cannot choose, do not worry. Alignment matters most in things you touch daily.",
    ],
  },
  {
    slug: "business-name-that-compounds",
    title: "A Business Name That Compounds",
    category: "Business",
    excerpt: "Naming a company is a twenty-year decision made in an afternoon. Slow it down.",
    readTime: "8 min",
    date: "2026-05-04",
    body: [
      "Founders usually name companies for availability rather than resonance. The domain is free, the trademark is clear, the logo works — done.",
      "A numeric review adds one more filter: does this name agree with the founder's chart and with the sector's temperament? Eight-vibration names suit capital-heavy industries. Three-vibration names suit media and design.",
      "We test the legal entity name, the trading name and the domain separately. They are three different vibrations and all three get spoken.",
    ],
  },
  {
    slug: "naming-a-child",
    title: "Naming a Child Without Anxiety",
    category: "Family",
    excerpt: "A calm framework for families choosing a first name together.",
    readTime: "6 min",
    date: "2026-04-19",
    body: [
      "Baby naming carries more emotion than any other consultation. Grandparents have candidates, parents have favourites, and everyone wants the child to be well.",
      "The studio approach is to widen before narrowing: gather every candidate, calculate each, and remove only the ones that genuinely conflict with the birth chart.",
      "What remains is a shortlist everyone can love. Numbers become a way to agree rather than a way to argue.",
    ],
  },
  {
    slug: "personal-growth-cycles",
    title: "Personal Year Cycles and Personal Growth",
    category: "Growth",
    excerpt: "Why some years feel like planting and others feel like harvest.",
    readTime: "7 min",
    date: "2026-04-02",
    body: [
      "Your personal year is calculated from your birth day, birth month and the current calendar year. It moves in a nine-year cycle.",
      "One-years begin things. Four-years build. Seven-years withdraw and study. Nine-years end and release. Fighting the year is exhausting; cooperating with it is not.",
      "Most burnout in ambitious people comes from attempting a one-year effort during a seven-year season.",
    ],
  },
  {
    slug: "relationship-numbers",
    title: "Relationship Numbers Beyond Compatibility",
    category: "Relationships",
    excerpt: "Compatibility scores are a headline. The useful work is in the detail.",
    readTime: "6 min",
    date: "2026-03-14",
    body: [
      "A single percentage tells you almost nothing about a relationship. Two identical charts can be comfortable and stagnant; two very different charts can be vivid and durable.",
      "We look at how each partner's Soul number wants to be loved and how each Personality number is seen from outside. The gap between them explains most recurring arguments.",
      "The goal is never to approve or reject a partner. It is to give two people accurate language for each other.",
    ],
  },
  {
    slug: "mobile-number-vibrations",
    title: "What Your Mobile Number Is Repeating",
    category: "Practical",
    excerpt: "The number you give away most often has a total. Here is how to read it.",
    readTime: "4 min",
    date: "2026-02-27",
    body: [
      "Add every digit of your mobile number, then reduce to a single digit. That is the vibration attached to the way people reach you.",
      "Five-vibration numbers suit sales, travel and media. Eight-vibration numbers suit finance and property. Seven-vibration numbers can feel quiet for a business line.",
      "If you run a business line and a personal line, give them different vibrations on purpose.",
    ],
  },
  {
    slug: "yearly-predictions-2026",
    title: "The Shape of 2026: A Numeric Reading",
    category: "Forecast",
    excerpt: "2026 reduces to a one-year globally. What that means for beginnings.",
    readTime: "9 min",
    date: "2026-01-08",
    body: [
      "Two plus zero plus two plus six reduces to one. Globally, 2026 is a beginning year — favourable for launches, relocations and first drafts.",
      "One-years reward decisiveness and punish hesitation. Momentum built now tends to carry across the next four years of the cycle.",
      "Read your personal year alongside the universal year. Where the two agree, act boldly. Where they differ, let your personal year lead.",
    ],
  },
];

export const FAQS = [
  {
    q: "Is numerology compatible with my religion?",
    a: "Yes. Numerology is a system of pattern and interpretation, not a faith. The studio does not perform rituals or ask you to change any belief or practice.",
  },
  {
    q: "What details do you need before a consultation?",
    a: "Your full name as written today, your date of birth, and where possible your time and place of birth. For business work, we also need shortlisted names and the founder's details.",
  },
  {
    q: "Do I have to legally change my name after a correction?",
    a: "Almost never. Most clients adopt the refined spelling in everyday use — email signatures, social profiles, business cards — which is where repetition happens.",
  },
  {
    q: "How long before I notice a change?",
    a: "Clients typically report a shift in ease within three to six months. Numerology supports decisions; it does not replace them.",
  },
  {
    q: "Are online consultations as effective as in-studio ones?",
    a: "Yes. The chart work is identical. Roughly seventy percent of sessions are now held online, in the language you are most comfortable with.",
  },
  {
    q: "Which languages are available?",
    a: "English, Tamil, Hindi, Telugu, Malayalam and Kannada.",
  },
  {
    q: "Do you offer readings for children?",
    a: "We offer baby naming and family guidance. We do not make predictive readings about a child's future.",
  },
  {
    q: "Is my information kept private?",
    a: "Completely. Birth details, business plans and session notes are never shared, sold or published, and case studies are only used with written consent.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Reschedule freely up to 24 hours before your appointment. Within 24 hours, one complimentary reschedule is offered.",
  },
];

export const NUMEROLOGY_TOPICS = [
  {
    key: "life-path",
    title: "Life Path Number",
    formula: "Reduce day, month and year, then combine",
    body: "The spine of your chart. It describes the road you are on and the lessons placed along it, and it never changes.",
  },
  {
    key: "destiny",
    title: "Destiny Number",
    formula: "Sum of every digit in your birth date",
    body: "What you are here to accomplish outwardly — the shape your contribution wants to take in the world.",
  },
  {
    key: "soul",
    title: "Soul Number",
    formula: "Vowels of your name",
    body: "Your private motivation. What you want when nobody is watching, and how you most need to be loved.",
  },
  {
    key: "personality",
    title: "Personality Number",
    formula: "Consonants of your name",
    body: "The doorway others walk through first — how you are read before you speak.",
  },
  {
    key: "expression",
    title: "Expression Number",
    formula: "All letters of your full birth name",
    body: "Your natural talents and the way they want to be used. Often the key to career questions.",
  },
  {
    key: "birthday",
    title: "Birthday Number",
    formula: "The day of the month you were born",
    body: "A specific gift you brought with you, colouring everything else in the chart.",
  },
  {
    key: "master",
    title: "Master Numbers",
    formula: "11 · 22 · 33",
    body: "Higher-voltage vibrations that are not reduced. They carry unusual sensitivity, capacity and responsibility.",
  },
  {
    key: "karmic",
    title: "Karmic Numbers",
    formula: "13 · 14 · 16 · 19",
    body: "Totals that mark a lesson carried forward. Not misfortune — instruction, and usually the most interesting part of a chart.",
  },
];

export const NAMELOGY_SERVICES = [
  {
    title: "Personal Name Analysis",
    body: "A full numeric reading of your name as written today, compared against your birth chart.",
  },
  {
    title: "Business Name Analysis",
    body: "Entity name, trading name and domain evaluated separately, then aligned with the founder's chart.",
  },
  {
    title: "Brand Name Development",
    body: "We generate and test candidate names for products and sub-brands with sector temperament in mind.",
  },
  {
    title: "Baby Name Consultation",
    body: "A curated shortlist with meanings, pronunciation notes and numeric values for the whole family to review.",
  },
  {
    title: "Marriage Name Guidance",
    body: "For anyone changing or hyphenating a name — we test each option before it becomes permanent.",
  },
  {
    title: "Signature Analysis",
    body: "The way you sign is a repeated gesture. We refine the form so it supports rather than contradicts your chart.",
  },
  {
    title: "Lucky Spelling",
    body: "Variant spellings and transliterations tested for the calmest, most supportive total.",
  },
  {
    title: "Name Correction Programme",
    body: "A guided rollout: where to adopt the refined spelling, in what order, and over how long.",
  },
];
