import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ReservationSection from "./components/ReservationSection";
import PhotosSection from "./components/PhotosSection";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import type { Labels, Lang } from "./types";
import type { NavTarget } from "./components/Header/Header.types";

function scrollToSection(id: string) {
  const targetSection = document.getElementById(id);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
}

const translations: Record<Lang, Labels> = {
  sk: {
    lang: "sk",
    navAbout: "O nás",
    navPhotos: "Galéria",
    navReservation: "Rezervácia",
    heroMore: "Viac",
    aboutTitle: "Veža v korunách stromov",
    aboutText:
      "Jedinečný domček na stromoch na vás čaká v starobylom lese na Orave neďaleko príjemného potôčika. Je to ideálne miesto na oddych, spojenie s prírodou a možno aj na znovuobjavenie samého seba.",
    reservationTitle: "Rezervácia",
    reservationText:
      "Rezervujte si termín na váš pobyt v našom domčeku na strome.",
    photosTitle: "Galéria",
    photosCta: "Pozrieť na Instagrame",
    footerText: "© 2025 Domček na strome. Všetky práva vyhradené.",
  },
  en: {
    lang: "en",
    navAbout: "About",
    navPhotos: "Gallery",
    navReservation: "Booking",
    heroMore: "More",
    aboutTitle: "Tower in the treetops",
    aboutText:
      "A unique treehouse is waiting for you in an ancient forest in the Orava region, not far from a gentle mountain stream. It is an ideal place to relax, connect with nature and perhaps rediscover yourself.",
    reservationTitle: "Booking",
    reservationText:
      "Book your stay in our treehouse for your perfect getaway.",
    photosTitle: "Gallery",
    photosCta: "See on Instagram",
    footerText: "© 2025 Treehouse. All rights reserved.",
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("sk");

  // načítanie jazyka z localStorage pri prvom načítaní
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "sk" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const labels = translations[lang];

  // ukladanie zvoleného jazyka
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  // scroll podľa hash-u v URL po načítaní
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    const map: Record<string, NavTarget> = {
      "#o-nas": { sectionId: "about", hash: "#o-nas" },
      "#foto": { sectionId: "photos", hash: "#foto" },
      "#rezervacia": { sectionId: "reservation", hash: "#rezervacia" },
    };
    const target = map[hash];
    if (target) {
      // malé oneskorenie, aby bol layout vyrenderovaný
      setTimeout(() => scrollToSection(target.sectionId), 0);
    }
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: NavTarget,
  ) => {
    event.preventDefault();
    scrollToSection(target.sectionId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", target.hash);
    }
    setMenuOpen(false);
  };

  const handleChangeLang = (value: Lang) => {
    setLang(value);
  };

  const handleLogoClick = () => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <Layout
      header={
        <Header
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onNavClick={handleNavClick}
          onLogoClick={handleLogoClick}
          currentLang={lang}
          onChangeLang={handleChangeLang}
          labels={labels}
        />
      }
      footer={<Footer labels={labels} />}
    >
      <Hero
        onMoreClick={() => {
          if (typeof window !== "undefined") {
            window.history.replaceState(null, "", "#o-nas");
          }
          scrollToSection("about");
        }}
        labels={labels}
      />
      <AboutSection labels={labels} />
      <ReservationSection labels={labels} />
      <PhotosSection labels={labels} />
    </Layout>
  );
}
