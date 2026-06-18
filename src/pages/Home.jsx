import React from "react";
import HelpPage from "../assets/HelpPage.jpg";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-auto">
        <img src={HelpPage} alt="Help Page" className="w-full h-auto" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-lg p-4">
          <h1 className="text-4xl font-bold mb-2">Welcome to Cravings</h1>
          <p className="text-lg text-center">
            Your Favorite Food, Delivered Fast
          </p>
          <div className="flex gap-4 mt-4">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">
              SignUp
            </button>

            <button className="mt-4 px-6 py-2 bg-blue-600  text-white font-semibold rounded-lg">
              Jay hind doston
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
