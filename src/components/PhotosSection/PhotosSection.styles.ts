import styled from "styled-components";

export const PhotosWrapper = styled.section`
  padding: 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
  }
`;

export const PhotosTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

// (Instagram link removed)

export const GalleryGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  cursor: pointer;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: default;
`;

export const LightboxImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  border-radius: 12px;
`;

export const LightboxArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 1.6rem;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const LightboxArrowPrev = styled(LightboxArrow)`
  left: 5%;
`;

export const LightboxArrowNext = styled(LightboxArrow)`
  right: 5%;
`;





