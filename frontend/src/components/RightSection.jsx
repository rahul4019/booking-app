import React from 'react';
import BookingForm from './BookingForm';

const RightSection = () => {
  return (
    <div className="flex flex-col w-1/2 justify-end items-center p-8">
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Hotel 1</h1>
            <span className="font-medium text-xl">
              114 B, 3rd Floor Dwarka Mor
            </span>
          </div>
          <div>
            <img
              className="w-80"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
              alt=""
            />
          </div>
        </div>
      </div>

      <BookingForm />
    </div>
  );
};

export default RightSection;
