"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function DesktopNav({ navLinks }) {
  const navContainerRef = useRef(null);
  const navItemsRef = useRef([]);
  navItemsRef.current = [];

  // 1. Add a ref to hold the timeout
  const hideTimeoutRef = useRef(null);

  useGSAP(
    () => {
      if (!navContainerRef.current) return;
      const navItems = navItemsRef.current;

      // --- MOUSE ENTER on each individual link ---
      navItems.forEach((item) => {
        const linkText = item.querySelector("a");

        item.addEventListener("mouseenter", () => {
          // 2. Clear any existing timeout when hovering a new item
          clearTimeout(hideTimeoutRef.current);

          const { offsetLeft, offsetWidth } = item;

          // Animate the background to the hovered item
          gsap.to("#bghover", {
            x: offsetLeft,
            width: offsetWidth,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });

          // Animate the hovered link's text to black

          // Change all other links' text back to white
          navItems.forEach((otherItem) => {
            if (otherItem !== item) {
              gsap.to(otherItem.querySelector("a"), {
                color: "#FFFFFF",
                duration: 0.3,
              });
            }
          });

          // 3. Set a new 5-second timeout to hide the background
          hideTimeoutRef.current = setTimeout(() => {
            gsap.to("#bghover", {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            });
            // Also fade all text back to white
            gsap.to(navItems.map(item => item.querySelector('a')), {
              color: "#FFFFFF",
              duration: 0.5,
            });
          }, 3000); // 5000 milliseconds = 5 seconds
        });
      });

    },
    { dependencies: [navLinks] }
  );

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <nav id='navbar-desktop' className='hidden lg:flex items-center'>
      <ul ref={navContainerRef} className='w-full flex flex-row gap-12 relative'>
        <span
          id='bghover'
          className='-z-10 bg-white/30 backdrop-blur-2xl h-10 absolute rounded-full top-1/2 -translate-y-1/2 pointer-events-none px-4 py-2'
          style={{ width: "0px", opacity: 0 }}
        ></span>
        {navLinks.map((link) => (
          <li key={link.title} ref={addToRefs}>
            <a
              href={link.href}
              className='text-base transition-colors px-4 py-2'
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}