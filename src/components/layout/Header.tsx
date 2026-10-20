"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { siteContentKo } from "@/content/site.ko";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key to close mobile menu and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenuAndFocusToggle = () => {
    setMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-black/5 py-3"
          : "bg-white/60 backdrop-blur-xs py-4"
      }`}
    >
      <div className="brand-container flex items-center justify-between">
        {/* Wordmark Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#7657F6] rounded-lg p-1"
          aria-label={`${siteConfig.brandName} 홈으로 이동`}
        >
          <span className="text-xl md:text-2xl font-black tracking-tight text-[#171320] group-hover:text-[#7657F6] transition-colors">
            {siteConfig.brandName}
          </span>
          <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-[#7657F6]/10 text-[#7657F6] font-medium hidden sm:inline-block">
            Beta
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-[#625D70]"
          aria-label="주요 메뉴"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="px-3 py-2 rounded-lg hover:text-[#171320] hover:bg-black/5 transition-colors relative"
            >
              {item.label}
              {item.isUpcoming && (
                <span className="ml-1.5 inline-block text-[10px] font-semibold text-[#7657F6] bg-[#7657F6]/10 px-1.5 py-0.2 rounded-full">
                  예정
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteContentKo.header.ctaHref}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7657F6] text-white font-medium text-sm hover:bg-[#6242E6] active:scale-98 transition-all shadow-sm shadow-[#7657F6]/30"
          >
            <span>{siteContentKo.header.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={toggleButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            mobileMenuOpen
              ? siteContentKo.header.closeMenu
              : siteContentKo.header.openMenu
          }
          className="md:hidden p-2 rounded-lg text-[#171320] hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-[#7657F6]"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[57px] bg-black/40 backdrop-blur-xs z-50 md:hidden flex flex-col justify-between"
          onClick={closeMenuAndFocusToggle}
        >
          <div
            className="bg-white p-6 shadow-xl border-b border-black/10 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2" aria-label="모바일 메뉴">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenuAndFocusToggle}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[#171320] hover:bg-[#F8F7FC] transition-colors"
                >
                  <span>{item.label}</span>
                  {item.isUpcoming ? (
                    <span className="text-xs font-semibold text-[#7657F6] bg-[#7657F6]/10 px-2 py-0.5 rounded-full">
                      업데이트 예정
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#625D70]" />
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-black/5">
              <a
                href={siteContentKo.header.ctaHref}
                onClick={closeMenuAndFocusToggle}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7657F6] text-white font-medium text-base hover:bg-[#6242E6] transition-colors shadow-sm"
              >
                <span>{siteContentKo.header.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
