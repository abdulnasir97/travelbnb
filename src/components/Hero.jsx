import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg"
        alt="HeroPic"
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md: left-[10%] max-w-[1100px] m-auto absolute p-4 ">
          
          <h1 className="font-bold text-4xl md:text-[7xl] drop-shadow-2xl">
            All Inclusive Private Beaches and Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl text-white">
            Welcome to our premier website for all-inclusive beach and island
            getaways! Discover paradise as we bring you a seamless booking
            experience for your dream vacation. From pristine sandy shores to
            breathtaking island retreats, our curated selection of destinations
            ensures an unforgettable escape. Embrace relaxation, adventure, and
            luxury with our all-inclusive packages.
          </p>
          <button className="bg-white text-black">Reserve Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
