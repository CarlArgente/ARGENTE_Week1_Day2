import React from "react";
import Employee from "./Employee";
import carl_1 from "./image/carl_1.jpg";
import carl_2 from "./image/carl_2.jpg";
import carl_3 from "./image/carl_3.jpg";

const Contact = () => {
  const employees = [
    {
      name: "Carl Argente",
      image: carl_1,
      designation: "Software Devekioer",
      fullData: "Hi There I am Carl Argente and I am Developer",
    },
    {
      name: "Jan Doe",
      image: carl_2,
      designation: "Product Manager",
      fullData: "Hi there, I am Jan Doe and I am Product Manager",
    },
    {
      name: "Abraham Posaidon",
      image: carl_3,
      designation: "Quality Assurance/Quality Control",
      fullData:
        "Hi there, I am Jan Doe and I am Quality Assurance/Quality Control",
    }, 
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center mb-4 mt-3">
          <h3>Employee List</h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-item-center">
        {employees.map((employee, index) => (
          <Employee
            key={index}
            name={employee.name}
            image={employee.image}
            designation={employee.designation}
            fullData={employee.fullData}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
