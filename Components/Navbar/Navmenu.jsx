import { forwardRef } from 'react';
import arrowdirect from "../../Assets/Image/arrow-redirect.png";

// 1. Wrap your component in forwardRef. It receives 'props' and 'ref' as arguments.
const Navmenu = forwardRef((props, ref) => {
  return (
    // 2. Attach the 'ref' to the DOM element you want to reference from the parent.
    <div ref={ref} className='absolute opacity-0 bg-black/50 backdrop-blur-[10px] top-0 left-0 w-full h-dvh z-10 px-7 pt-28 pb-6 flex-col flex justify-between'>
      <div className='flex flex-col gap-2 neue-medium font-semibold text-3xl'>
        <h2>Work</h2>
        <h2>About</h2>
        <h2>Service</h2>
        <h2>Our Team</h2>
      </div>
      <div className='w-full flex justify-center md:w-40'>
        <div className='w-full h-10 rounded-full bg-white flex items-center justify-center text-black text-sm'>
          <h1 className='text-nowrap flex gap-2 items-center'>
            Get In Touch
            <img className='w-2 h-2 ' src={arrowdirect.src} alt='' />
          </h1>
        </div>
      </div>
    </div>
  );
});

export default Navmenu;