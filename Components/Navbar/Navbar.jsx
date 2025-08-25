"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useState, useRef } from "react";
import Navmenu from "./Navmenu";

gsap.registerPlugin(MorphSVGPlugin);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef();
  const navMenuRef = useRef(null);
  const container = useRef();

  useGSAP(
    () => {
      gsap.set("#cross", { display: "none" });

      // 👉 1. Set the initial state of the menu to be invisible AND non-interactive
      gsap.set(navMenuRef.current, { opacity: 0, pointerEvents: "none" });

      tl.current = gsap.timeline({
        paused: true,
        // 👉 2. When the animation starts, make the menu interactive
        onStart: () => {
          gsap.set(navMenuRef.current, { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
          gsap.set(navMenuRef.current, { pointerEvents: "none" });
        },
      });

      tl.current
        .to("#equal", {
          morphSVG: "#cross",
          duration: 0.2,
          ease: "power4.inOut",
        })
        .to(
          navMenuRef.current,
          {
            duration: 0.5,
            opacity: 1, 
            ease: "power2.inOut",
          },
          "<"
        );
    },
    { scope: container }
  );

  const handleToggle = () => {
    // This logic remains the same and is perfect
    isOpen ? tl.current.reverse() : tl.current.play();
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={container}
      className='flex h-20 justify-between items-center px-9 pt-3 rounded-[50px] fixed top-0 left-0 right-0 z-30 text-white '
    >
      <div className='relative z-20'>
        <h1 className='neue-bold text-2xl '>Forge & Flow</h1>
      </div>
      <div onClick={handleToggle} className='cursor-pointer relative z-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path id='equal' d='M3 8 H21 M3 16 H21'></path>
          <path id='cross' d='M6 6 L18 18 M18 6 L6 18'></path>
        </svg>
      </div>

      <Navmenu ref={navMenuRef} />
    </div>
  );
}