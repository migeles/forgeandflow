"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Looptext() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.1,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, {}); // <-- scope is

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    // The Parent Container
    <div className='absolute text-6xl sm:text-7xl lg:text-9xl bottom-0 w-full overflow-hidden  text-white neue-medium'>
      <div ref={slider} className='flex text-nowrap '>
        <h1 ref={firstText}>&nbsp;Ideate. Design. Build. Maintain.</h1>
        <h1 ref={secondText} className=''>
          &nbsp;Ideate. Design. Build. Maintain.{" "}
        </h1>
      </div>
      {/* <hr className='border-2 mt-2 lg:hidden' /> */}
      <div className="flex justify-center lg:justify-between pb-7 pt-4 px-7  lg:pt-4 lg:pb-6">
        <h1 className='text-center text-lg text-white leading-5 neue-regular lg:pt-3 '>
          A one stop service for <br className='lg:hidden' />
          your website needs
        </h1>
        <h1 className="hidden lg:block text-lg pt-3">
          Based in indonesia
        </h1>
      </div>
    </div>
  );
}
