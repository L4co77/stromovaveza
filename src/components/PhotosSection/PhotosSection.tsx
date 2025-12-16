import { useState, type MouseEvent } from "react";
import type { PhotosSectionProps } from "./PhotosSection.types";
import {
  PhotosWrapper,
  PhotosTitle,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  LightboxOverlay,
  LightboxImage,
  LightboxArrowPrev,
  LightboxArrowNext,
} from "./PhotosSection.styles";

const galleryImages = [
  "assets/images/gallery/780_3818.jpg",
  "assets/images/gallery/780_3819.jpg",
  "assets/images/gallery/780_3820.jpg",
  "assets/images/gallery/780_3823.jpg",
  "assets/images/gallery/780_3828.jpg",
  "assets/images/gallery/780_3829.jpg",
  "assets/images/gallery/780_3830.jpg",
  "assets/images/gallery/780_3842.jpg",
  "assets/images/gallery/780_3843.jpg",
  "assets/images/gallery/780_3845.jpg",
  "assets/images/gallery/780_3846.jpg",
  "assets/images/gallery/780_3849.jpg",
  "assets/images/gallery/780_3851.jpg",
  "assets/images/gallery/780_3853.jpg",
  "assets/images/gallery/780_3854.jpg",
  "assets/images/gallery/780_3883-Pano.jpg",
  "assets/images/gallery/780_3885.jpg",
  "assets/images/gallery/780_3889.jpg",
  "assets/images/gallery/780_3893.jpg",
  "assets/images/gallery/780_3896.jpg",
  "assets/images/gallery/780_3899.jpg",
  "assets/images/gallery/780_3901.jpg",
  "assets/images/gallery/780_3909.jpg",
  "assets/images/gallery/780_3911.jpg",
];

export default function PhotosSection({ labels }: PhotosSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  const showPrev = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const showNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <PhotosWrapper id="photos">
      <PhotosTitle>{labels.photosTitle}</PhotosTitle>

      <GalleryGrid>
        {galleryImages.map((src, index) => (
          <GalleryItem key={src} onClick={() => handleOpen(index)}>
            <GalleryImage
              src={src}
              alt={`${labels.photosTitle} ${index + 1}`}
              loading="lazy"
            />
          </GalleryItem>
        ))}
      </GalleryGrid>

      {activeIndex !== null && (
        <LightboxOverlay onClick={handleClose} role="dialog" aria-modal="true">
          <LightboxArrowPrev
            type="button"
            aria-label="Previous photo"
            onClick={showPrev}
          >
            ‹
          </LightboxArrowPrev>

          <LightboxImage
            src={galleryImages[activeIndex]}
            alt={`${labels.photosTitle} ${activeIndex + 1}`}
          />

          <LightboxArrowNext
            type="button"
            aria-label="Next photo"
            onClick={showNext}
          >
            ›
          </LightboxArrowNext>
        </LightboxOverlay>
      )}
    </PhotosWrapper>
  );
}

