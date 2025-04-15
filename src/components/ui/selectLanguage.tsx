"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import setLanguageAction from "../../../actions/set-language-action";

export default function LanguageSelect() {
  const [selectedLang, setSelectedLang] = useState("uz");

  useEffect(() => {
    const stored = localStorage.getItem("lang") || 'en';
    setSelectedLang(stored);
  }, [selectedLang]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    setSelectedLang(lang);
    setLanguageAction(e.target.value)
  };

  return (
    <select value={selectedLang} onChange={handleChange}>
      <option value="en">English</option>
      <option value="uz">O‘zbek</option>
    </select>
  );
}
