"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { VideoRecord } from "@/content/media";
import { VideoFallback } from "./VideoFallback";
import {
  notifyVideoPlaying,
  subscribeToVideoCoordinator,
} from "@/lib/videoCoordinator";
import { Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  record: VideoRecord;
  playLabel?: string;
  autoPlay?: boolean;
  loop?: boolean;
  defaultMuted?: boolean;
}

export function VideoPlayer({
  record,
  playLabel = "사용 과정 보기",
  autoPlay = true,
  loop = true,
  defaultMuted = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hasStarted, setHasStarted] = useState<boolean>(autoPlay);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(defaultMuted);
  const [hasError, setHasError] = useState<boolean>(false);

  // Stop video safely
  const stopVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Cleanup on unmount or record change
  useEffect(() => {
    return () => {
      stopVideo();
    };
  }, [stopVideo]);

  // Subscribe to coordinator: pause if another video starts
  useEffect(() => {
    const unsubscribe = subscribeToVideoCoordinator(record.id, () => {
      stopVideo();
    });
    return () => {
      unsubscribe();
    };
  }, [record.id, stopVideo]);

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopVideo();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [stopVideo]);

  // Autoplay and viewport visibility observer
  useEffect(() => {
    const currentContainer = containerRef.current;
    const currentVideo = videoRef.current;
    if (!currentContainer || !currentVideo || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Autoplay when scrolled into view
            if (autoPlay && record.src) {
              currentVideo.muted = isMuted;
              currentVideo
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                  notifyVideoPlaying(record.id);
                })
                .catch(() => {
                  // If browser restricted autoplay, keep ready for manual tap
                });
            }
          } else {
            // Pause when scrolled out of view to preserve resources
            if (currentVideo && !currentVideo.paused) {
              currentVideo.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay, isMuted, record.id, record.src]);

  // Immediate autoplay on mount if already in view
  useEffect(() => {
    if (autoPlay && record.src && videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
          notifyVideoPlaying(record.id);
        })
        .catch(() => {
          // Fallback if browser policy delays autoplay
        });
    }
  }, [autoPlay, isMuted, record.id, record.src]);

  // Handle Manual Play Request
  const handlePlayRequest = () => {
    if (!record.src || !videoRef.current) return;
    setHasStarted(true);
    videoRef.current.muted = isMuted;
    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        notifyVideoPlaying(record.id);
      })
      .catch(() => {
        setHasError(true);
      });
  };

  // Toggle Mute / Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // If there is no real video file or an error occurs, render the fallback
  if (!record.src || hasError) {
    return (
      <div ref={containerRef} className="w-full">
        <VideoFallback record={record} />
        {hasError && (
          <div className="mt-3 text-center">
            <button
              onClick={() => {
                setHasError(false);
                setHasStarted(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>다시 시도하기</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group"
    >
      <video
        ref={videoRef}
        src={record.src || undefined}
        poster={record.poster || undefined}
        controls={hasStarted}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        preload="metadata"
        className="w-full h-full object-contain bg-black"
        onPlay={() => {
          setHasStarted(true);
          setIsPlaying(true);
          notifyVideoPlaying(record.id);
        }}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      >
        {record.captions && (
          <track
            src={record.captions}
            kind="captions"
            srcLang="ko"
            label="한국어 자막"
            default
          />
        )}
        비디오 태그를 지원하지 않는 브라우저입니다.
      </video>

      {/* Floating Mute/Unmute sound toggle */}
      {hasStarted && isPlaying && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "소리 켜기" : "음소거"}
          className="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 text-xs font-medium transition-all shadow-md cursor-pointer opacity-80 hover:opacity-100"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/80" />
              <span className="hidden sm:inline">소리 켜기</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">음소거</span>
            </>
          )}
        </button>
      )}

      {/* Initial poster overlay if autoplay did not start yet */}
      {!hasStarted && !isPlaying && (
        <div
          onClick={handlePlayRequest}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 hover:bg-black/35 backdrop-blur-[0.5px] transition-all p-6 cursor-pointer"
        >
          <button
            type="button"
            onClick={handlePlayRequest}
            aria-label={`${record.title} ${playLabel}`}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#7657F6] text-white flex items-center justify-center shadow-xl shadow-[#7657F6]/60 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1" />
          </button>
          <span className="mt-4 text-xs md:text-sm font-semibold text-white drop-shadow bg-black/60 px-3.5 py-1.5 rounded-full border border-white/20">
            {playLabel}
          </span>
        </div>
      )}
    </div>
  );
}
