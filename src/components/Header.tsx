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
  const t   = useTranslations('header');
  const locale = useLocale()
  console.log(locale)
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

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: 'Oʻzbek' },
  ];

  // useEffect(() => {
  //   function handleClickOutside(event: any) {
  //     if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }
    
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: any) => {
    localStorage.setItem("lang", language.code);
    setSelectedLanguage(language.name);
    setLanguageAction(language.code);
    setIsOpen(false);
  };

  return (


    <header className={`fixed w-full z-50 transition-all duration-300  ${scrolled ? "bg-slate-950/90 backdrop-blur" : "bg-transparent"
      }`} >
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
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">{ t('home') }</Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors">{ t('about') }</Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">{ t('contact') }</Link>
          </nav>
          

          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center space-x-2 bg-transparent text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              <span>{locale === 'uz' ?  'Oʻzbek' : locale === 'ru' ? 'Русский' : 'English'}</span>
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
      </div>
      <div>
        {/* </div> */}
        
        {/* Mobile Nav */}
        <div ref={dropdownRef} className="md:hidden">
          

        {/* <div ref={dropdownRef}> */}
            <button 
              className="flex items-center space-x-2 bg-transparent text-white px-4 py-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              {locale}
              <span>{locale === 'uz' ?  'Oʻzbek' : locale === 'ru' ? 'Русский' : 'English'}</span>
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

        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
