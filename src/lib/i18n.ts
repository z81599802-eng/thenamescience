export type Language = "en" | "ta" | "hi" | "te" | "ml" | "kn";

export const LANGUAGES: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "ml", label: "Malayalam", native: "മലയാളം" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.numerology": "Numerology",
  "nav.namelogy": "Namelogy",
  "nav.calculators": "Calculators",
  "nav.stories": "Success Stories",
  "nav.blog": "Journal",
  "nav.faqs": "FAQs",
  "nav.contact": "Contact",
  "cta.book": "Book Consultation",
  "cta.calculate": "Calculate Your Number",
  "cta.explore": "Explore",
  "common.language": "Language",
};

const ta: Dict = {
  "nav.home": "முகப்பு",
  "nav.about": "எங்களைப் பற்றி",
  "nav.services": "சேவைகள்",
  "nav.numerology": "எண் கணிதம்",
  "nav.namelogy": "பெயர் கணிதம்",
  "nav.calculators": "கணிப்பான்கள்",
  "nav.stories": "வெற்றிக் கதைகள்",
  "nav.blog": "கட்டுரைகள்",
  "nav.faqs": "கேள்விகள்",
  "nav.contact": "தொடர்பு",
  "cta.book": "ஆலோசனை பதிவு",
  "cta.calculate": "உங்கள் எண்ணைக் கணக்கிடுங்கள்",
  "cta.explore": "ஆராயுங்கள்",
  "common.language": "மொழி",
};

const hi: Dict = {
  "nav.home": "होम",
  "nav.about": "हमारे बारे में",
  "nav.services": "सेवाएँ",
  "nav.numerology": "अंक ज्योतिष",
  "nav.namelogy": "नाम विज्ञान",
  "nav.calculators": "कैलकुलेटर",
  "nav.stories": "सफलता की कहानियाँ",
  "nav.blog": "लेख",
  "nav.faqs": "प्रश्न",
  "nav.contact": "संपर्क",
  "cta.book": "परामर्श बुक करें",
  "cta.calculate": "अपना अंक जानें",
  "cta.explore": "जानें",
  "common.language": "भाषा",
};

const te: Dict = {
  "nav.home": "హోమ్",
  "nav.about": "మా గురించి",
  "nav.services": "సేవలు",
  "nav.numerology": "సంఖ్యా శాస్త్రం",
  "nav.namelogy": "నామ శాస్త్రం",
  "nav.calculators": "కాలిక్యులేటర్లు",
  "nav.stories": "విజయ కథలు",
  "nav.blog": "వ్యాసాలు",
  "nav.faqs": "ప్రశ్నలు",
  "nav.contact": "సంప్రదించండి",
  "cta.book": "కన్సల్టేషన్ బుక్ చేయండి",
  "cta.calculate": "మీ సంఖ్యను లెక్కించండి",
  "cta.explore": "అన్వేషించండి",
  "common.language": "భాష",
};

const ml: Dict = {
  "nav.home": "ഹോം",
  "nav.about": "ഞങ്ങളെക്കുറിച്ച്",
  "nav.services": "സേവനങ്ങൾ",
  "nav.numerology": "സംഖ്യാശാസ്ത്രം",
  "nav.namelogy": "നാമശാസ്ത്രം",
  "nav.calculators": "കാൽക്കുലേറ്ററുകൾ",
  "nav.stories": "വിജയകഥകൾ",
  "nav.blog": "ലേഖനങ്ങൾ",
  "nav.faqs": "ചോദ്യങ്ങൾ",
  "nav.contact": "ബന്ധപ്പെടുക",
  "cta.book": "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
  "cta.calculate": "നിങ്ങളുടെ സംഖ്യ കണക്കാക്കുക",
  "cta.explore": "പരിശോധിക്കുക",
  "common.language": "ഭാഷ",
};

const kn: Dict = {
  "nav.home": "ಮುಖಪುಟ",
  "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
  "nav.services": "ಸೇವೆಗಳು",
  "nav.numerology": "ಸಂಖ್ಯಾಶಾಸ್ತ್ರ",
  "nav.namelogy": "ನಾಮಶಾಸ್ತ್ರ",
  "nav.calculators": "ಕ್ಯಾಲ್ಕುಲೇಟರ್",
  "nav.stories": "ಯಶಸ್ಸಿನ ಕಥೆಗಳು",
  "nav.blog": "ಲೇಖನಗಳು",
  "nav.faqs": "ಪ್ರಶ್ನೆಗಳು",
  "nav.contact": "ಸಂಪರ್ಕ",
  "cta.book": "ಸಲಹೆ ಕಾಯ್ದಿರಿಸಿ",
  "cta.calculate": "ನಿಮ್ಮ ಸಂಖ್ಯೆ ಲೆಕ್ಕಿಸಿ",
  "cta.explore": "ಅನ್ವೇಷಿಸಿ",
  "common.language": "ಭಾಷೆ",
};

export const DICTIONARIES: Record<Language, Dict> = { en, ta, hi, te, ml, kn };

export function translate(lang: Language, key: string): string {
  return DICTIONARIES[lang][key] ?? en[key] ?? key;
}
