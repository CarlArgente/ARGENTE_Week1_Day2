import React from "react";
import About from './About'
import DisplayGrocery from "./DisplayGrocery";
const AboutContent = ({addGrocery, groceryData}) => {

  return (
    <div>
      <About addGrocery={addGrocery} />
      <DisplayGrocery groceryData={groceryData} />
    </div>
  );
};

export default AboutContent;
