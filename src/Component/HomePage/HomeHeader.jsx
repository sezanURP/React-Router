import React from "react";

const HomePage = () => {
  return (
    <div className="container mt-15 ">
      <h2 className="text-5xl text-center font-bold">
        Friends to keep close in your life
      </h2>
      <p className="mt-5 text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>

      <div className="flex justify-center mt-8">
        {" "}
    
        <button
          className="bg-green-800 text-white px-6 py-3 rounded-md 
                     text-lg font-medium 
                     shadow-sm hover:shadow-md 
                     flex items-center gap-2 
                     transition-all active:scale-95"
        >
          <span className="text-xl">+</span>
          Add a friend
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 mt-10 w-[80%] mx-auto gap-6">
        <div class="bg-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="text-4xl font-semibold text-gray-700">12</div>
          <div class="text-gray-500 mt-1">Total Friends</div>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="text-4xl font-semibold text-gray-700">5</div>
          <div class="text-gray-500 mt-1">On Track</div>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="text-4xl font-semibold text-gray-700">5</div>
          <div class="text-gray-500 mt-1">Need Attention</div>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="text-4xl font-semibold text-gray-700">10</div>
          <div class="text-gray-500 mt-1">Interaction This Month</div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
