import React from 'react';

const ListCard = () => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex gap-4 ">
        <img
          className="h-30 w-44"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
          alt=""
        />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Hotel 1</h2>
          <span className="font-medium">4 rooms are available</span>
        </div>
      </div>
      <div className="pt-4">
        <button className="font-bold bg-gray-300 py-1 px-3 hover:bg-gray-400">
          Book now
        </button>
      </div>
    </div>
  );
};

export default ListCard;
