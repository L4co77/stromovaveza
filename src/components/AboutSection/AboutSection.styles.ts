import styled from "styled-components";

export const AboutWrapper = styled.section`
  position: relative;
  padding: 2rem;
  text-align: center;
  background-image: url(assets/images/bg3.jpeg);
  color: ${({ theme }) => theme.colors.white};
  padding-top: 80px;
  padding-bottom: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  }
`;

export const AboutImage = styled.img`
  width: 200px;
`;

export const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

export const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;
