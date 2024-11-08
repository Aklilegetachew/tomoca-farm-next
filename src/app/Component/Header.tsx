"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#0D1518] text-white sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-800 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="h-4 w-4" />
              <span>OPENING HOURS : 08:00 AM - 09:00 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4">
                <Link
                  href="https://facebook.com"
                  className="hover:text-gray-300"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-gray-300"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="hover:text-gray-300"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="hover:text-gray-300"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>HQ LOCATION : 22 AROUND YILMA SEGA BET</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="./tomocaLogo.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Navigation Links */}
          <nav
            className={`
            fixed md:static top-[120px] left-0 right-0 bg-[#0D1518] md:bg-transparent
            ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-8
            p-4 md:p-0 transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full md:opacity-100 md:translate-y-0"
            }
          `}
          >
            <Link href="/" className="hover:text-gray-300">
              HOME
            </Link>
            <Link href="/OurStory" className="hover:text-gray-300">
              OUR STORY
            </Link>
            <Link
              href="https://tomocacoffeeethiopia.com/about/"
              className="hover:text-gray-300"
            >
              ABOUT US
            </Link>
            <Link
              href="https://tomocacoffeeethiopia.com/contacts/"
              className="hover:text-gray-300"
            >
              CONTACTS
            </Link>
          </nav>

          {/* Order Button */}
          <div className="hidden md:block">
            <Link href="/Registration" className="hover:text-gray-300">
              <button className="bg-[#F15A2B] hover:bg-[#F15A2B]/90 text-white px-4 py-2 rounded-md transition-colors duration-200 ease-in-out">
                Registration
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Order Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Link href="/Registration" className="hover:text-gray-300">
          <button className="bg-[#F15A2B] hover:bg-[#F15A2B]/90 text-white px-4 py-2 rounded-md transition-colors duration-200 ease-in-out shadow-lg">
            Registration
          </button>
        </Link>
      </div>
    </header>
  );
}
