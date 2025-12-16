import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import type { Labels } from "../../types";
import { theme } from "../../theme";

const labels: Labels = {
  lang: "sk",
  navAbout: "O nás",
  navPhotos: "Foto",
  navReservation: "Rezervácia",
  heroMore: "Viac",
  aboutTitle: "Veža",
  aboutText: "Text",
  reservationTitle: "Rezervácia",
  reservationText: "Text",
  photosTitle: "Foto",
  photosCta: "Insta",
  footerText: "© 2025 Domček na strome. Všetky práva vyhradené.",
};

describe("Footer", () => {
  it("renders footer text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer labels={labels} />
      </ThemeProvider>,
    );

    expect(
      screen.getByText("© 2025 Domček na strome. Všetky práva vyhradené."),
    ).toBeInTheDocument();
  });
});
