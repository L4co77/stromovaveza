import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Hero from "./Hero";
import type { Labels } from "../../types";

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

describe("Hero", () => {
  it("renders hero video and text", () => {
    const onMoreClick = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Hero onMoreClick={onMoreClick} labels={labels} />
      </ThemeProvider>,
    );

    const video = screen.getByLabelText("Hero background video");
    expect(video).toBeInTheDocument();

    const more = screen.getByText("Viac");
    fireEvent.click(more);
    expect(onMoreClick).toHaveBeenCalled();
  });
});


