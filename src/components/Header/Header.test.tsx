import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Header from "./Header";
import type { Labels } from "../../types";
import type { HeaderProps } from "./Header.types";

const labels: Labels = {
  lang: "sk",
  navAbout: "O nás",
  navPhotos: "Foto",
  navReservation: "Rezervácia",
  heroMore: "Viac",
  aboutTitle: "Veža",
  aboutText: "Test",
  reservationTitle: "Rezervácia",
  reservationText: "Text",
  photosTitle: "Foto",
  photosCta: "Insta",
  footerText: "Footer",
};

function createHeaderProps(
  overrides: Partial<HeaderProps> = {},
): HeaderProps {
  return {
    menuOpen: false,
    onToggleMenu: vi.fn(),
    onNavClick: vi.fn(),
    onLogoClick: vi.fn(),
    currentLang: "sk",
    onChangeLang: vi.fn(),
    labels,
    ...overrides,
  };
}

function renderHeader(overrides?: Partial<HeaderProps>) {
  const props = createHeaderProps(overrides ?? {});

  return render(
    <ThemeProvider theme={theme}>
      <Header {...props} />
    </ThemeProvider>,
  );
}

describe("Header", () => {
  it("renders navigation labels", () => {
    renderHeader();
    expect(screen.getByText("O nás")).toBeInTheDocument();
    expect(screen.getByText("Foto")).toBeInTheDocument();
    expect(screen.getByText("Rezervácia")).toBeInTheDocument();
  });

  it("calls onToggleMenu when hamburger is clicked", () => {
    const onToggleMenu = vi.fn();
    renderHeader({ onToggleMenu });

    const button = screen.getByLabelText(/toggle navigation/i);
    fireEvent.click(button);
    expect(onToggleMenu).toHaveBeenCalled();
  });
});
