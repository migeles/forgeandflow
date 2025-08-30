export default function Footercontent() {
  return (
    <div className='w-full flex flex-col justify-center items-center text-white '>
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-3 text-5xl md:text-7xl lg:text-9xl md:justify-between md:items-end px-10'>
        <h1>
          Lets <br className='hidden md:block' /> Start{" "}
          <br className='hidden md:block' />{" "}
          <span className='neue-bold'>Forging</span>
        </h1>
        <h1>&</h1>
        <h1 className='md:text-right'>
          Go with <br className='hidden md:block' />
          the <span className='neue-bold'>Flow!</span>{" "}
        </h1>
      </div>
      <div className='w-full px-10 py-14'>
        <hr className='w-full  text-white bg border' />
      </div>

      <div className='h-full grid grid-cols-1 md:grid-cols-2 neue-medium w-full px-10 gap-8 text-3xl lg:text-5xl content-center'>
        {/* Column 1 */}
        <div className='opacity-50 flex flex-col gap-2'>
          <h1>ABOUT</h1>
          <h1>BRANDS</h1>
          <h1>OUR TEAMS</h1>
        </div>

        {/* Column 2 */}
        <div >
          <h1 className='text-white opacity-100'>CONTACT US</h1>
          <div className='text-2xl lg:text-4xl opacity-50 flex flex-col gap-1 pt-3'>
            <h1>+62-878-8720-6610</h1>
            <h1>forgeandflow@gmail.com</h1>
            <h1>@forgeandflow.id</h1>
          </div>
        </div>
      </div>
      <div className='text-2xl px-10 opacity-20 flex items-start w-full gap-1 pt-10 pb-5'>
        <h1>©COPYRIGHT 2025</h1>
      </div>
    </div>
  );
}
