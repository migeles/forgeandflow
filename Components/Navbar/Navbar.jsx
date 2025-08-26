"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useState, useRef } from "react";
import Navmenu from "./Navmenu";
import arrowdirect from "../../Assets/Image/arrow-redirect.png";
import DesktopNav from "./DesktopNav"; // 👈 Import the new component

gsap.registerPlugin(MorphSVGPlugin);

// Define navigation links here
const navLinks = [
  { href: "/work", title: "Work" },
  { href: "/about", title: "About" },
  { href: "/services", title: "Service" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef();
  const navMenuRef = useRef(null);
  const container = useRef();

  useGSAP(
    () => {
      // ... (your GSAP animation code remains unchanged)
      gsap.set("#cross", { display: "none" });
      gsap.set(navMenuRef.current, { opacity: 0, pointerEvents: "none" });

      tl.current = gsap.timeline({
        paused: true,
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
    isOpen ? tl.current.reverse() : tl.current.play();
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={container}
      className='flex h-20 justify-between items-center px-7 pt-3 rounded-[50px] fixed top-0 left-0 right-0 z-30 text-white '
    >
      <div className='relative z-20'>
        <h1 className='neue-bold text-2xl '>Forge & Flow</h1>
      </div>
      <div
        onClick={handleToggle}
        className='cursor-pointer relative z-20 lg:hidden'
      >
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

      {/* 👇 Use the new DesktopNav component and pass the links as a prop */}
      <DesktopNav navLinks={navLinks} />

      <Navmenu ref={navMenuRef} />

      <div className='hidden lg:flex justify-center md:w-40'>
        <div className='w-full h-10 rounded-full bg-white flex items-center justify-center text-black text-sm'>
          <h1 className='text-nowrap flex gap-2 items-center'>
            Get In Touch
            <img className='w-2 h-2 ' src={arrowdirect.src} alt='' />
          </h1>
        </div>
      </div>
    </div>
  );
}