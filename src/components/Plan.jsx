import React from "react";

export const Plan = () => {
  return (
    
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg"
          alt="One"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg"
          alt="two"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2707708/pexels-photo-2707708.jpeg"
          alt="three"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3295218/pexels-photo-3295218.jpeg"
          alt="four"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2088019/pexels-photo-2088019.jpeg"
          alt="five"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-5xl font-bold">
          Plan Your Next Trip With Us!
        </h3>
        <p className="text-2xl py-6">
          Dive into a world of unforgettable experiences as we curate the
          perfect trip for you.
        </p>
        <p className="pb-6">
          Plan your vacation, and we'll craft an unforgettable experience
          tailored just for you. From stunning beaches to exhilarating treks,
          exciting excursions to picturesque paths, let us curate the perfect
          trip that fulfills all your wanderlust desires.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More.
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Plan;
