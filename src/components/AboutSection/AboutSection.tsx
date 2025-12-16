import type { AboutSectionProps } from "./AboutSection.types";
import {
  AboutWrapper,
  AboutTitle,
  AboutText,
} from "./AboutSection.styles";

export default function AboutSection({ labels }: AboutSectionProps) {
  return (
    <AboutWrapper id="about">
      <AboutTitle>{labels.aboutTitle}</AboutTitle>
      <AboutText>{labels.aboutText}</AboutText>
    </AboutWrapper>
  );
}
