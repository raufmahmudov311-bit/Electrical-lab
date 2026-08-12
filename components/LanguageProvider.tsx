"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

export type Lang = "az" | "tr" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: "az",
  setLang: () => {}
});

export function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] =
    useState<Lang>("az");

  useEffect(() => {
    const saved =
      localStorage.getItem("vel-lang") as Lang | null;

    if (
      saved === "az" ||
      saved === "tr" ||
      saved === "en"
    ) {
      setLangState(saved);
    }
  }, []);

  const setLang = (language: Lang) => {
    setLangState(language);
    localStorage.setItem("vel-lang", language);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage =
  () => useContext(LanguageContext);
