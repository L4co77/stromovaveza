import { useRef, useEffect } from "react";
import type { HeroProps } from "./Hero.types";
import { HeroSection, HeroVideo, HeroOverlay, HeroText } from "./Hero.styles";

export default function Hero({ onMoreClick, labels }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && typeof video.play === "function") {
      const maybePromise = video.play();
      if (
        maybePromise &&
        typeof (maybePromise as Promise<void>).catch === "function"
      ) {
        maybePromise.catch((error) => {
          // v testovacom prostredí (jsdom) autoplay nemusí fungovať, preto len logujeme
          // a nenecháme chybu spadnúť ako neodchytenú
          console.error("Video autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <HeroSection>
      <HeroVideo
        ref={videoRef}
        src="assets/videos/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero background video"
      />
      <HeroOverlay />
      <HeroText onClick={onMoreClick}>{labels.heroMore}</HeroText>
    </HeroSection>
  );
}
