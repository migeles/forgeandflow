"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // <-- Import useGSAP

import girldancing from "@/Assets/Image/girl dancing.webp";
import girlfading from "@/Assets/Image/girlfading.webp";
import blacksmithing from "@/Assets/Image/blacksmithing.webp";

// Register the ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

export default function Footerimage() {
  // Common styles for all images
  const imageBaseClasses =
    "object-cover border-2 md:border-4 border-white rounded-[15px] lg:rounded-[25px]";

  // Refs to target the elements
  const mainContainerRef = useRef(null);
  const topImagesRef = useRef(null);
  const bottomImageRef = useRef(null);

  // --- NEW: useGSAP hook for animation ---
  useGSAP(
    () => {
      // The animation code is now inside useGSAP
      gsap.to(topImagesRef.current, {
        x: 100, // Move 400px to the right
        ease: "none",
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomImageRef.current, {
        x: 100, // Move 400px to the right
        ease: "none",
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: mainContainerRef } // <-- Scope the animations to the container
  );

  return (
    // The main container with its ref attached
    <div
      ref={mainContainerRef}
      className='relative flex flex-col pl-10 lg:pl-[15vw]'>
      {/* Container for the first two images, with its ref */}
      <div
        ref={topImagesRef}
        className='absolute -top-1/2 -translate-y-1/2 flex flex-row gap-10 lg:gap-20'>
        <img
          className={`${imageBaseClasses} h-28 min-w-[300px] md:h-32 md:min-w-[500px] lg:min-w-[800px] lg:h-64`}
          src={girldancing.src}
          alt='A person dancing.'
        />
        <img
          className={`${imageBaseClasses} h-28 min-w-[800px] md:h-32 md:min-w-[800px] lg:h-64`}
          src={girlfading.src}
          alt='A person fading into the background.'
        />
      </div>

      {/* Container for the third image, with its ref */}
      <div
        ref={bottomImageRef}
        className='absolute translate-x-[50%] lg:translate-x-[20%] -top-1/2 translate-y-[100%] lg:translate-y-[80%]'>
        <img
          className={`${imageBaseClasses} h-28 min-w-[400px] md:h-32 md:min-w-[700px] lg:min-w-[1600px] lg:h-64`}
          src={blacksmithing.src}
          alt='A blacksmith at work.'
        />
      </div>
    </div>
  );
}
