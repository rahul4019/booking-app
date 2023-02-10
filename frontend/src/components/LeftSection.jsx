import React from 'react';
import DateWidget from './DateWidget';
import ListCard from './ListCard';

const LeftSection = () => {
  return (
    <div className="w-1/2 flex flex-col p-4">
      <div className="w-full">
        <div className="font-semibold flex w-full items-center">
          <span className="-mt-1">Room Type:</span>
          <form className="flex w-2/3 justify-around ">
            <label>
              <input type="radio" value="3BHK" />
              1BHK
            </label>
            <label>
              <input type="radio" value="3BHK" />
              2BHK
            </label>
            <label>
              <input type="radio" value="3BHK" />
              3BHK
            </label>
          </form>
        </div>
      </div>

      <DateWidget />

      <div className="flex flex-col overflow-y-auto">
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};

export default LeftSection;
