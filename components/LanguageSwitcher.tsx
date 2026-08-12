"use client";

import {
  useLanguage,
  Lang
} from "./LanguageProvider";

export default function LanguageSwitcher() {

  const { lang, setLang } =
    useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) =>
        setLang(
          e.target.value as Lang
        )
      }
      className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 outline-none"
      aria-label="Language"
    >

      <option value="az">
        🇦🇿 AZ
      </option>

      <option value="tr">
        🇹🇷 TR
      </option>

      <option value="en">
        🇬🇧 EN
      </option>

    </select>
  );
}
