import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  text-align: center;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 80vh;
  }
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 80vh;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* jemné stmavenie */
  z-index: 0;
  pointer-events: none;
`;

const bounceArrow = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(6px);
  }
`;

export const HeroText = styled.p`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }

  &::after {
    content: "";
    background: url(assets/images/arrow.png);
    width: 20px;
    height: 30px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto;
    transform: translateY(0);
    animation: ${bounceArrow} 0.8s ease-in-out infinite alternate;
  }
`;
