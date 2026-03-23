// src/components/SplashScreen.jsx
import { useEffect, useRef, useState } from "react";

export default function SplashScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [fading, setFading] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Pick video based on screen width — 768px is the standard mobile breakpoint
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? "/End_Screen_portrait.mp4" : "/End_Screen_landscape.mp4");
  }, []);

  const handleFinish = () => {
    setFading(true);
    setTimeout(() => onComplete(), 700);
  };

  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;

    const fallback = setTimeout(handleFinish, 8000);
    video.addEventListener("ended", handleFinish);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener("ended", handleFinish);
    };
  }, [videoSrc]);

  if (!videoSrc) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        key={videoSrc} // forces remount when src changes
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
