import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import AboutSection from "./AboutSection";
import type { Labels } from "../../types";

const labels: Labels = {
  lang: "sk",
  navAbout: "O nás",
  navPhotos: "Foto",
  navReservation: "Rezervácia",
  heroMore: "Viac",
  aboutTitle: "Veža v korunách stromov",
  aboutText: "Popis domčeka",
  reservationTitle: "Rezervácia",
  reservationText: "Text",
  photosTitle: "Foto",
  photosCta: "Insta",
  footerText: "Footer",
};

describe("AboutSection", () => {
  it("renders title and text", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutSection labels={labels} />
      </ThemeProvider>,
    );

    expect(
      screen.getByText("Veža v korunách stromov"),
    ).toBeInTheDocument();
    expect(screen.getByText("Popis domčeka")).toBeInTheDocument();
  });
});
