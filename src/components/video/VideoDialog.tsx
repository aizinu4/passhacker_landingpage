"use client";

import React, { useEffect, useRef } from "react";
import { VideoRecord } from "@/content/media";
import { VideoPlayer } from "./VideoPlayer";
import { X } from "lucide-react";

interface VideoDialogProps {
  isOpen: boolean;
  record: VideoRecord | null;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function VideoDialog({ isOpen, record, onClose, triggerRef }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Manage Escape key, focus trapping, and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    const prevActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    // Prevent background scrolling while open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const triggerElement = triggerRef?.current;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;

      // Return focus to triggering button
      if (triggerElement) {
        triggerElement.focus();
      } else if (prevActiveElement) {
        prevActiveElement.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen || !record) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl bg-[#17102C] border border-white/15 rounded-3xl p-4 sm:p-6 shadow-2xl text-white overflow-hidden animate-in zoom-in-95 duration-250"
      >
        {/* Dialog Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold text-[#A78BFA] uppercase tracking-wider block">
              제작 과정 시연
            </span>
            <h3 id="video-dialog-title" className="text-base sm:text-lg font-bold text-white">
              {record.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="닫기 (ESC)"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Player Container with Autoplay */}
        <div className="mt-2">
          <VideoPlayer
            record={record}
            autoPlay={true}
            loop={true}
            playLabel="영상 재생하기"
          />
        </div>

        {/* Description */}
        <div className="mt-3 px-1 text-xs sm:text-sm text-white/70 flex items-center justify-between">
          <p className="break-keep">{record.description}</p>
          <span className="text-[11px] text-white/40 hidden sm:inline">ESC 키로 닫기</span>
        </div>
      </div>
    </div>
  );
}
