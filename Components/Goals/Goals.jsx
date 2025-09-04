"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import girlfloating from "@/Assets/Image/girl floating.webp";
import girlwalking from "@/Assets/Image/girl partying.webp";
import Textscroll from "./Textscroll";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Goals() {
  // Create refs for the elements we want to animate
  const imageContainer1 = useRef(null);
  const imageContainer2 = useRef(null);

  useLayoutEffect(() => {
    // Ensure the refs are attached before creating the animation
    if (imageContainer1.current && imageContainer2.current) {
      // --- Animation for the first image ---
      gsap.to(imageContainer1.current.querySelector("img"), {
        xPercent: 10, // Move image up by 20% of its height on scroll
        ease: "none",
        scrollTrigger: {
          trigger: imageContainer1.current,
          start: "top bottom", // Animation starts when top of container hits bottom of viewport
          end: "bottom top", // Animation ends when bottom of container hits top of viewport
          scrub: true, // Smoothly links animation to scrollbar position
        },
      });

      // --- Animation for the second image ---
      gsap.to(imageContainer2.current.querySelector("img"), {
        xPercent: -10, // Move image up by 20% of its height on scroll
        ease: "none",
        scrollTrigger: {
          trigger: imageContainer2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Cleanup function to remove triggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='w-full h-full pt-4 lg:py-20'>
      <div>
        <Textscroll />
      </div>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-10 px-3 lg:px-5'>
        {/* Pass the ref to the parent container and apply overflow-hidden */}
        <div
          ref={imageContainer1}
          className='w-full relative h-56  rounded-[25px] overflow-hidden border-2'>
          <img
            // Added scale-125 to make the image slightly larger than its container for the parallax effect
            className='w-full h-full object-cover scale-125'
            src={girlfloating.src}
            alt=''
          />
          <p className='absolute top-1/2 text-xl lg:text-3xl lg:leading-[32px] -translate-y-1/2 p-3 leading-[22px] text-white'>
            Lets Go <br />
            <span className='italic neue-bold'>First Class</span>
          </p>
        </div>

        <div
          ref={imageContainer2}
          className='w-full relative h-56 rounded-[25px] overflow-hidden border-2'>
          <img
            className='object-cover w-full h-full object-center scale-125'
            src={girlwalking.src}
            alt=''
          />
          <p className='absolute right-0 top-1/2 text-xl lg:text-3xl lg:leading-[32px]  -translate-y-1/2 p-3 leading-[22px] text-white text-right'>
            Potential customers
            <br /> are
            <span className='italic neue-bold'> everywhere</span>
          </p>
        </div>
      </div>
    </div>
  );
}
