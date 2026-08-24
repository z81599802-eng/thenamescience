"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { type Language, translate } from "@/lib/i18n";

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const SiteContext = createContext<Ctx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = window.localStorage.getItem("nn-lang") as Language | null;
    if (savedLang) setLangState(savedLang);
    document.documentElement.classList.remove("dark");
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    window.localStorage.setItem("nn-lang", l);
    document.documentElement.setAttribute("lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    // Light theme only mode requested by client
    document.documentElement.classList.remove("dark");
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key), theme: "light", toggleTheme }),
    [lang, setLang, toggleTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
