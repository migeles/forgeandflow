import Portoslider from "./Portoslider";

export default function Porto() {
  return (
    // 1. REMOVED w-screen and max-w-screen from the parent
    <div className='w-full h-full flex flex-col lg:flex-row bg-white px-6 pt-7 gap-2 lg:justify-between lg:gap-20 lg:items-center'>
      <div className='w-auto lg:w-auto'>
        <h1 className='neue-medium text-md text-nowrap'>
          Brands We <br className='hidden lg:block' /> Worked With
        </h1>
      </div>
      <div className='w-full lg:flex-1 min-w-0'>
        <Portoslider />
      </div>
    </div>
  );
}
