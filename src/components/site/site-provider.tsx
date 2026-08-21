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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedLang = window.localStorage.getItem("nn-lang") as Language | null;
    if (savedLang) setLangState(savedLang);
    const savedTheme = window.localStorage.getItem("nn-theme") as "light" | "dark" | null;
    const initial = savedTheme ?? "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    window.localStorage.setItem("nn-lang", l);
    document.documentElement.setAttribute("lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("nn-theme", next);
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key), theme, toggleTheme }),
    [lang, setLang, theme, toggleTheme],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
