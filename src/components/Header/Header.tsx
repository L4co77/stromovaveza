import type { HeaderProps } from "./Header.types";
import { HeaderWrapper, Logo, LogoImg, Nav, NavList, NavItem, NavButton, LangItem, LangButton, LangSeparator, Hamburger, Bar } from "./Header.styles";

export default function Header({
  menuOpen,
  onToggleMenu,
  onNavClick,
  onLogoClick,
  currentLang,
  onChangeLang,
  labels,
}: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo onClick={onLogoClick}>
        <LogoImg src="assets/images/logo.svg" alt="Logo" />
      </Logo>
      <Hamburger
        $open={menuOpen}
        aria-label="Toggle navigation"
        onClick={onToggleMenu}
      >
        <Bar $open={menuOpen} />
        <Bar $open={menuOpen} />
        <Bar $open={menuOpen} />
      </Hamburger>
      <Nav>
        <NavList $open={menuOpen}>
          <NavItem>
            <a
              href="#about"
              onClick={(e) =>
                onNavClick(e, { sectionId: "about", hash: "#about" })
              }
            >
              {labels.navAbout}
            </a>
          </NavItem>
          <NavItem>
            <a
              href="#photos"
              onClick={(e) =>
                onNavClick(e, { sectionId: "photos", hash: "#photos" })
              }
            >
              {labels.navPhotos}
            </a>
          </NavItem>
          <NavItem>
            <NavButton
              href="#reservation"
              onClick={(e) =>
                onNavClick(e, { sectionId: "reservation", hash: "#reservation" })
              }
            >
              {labels.navReservation}
            </NavButton>
          </NavItem>
          <LangItem>
            <LangButton
              type="button"
              className={currentLang === "sk" ? "active" : ""}
              onClick={() => onChangeLang("sk")}
            >
              SK
            </LangButton>
            <LangSeparator>/</LangSeparator>
            <LangButton
              type="button"
              className={currentLang === "en" ? "active" : ""}
              onClick={() => onChangeLang("en")}
            >
              EN
            </LangButton>
          </LangItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}
