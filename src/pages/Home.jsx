import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-14 w-full bg-cyan-700 " >
        <div className="flex justify-between p-3">
          <div className="">
            <h2>Cravings</h2>
          </div>
          <div className="flex gap-3">
            <Link to="/Login">Login</Link>
            <Link ></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
