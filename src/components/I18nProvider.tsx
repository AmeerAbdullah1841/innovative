"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type Lang } from "@/i18n/locales";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const COOKIE_NAME = "lang";

export function I18nProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang || ("en" as Lang));

  useEffect(() => {
    // try localStorage
    try {
      const stored = localStorage.getItem(COOKIE_NAME) as Lang | null;
      if (stored && dictionaries[stored]) {
        setLangState(stored);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    if (!dictionaries[l]) return;
    setLangState(l);
    try {
      localStorage.setItem(COOKIE_NAME, l);
      document.cookie = `${COOKIE_NAME}=${l}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  };

  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (key: string) => {
      return dict[key] ?? key;
    };
  }, [lang]);

  const value: I18nContextValue = { lang, setLang, t };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


