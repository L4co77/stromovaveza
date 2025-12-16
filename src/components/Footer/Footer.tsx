import type { FooterProps } from "./Footer.types";
import { FooterWrapper, FooterText } from "./Footer.styles";

export default function Footer({ labels }: FooterProps) {
  return (
    <FooterWrapper>
      <FooterText>{labels.footerText}</FooterText>
    </FooterWrapper>
  );
}
