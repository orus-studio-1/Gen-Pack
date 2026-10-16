"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface BackgroundVideoProps {
  videoSrc?: string;
  /** Render a still photograph instead of a video loop. */
  imageSrc?: string;
  imageAlt?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc = "/homepage_hero.mp4",
  imageSrc,
  imageAlt = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || imageSrc) return;

    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      if (video.paused) {
        video.play().catch((err) => {
          console.debug("Autoplay waiting for interaction:", err);
        });
      }
    };

    attemptPlay();

    const handleUserInteraction = () => {
      attemptPlay();
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("pointerdown", handleUserInteraction, { passive: true });
    window.addEventListener("scroll", handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [videoSrc, imageSrc]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 select-none bg-[#1c1817]">
      {imageSrc ? (
        /* Background Still Photograph */
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-85"
        />
      ) : (
        /* Background Video Stream */
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onCanPlay={() => {
            if (videoRef.current?.paused) {
              videoRef.current.play().catch(() => {});
            }
          }}
          className="w-full h-full object-cover object-center scale-105 opacity-85"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Layer 1: Warm Base Overlay */}
      <div className="absolute inset-0 bg-[#1c1817]/35 mix-blend-multiply pointer-events-none" />

      {/* Layer 2: Top Header Dark Gradient */}
      <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#1c1817]/70 via-[#1c1817]/30 to-transparent pointer-events-none" />

      {/* Layer 3: Soft Left Text Shadow */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#1c1817]/60 via-[#1c1817]/25 to-transparent pointer-events-none" />

      {/* Layer 4: Soft Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1c1817]/75 via-[#1c1817]/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default BackgroundVideo;
