"use client";
import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your logos here
// To add more, just import them and add them to the 'logos' array below.
import logokawa from "../../Assets/Image/Logos/kawalogo.webp";
import logokinghorse from "../../Assets/Image/Logos/Kinghorselogo.webp";
import logoqro from "../../Assets/Image/Logos/QRO logo black.png";
import logokomkomcha from "../../Assets/Image/Logos/komkomcha logo.png";

// 1. Create an array of your logos. This makes the component flexible.
const logos = [
  { src: logokawa.src, alt: "Kawa Logo" },
  { src: logokinghorse.src, alt: "King Horse Logo" },
  { src: logoqro.src, alt: "QRO Logo" },
  { src: logokomkomcha.src, alt: "Komkomcha Logo" },
];

export default function Portoslider() {
  const firstimgcontainer = useRef(null);
  const secondimgcontainer = useRef(null);
  const thirdimgcontainer = useRef(null);
  const sliderContainerRef = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(sliderContainerRef.current, {});
  }, {}); // Scope the GSAP query to the container

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstimgcontainer.current, { xPercent: xPercent });
    gsap.set(secondimgcontainer.current, { xPercent: xPercent });
    gsap.set(thirdimgcontainer.current, { xPercent: xPercent });
    xPercent += -0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className='w-full max-w-screen py-8 relative flex'>
      <div
        ref={sliderContainerRef}
        className='flex flex-nowrap overflow-hidden w-full lg:mx-8'>
        <div
          ref={firstimgcontainer}
          className='flex items-center justify-center flex-shrink-0'>
          {logos.map((logo, index) => (
            <img
              key={`logo-a-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-16 md:h-20 lg:h-32 w-auto mx-8 md:mx-16 grayscale'
            />
          ))}
        </div>
        <div
          ref={secondimgcontainer}
          className='flex items-center justify-center flex-shrink-0'>
          {logos.map((logo, index) => (
            <img
              key={`logo-b-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-16 md:h-20 lg:h-32 w-auto mx-8 md:mx-16 grayscale'
            />
          ))}
        </div>
        <div
          ref={thirdimgcontainer}
          className='flex items-center justify-center flex-shrink-0'>
          {logos.map((logo, index) => (
            <img
              key={`logo-b-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-16 md:h-20 lg:h-32 w-auto mx-8 md:mx-16 grayscale'
            />
          ))}
        </div>
      </div>
      <div className='absolute w-[100vw] lg:w-full overflow-hidden h-full inset-0 z-10 flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex justify-between w-full lg: h-full overflow-hidden'>
          <div
            className='
                h-full w-32 lg:w-64
                bg-white/10
                backdrop-blur-sm
                [mask-image:linear-gradient(to_right,black_70%,transparent)]
                lg:[mask-image:linear-gradient(to_right,black_30%,transparent)]
              '></div>
          <div
            className='
                h-full w-32 lg:w-64
                bg-white/10
                backdrop-blur-sm
                [mask-image:linear-gradient(to_left,black_70%,transparent)]
                lg:[mask-image:linear-gradient(to_left,black_30%,transparent)]
              '></div>
        </div>
      </div>
    </div>
  );
}
