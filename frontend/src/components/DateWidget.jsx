import React from 'react';

const DateWidget = () => {
  return (
    <div className="flex my-8 gap-4 font-semibold">
      <div className="flex w-1/2 flex-col ">
        <label>From: </label>
        <div className="flex gap-1 border border-black py-1 px-2 mt-4">
          <input type="date" className="text-blue-800" />
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <label>To: </label>
        <div className="flex gap-1 border border-black py-1 px-2 mt-4">
          <input type="date" className="text-blue-800" />
        </div>
      </div>
    </div>
  );
};

export default DateWidget;
