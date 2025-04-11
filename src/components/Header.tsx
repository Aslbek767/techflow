// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="py-4 border-b border-slate-800/50">
//       <div className="container-custom flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="17" y1="7" x2="7" y2="17" />
//               <polyline points="17 17 7 17 7 7" />
//             </svg>
//           </div>
//           <span className="text-xl font-bold">TechFlow</span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-8">
//           <Link
//             href="/"
//             className="text-sm font-medium hover:text-primary transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="text-sm font-medium hover:text-primary transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="/contact"
//             className="text-sm font-medium hover:text-primary transition-colors"
//           >
//             Contact
//           </Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-1">
//             <span className="text-sm font-medium">English</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="ml-1"
//             >
//               <path d="m6 9 6 6 6-6" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 border-b border-slate-800/50 sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="17" y1="7" x2="7" y2="17" />
              <polyline points="17 17 7 17 7 7" />
            </svg>
          </div>
          <span className="text-xl font-bold">TechFlow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">English</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
