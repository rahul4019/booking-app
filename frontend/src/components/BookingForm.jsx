import React from 'react';

const BookingForm = () => {
  return (
    <div className="flex flex-col w-full ">
      <h2 className="text-3xl font-bold my-4">Select Room To Book</h2>
      <div className="flex gap-8 flex-wrap">
        <button className="bg-gray-300 px-8 hover:bg-gray-400">H1R1</button>
        <button className="bg-gray-300 px-8 hover:bg-gray-400">H1R1</button>
        <button className="bg-gray-300 px-8 hover:bg-gray-400">H1R1</button>
        <button className="bg-gray-300 px-8 hover:bg-gray-400">H1R1</button>
      </div>
      <form className="flex flex-col my-8 gap-4 w-3/6">
        <div className="flex justify-between">
          <span className="font-bold">Name:</span>
          <input type="text" className="border p-1" placeholder="Enter Name" />
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Mobile:</span>
          <input
            type="text"
            className="border p-1"
            placeholder="Enter Mobile"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Email ID:</span>
          <input
            type="text"
            className="border p-1"
            placeholder="Enter Email ID"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-300 px-3 py-1 font-bold hover:bg-gray-400">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
