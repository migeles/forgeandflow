import herobg from "../../Assets/Image/hero-bg.png";

import Looptext from "./Looptext";

export default function Hero() {
  return (
    <div className='w-full h-screen bg-white relative flex justify-center items-center'>
      <div className='absolute'>
        <img
          className='w-screen h-screen object-cover p-3 rounded-[50px] z-0 '
          src={herobg.src}
          alt=''
        />
        <div className='absolute bg-black/5 backdrop-blur-[2px] rounded-[50px] inset-3'></div>
      </div>

      <h1 className='relative z-10 text-center -translate-y-16 text-white leading-[33px] text-4xl'>
        <span className='neue-bold'>Forging</span> websites <br />
        that level up your <br />
        business <span className='neue-bold'>flow</span>
      </h1>

      <Looptext />
     
    </div>
  );
}
