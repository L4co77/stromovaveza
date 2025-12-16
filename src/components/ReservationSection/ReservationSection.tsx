import type { ReservationSectionProps } from "./ReservationSection.types";
import {
  ReservationWrapper,
  ReservationTitle,
  ReservationText,
} from "./ReservationSection.styles";

export default function ReservationSection({
  labels,
}: ReservationSectionProps) {
  return (
    <ReservationWrapper id="reservation">
      <ReservationTitle>{labels.reservationTitle}</ReservationTitle>
      <ReservationText>{labels.reservationText}</ReservationText>
      <iframe
        id="bookio-iframe"
        src={
          labels.lang === "sk"
            ? "https://travel.bookio.com/bookio/widget/B$2847?defaultHeaderTop=50&lang=sk"
            : "https://travel.bookio.com/bookio/widget/B$2847?defaultHeaderTop=50&lang=en"
        }
        onLoad={() => {
          if (typeof window !== "undefined" && typeof window.initBookioWidget === "function") {
            window.initBookioWidget();
          }
        }}
        width="100%"
        height="500"
        style={{ border: 0 }}
      ></iframe>
    </ReservationWrapper>
  );
}
