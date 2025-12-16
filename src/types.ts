export type Lang = "sk" | "en";

export interface Labels {
  lang: Lang;
  navAbout: string;
  navPhotos: string;
  navReservation: string;
  heroMore: string;
  aboutTitle: string;
  aboutText: string;
  reservationTitle: string;
  reservationText: string;
  photosTitle: string;
  photosCta: string;
  footerText: string;
}

declare global {
  interface Window {
    initBookioWidget?: () => void;
  }
}


