import girldancing from "@/Assets/Image/girl dancing.png";
import girlfading from "@/Assets/Image/girlfading.png";
import blacksmithing from "@/Assets/Image/blacksmithing.png";

export default function Footerimage() {
  // Common styles for all images to reduce repetition.
  const imageBaseClasses =
    "object-cover border-2 md:border-4 border-white rounded-[15px] lg:rounded-[25px]";

  return (
    // The main relative container for positioning the images.
    <div className='relative flex flex-col pl-10 lg:pl-[15vw]'>
      {/* Container for the first two images. The redundant inner div has been removed. */}
      <div className='absolute -top-1/2 -translate-y-1/2 flex flex-row gap-10'>
        <img
          className={`${imageBaseClasses} h-28 min-w-[300px] md:h-32 md:min-w-[500px] lg:min-w-[800px] lg:h-64`}
          src={girldancing.src}
          alt='A person dancing.'
        />
        <img
          className={`${imageBaseClasses} h-28 min-w-[800px] md:h-32 md:min-w-[800px] lg:h-64`}
          src={girlfading.src}
          alt='A person fading into the background.'
        />
      </div>

      {/* Container for the third image. The unnecessary wrapper div has been removed. */}
      <div className='absolute translate-x-[50%] lg:translate-x-[20%] -top-1/2 translate-y-[100%] lg:translate-y-[80%]'>
        <img
          className={`${imageBaseClasses} h-28 min-w-[400px] md:h-32 md:min-w-[700px] lg:min-w-[1600px] lg:h-64`}
          src={blacksmithing.src}
          alt='A blacksmith at work.'
        />
      </div>
    </div>
  );
}
