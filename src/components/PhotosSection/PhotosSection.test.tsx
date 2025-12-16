import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import PhotosSection from "./PhotosSection";
import type { Labels } from "../../types";

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
  photosCta: "Pozrieť na Instagrame",
  footerText: "Footer",
};

describe("PhotosSection", () => {
  it("renders title and gallery images", () => {
    render(
      <ThemeProvider theme={theme}>
        <PhotosSection labels={labels} />
      </ThemeProvider>,
    );

    expect(screen.getByText("Foto")).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  it("opens lightbox when image is clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <PhotosSection labels={labels} />
      </ThemeProvider>,
    );

    const firstImage = screen.getAllByRole("img")[0];
    fireEvent.click(firstImage);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });
});


