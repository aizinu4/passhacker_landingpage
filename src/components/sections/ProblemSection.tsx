"use client";

import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { motion, useReducedMotion } from "motion/react";
import { HelpCircle, Sparkles } from "lucide-react";

export function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      aria-label="사업 준비의 고민"
      className="section-spacing bg-[#F8F7FC] relative overflow-hidden"
    >
      <div className="brand-container">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
            <span className="block">{siteContentKo.problem.headingLine1}</span>
            <span className="block text-[#5034C4] mt-1">
              {siteContentKo.problem.headingLine2}
            </span>
          </h2>
        </div>

        {/* 4 Staggered Questions */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {siteContentKo.problem.questions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#7657F6]/10 shadow-xs hover:border-[#7657F6]/30 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7657F6]/10 text-[#7657F6] flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#171320] break-keep">
                  {q.text}
                </h3>
                <p className="text-xs sm:text-sm text-[#625D70]">
                  {q.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Concluding statement */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#7657F6]/20 shadow-xs text-sm sm:text-base font-bold text-[#171320]">
            <Sparkles className="w-4 h-4 text-[#7657F6]" aria-hidden="true" />
            <span>{siteContentKo.problem.closing}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
