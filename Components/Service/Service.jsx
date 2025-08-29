export default function Service() {
  // An array holds the service names for cleaner code.
  const services = [
    "Brand Identity & Digital Strategy",
    "Content Strategy & Copywriting",
    "Website Maintenance",
    "Full-Fledged Website Creation",
    "Content Strategy & Copywriting",
    "Online Store Solutions",
  ];

  return (
    <div className='min-h-full h-auto pt-10 lg:pt-24 px-5 md:px-10'>
      <div className='text-5xl md:text-7xl neue-bold mb-8'>
        Our <br className="md:hidden" />
        Service
      </div>

      {/* This is now a grid container. It defaults to a single column 
        and switches to two columns on large screens (lg:). 
        A horizontal gap (gap-x-12) is added for spacing.
      */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 text-lg px-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex flex-col rounded-lg transition-colors hover:bg-neutral-100 neue-medium text-2xl md:text-3xl font-extrabold '
          >
            <span className='py-3 md:py-4 md:overflow-hidden text-nowrap'>{service}</span>
            <hr className="ml-2"/>
          </div>
        ))}
      </div>
    </div>
  );
}