// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import ClientBody from "./ClientBody";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TechFlow - Streamline Your Maintenance Processes",
//   description: "Automate, integrate, and accelerate your business operations with our cutting-edge platform.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ClientBody>{children}</ClientBody>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx or app/[locale]/layout.tsx (depending on your setup)
// import "./globals.css";
// import { Inter } from "next/font/google";
// import type { Metadata } from "next";
// import { NextIntlClientProvider } from "next-intl";
// import { getLocale, getMessages } from "next-intl/server";
// import ClientBody from "./ClientBody";
// import I18nProviderWrapper from "./I18nProviderWrapper";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TechFlow - Streamline Your Maintenance Processes",
//   description: "Automate, integrate, and accelerate your business operations with our cutting-edge platform.",
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const locale = await getLocale();
//   console.log(locale);
//   const messages = await getMessages();

//   return (
//     <html lang={locale} dir="ltr">
//       <body className={inter.className}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <ClientBody>
//             {children}
//           </ClientBody>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }



// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import ClientBody from "./[locale]/ClientBody";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechFlow - Streamline Your Maintenance Processes",
  description: "Automate, integrate, and accelerate your business operations with our cutting-edge platform.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} dir="ltr">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <ClientBody> */}
            {children}
          {/* </ClientBody> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}