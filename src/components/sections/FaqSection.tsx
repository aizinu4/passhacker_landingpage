"use client";

import React, { useState } from "react";
import { siteContentKo } from "@/content/site.ko";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="자주 묻는 질문"
      className="section-spacing bg-white relative overflow-hidden border-b border-[#7657F6]/10"
    >
      <div className="brand-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#7657F6] bg-[#7657F6]/10 px-3 py-1 rounded-full">
            {siteContentKo.faq.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
            {siteContentKo.faq.heading}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto space-y-4">
          {siteContentKo.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#7657F6]/15 bg-[#F8F7FC] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-black/2 transition-colors focus-visible:outline-2 focus-visible:outline-[#7657F6]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7657F6]/10 text-[#7657F6] flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-base sm:text-lg text-[#171320] break-keep">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#625D70] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#7657F6]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-5 pb-6 pt-1 md:px-6 md:pb-6 text-sm sm:text-base text-[#625D70] leading-relaxed break-keep border-t border-black/5"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
