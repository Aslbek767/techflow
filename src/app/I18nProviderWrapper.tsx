// app/I18nProviderWrapper.tsx
"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";

export default function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    setLocale(storedLang);

    import(`../../messages/${locale}.json`).then((mod) => {
      setMessages(mod.default);
    });
  }, []);

  if (!messages) return null; // or a loading spinner

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
