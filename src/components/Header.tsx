// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useLocale, useTranslations } from "next-intl";
// import setLanguageAction from "../../actions/set-language-action";
// import LanguageSelect from "./ui/selectLanguage";


// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const t   = useTranslations('header');
//   const locale = useLocale()
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);



//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const dropdownRef = useRef(null);

//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'ru', name: 'Русский' },
//     { code: 'uz', name: 'Oʻzbek' },
//   ];


//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const selectLanguage = (language: any) => {
//     localStorage.setItem("lang", language.code);
//     setSelectedLanguage(language.name);
//     setLanguageAction(language.code);
//     setIsOpen(false);
//   };

//   return (


//     <header className={`fixed w-full z-50 transition-all duration-300  ${scrolled ? "bg-slate-950/90 backdrop-blur" : "bg-transparent"
//       }`} >
//       <div className="container mx-auto py-5 px-6 flex justify-between items-center">
      
//         <Link href="/">
//           <div className="flex items-center space-x-2 cursor-pointer">
//             <div className="bg-blue-500 p-2 rounded-md">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-white"
//               >
//                 <line x1="22" y1="12" x2="2" y2="12" />
//                 <line x1="22" y1="6" x2="12" y2="6" />
//                 <line x1="22" y1="18" x2="16" y2="18" />
//               </svg>
//             </div>
//             <span className="text-xl md:text-2xl font-bold text-white">TechFlow</span>
//           </div>
//         </Link>

//         <div className="hidden md:flex items-center space-x-6">
//           <nav className="flex space-x-8 text-lg">
//             <Link href="/" className="text-white hover:text-blue-300 transition-colors">{ t('home') }</Link>
//             <Link href="/about" className="text-white hover:text-blue-300 transition-colors">{ t('about') }</Link>
//             <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">{ t('contact') }</Link>
//           </nav>
          

//           <div className="relative" ref={dropdownRef}>
//             <button 
//               className="flex items-center space-x-2 bg-transparent text-white px-4 py-2 rounded-md focus:outline-none"
//               onClick={toggleDropdown}
//             >
//               <span>{locale === 'uz' ?  'Oʻzbek' : locale === 'ru' ? 'Русский' : 'English'}</span>
//               <svg 
//                 className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path 
//                   fillRule="evenodd" 
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
//                   clipRule="evenodd" 
//                 />
//               </svg>
//             </button>

//             {isOpen && (
//               <div className="absolute mt-1 w-full rounded-md shadow-lg bg-black bg-opacity-90 z-10">
//                 <div className="p-1">
//                   {languages.map((language) => (
//                     <button
//                       key={language.code}
//                       className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 transition-colors"
//                       onClick={() => selectLanguage(language)}
//                     >
//                       {language.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//       <div>
//         <div ref={dropdownRef} className="md:hidden">
//           <button 
//             className="flex items-center space-x-2 bg-transparent text-white px-4 py-2 rounded-md focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             {locale}
//             <span>{locale === 'uz' ?  'Oʻzbek' : locale === 'ru' ? 'Русский' : 'English'}</span>
//             <svg 
//               className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 20 20" 
//               fill="currentColor"
//             >
//               <path 
//                 fillRule="evenodd" 
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
//                 clipRule="evenodd" 
//               />
//             </svg>
//           </button>

//           {isOpen && (
//             <div className="absolute mt-1 w-full rounded-md shadow-lg bg-black bg-opacity-90 z-10">
//               <div className="p-1">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 transition-colors"
//                     onClick={() => selectLanguage(language)}
//                   >
//                     {language.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import setLanguageAction from "../../actions/set-language-action";
import LanguageSelect from "./ui/selectLanguage";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: 'Oʻzbek' },
  ];

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const selectLanguage = (language: any) => {
    localStorage.setItem("lang", language.code);
    setSelectedLanguage(language.name);
    setLanguageAction(language.code);
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur" : "bg-transparent"}`}>
      <div className="container mx-auto py-5 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-blue-500 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="22" y1="12" x2="2" y2="12" />
                <line x1="22" y1="6" x2="12" y2="6" />
                <line x1="22" y1="18" x2="16" y2="18" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">TechFlow</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8 text-lg">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">{t('home')}</Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors">{t('about')}</Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">{t('contact')}</Link>
            <Link href="/pages" className="text-white hover:text-blue-300 transition-colors">{t('resources')}</Link>
          </nav>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center space-x-2 bg-transparent text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              <span>{locale === 'uz' ? 'Oʻzbek' : locale === 'ru' ? 'Русский' : 'English'}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute mt-1 w-full rounded-md shadow-lg bg-black bg-opacity-90 z-10">
                <div className="p-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                      onClick={() => selectLanguage(language)}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        ref={mobileMenuRef}
        className={`fixed z-1000 h-screen top-0 bg-[#122a52] right-0 w-64 shadow-lg transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4 text-lg">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors" onClick={handleMobileNavClick}>{t('home')}</Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors" onClick={handleMobileNavClick}>{t('about')}</Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors" onClick={handleMobileNavClick}>{t('contact')}</Link>
            <Link href="/pages" className="text-white hover:text-blue-300 transition-colors" onClick={handleMobileNavClick}>{t('resources')}</Link>
          </nav>
          
          <div className="mt-8">
            {/* <div className="text-white mb-2">Language</div> */}
            <div className="flex flex-col space-y-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`text-left px-4 py-2 rounded-md transition-colors ${locale === language.code ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700'}`}
                  onClick={() => {
                    selectLanguage(language);
                    handleMobileNavClick();
                  }}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;