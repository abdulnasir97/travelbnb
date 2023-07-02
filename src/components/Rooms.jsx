import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-3xl font-bold">Exquisite Luxury Suites</h3>
        <p className="pt-4">
          Indulge in opulent accommodations fit for every traveler. Our
          exquisite selection of luxurious rooms and suites ensures a blissful
          stay, providing comfort, elegance, and a touch of lavishness to
          enhance your beach and island getaway.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/16648302/pexels-photo-16648302/free-photo-of-picture-made-out-of-threads-lying-on-the-bed-with-a-croissant.jpeg"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/16436921/pexels-photo-16436921/free-photo-of-room-with-the-view-of-palm-trees-in-a-tropical-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
