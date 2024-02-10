import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";

export const Image = ({ alt, src, ...props }: ImageProps) => {
  src += `${baseUrl}/`;

  return (
    <img
      {...props}
      decoding="async"
      loading="lazy"
      src={`${src}/origin/png`}
      srcSet={`${src}/480/avif 480w, ${src}/768/avif 768w, ${src}/1280/avif 1280w, ${src}/1600/avif 1600w, ${src}/1920/avif 1920w, ${src}/origin/avif 2560w, ${src}/480/webp 480w, ${src}/768/webp 768w, ${src}/1280/webp 1280w, ${src}/1600/webp 1600w, ${src}/1920/webp 1920w, ${src}/origin/webp 2560w, ${src}/480/jpeg 480w, ${src}/768/jpeg 768w, ${src}/1280/jpeg 1280w, ${src}/1600/jpeg 1600w, ${src}/1920/jpeg 1920w, ${src}/origin/jpeg 2560w, ${src}/480/png 480w, ${src}/768/png 768w, ${src}/1280/png 1280w, ${src}/1600/png 1600w, ${src}/1920/png 1920w, ${src}/origin/png 2560w`}
      sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, 2560px"
      alt={alt}
    />
  );
};
