import React from "react";

const Employee = ({ name, image, designation, fullData }) => {
  const handleMouseOver = () => {
    alert(
      `Name: ${name}\nImage: ${image}\nDesignation: ${designation}\nFull Data: ${fullData}`
    );
    // You can also use a modal to display the full data instead of an alert.
  };

  return (
    <div className="card mx-2" style={{ width: "18rem" }} onMouseOver={handleMouseOver}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body"> 
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{designation}</p>
      </div>
    </div>
  );
};

export default Employee;
