import herobg from "../../Assets/Image/hero-bg-1.png";

import Looptext from "./Looptext";

export default function Hero() {
  return (
    <div className='w-full h-dvh bg-white relative flex justify-center items-center'>
      <div className='absolute'>
        <img
          className='w-screen h-dvh object-cover p-3 rounded-[25px] z-0 '
          src={herobg.src}
          alt=''
        />
        <div className='absolute bg-black/5 backdrop-blur-[2px] rounded-[50px] inset-3'></div>
      </div>

      <h1 className='relative z-10 text-center -translate-y-16 text-white leading-[33px] text-4xl sm:text-5xl sm:leading-[43px] '>
        <span className='neue-bold'>Forging</span> websites <br className="lg:hidden"/>
        that <br className="hidden lg:block"/> level up your <br className="lg:hidden" />
        business <span className='neue-bold'>flow</span>
      </h1>

      <Looptext />
     
    </div>
  );
}
