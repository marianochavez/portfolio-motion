export type HeadingImage = {
  z: number;
  width: number;
  height: number;
  rounded: boolean;
  src: string;
  alt: string;
  x?: number;
  y?: number;
};

export const headingImages: HeadingImage[] = [
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "javascript",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_scale,h_256,w_256/v1660932758/portfolio/js-logo.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "django",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_scale,h_256,w_256/v1660932903/portfolio/django.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "nodejs",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_fill,h_256,w_256/v1660932541/portfolio/node-logopng.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: false,
    alt: "react",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_256/v1660929789/portfolio/React.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "nextjs",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_scale,h_256,w_256/v1661108456/portfolio/nextjs-boilerplate-logo.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "typescript",
    src: "https://res.cloudinary.com/chavedo/image/upload/c_scale,w_256/v1660930237/portfolio/Typescript_logo_2020.svg.webp",
  },
  {
    z: 0,
    width: 250,
    height: 250,
    rounded: true,
    alt: "python",
    src: "https://sergioparedesv.github.io/basico-python/img/logo-python.jpg",
  },
];
