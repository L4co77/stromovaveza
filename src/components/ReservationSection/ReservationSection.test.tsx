import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import ReservationSection from "./ReservationSection";
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
  reservationText: "Rezervujte si termín",
  photosTitle: "Foto",
  photosCta: "Insta",
  footerText: "Footer",
};

describe("ReservationSection", () => {
  it("renders reservation heading and iframe", () => {
    render(
      <ThemeProvider theme={theme}>
        <ReservationSection labels={labels} />
      </ThemeProvider>,
    );

    expect(screen.getByText("Rezervácia")).toBeInTheDocument();
    const iframe = document.getElementById("bookio-iframe");
    expect(iframe).not.toBeNull();
  });
});


