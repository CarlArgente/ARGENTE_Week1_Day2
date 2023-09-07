import React from "react";
import Home from "./Home";
import Display from "./Display";

const HomeContent = ({ addData, userData }) => {
  return (
    <div>
      <Home addData={addData}/>
      <Display userData={userData} />
    </div>
  );
};

export default HomeContent;
