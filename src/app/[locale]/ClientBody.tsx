"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocale } from "next-intl";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen">
      <Header key={locale}/>
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
