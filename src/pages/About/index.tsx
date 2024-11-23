import React from "react";
const About = () => {
  return (
    <div className="text-white bg-black min-h-screen flex items-center justify-center">
      <div className="transtion group flex items-center justify-center rounded-full bg-[linear-gradient(to_right,#ffffff_50%,#000000_60%)] w-1/2 h-72 text-white p-1 transparent">
        <div 
        className="h-full w-full"
        
        style={{
          background:
            "linear-gradient(90.65deg, #764725 0.88%, rgba(42, 22, 10, 0) 99.47%)"
        }}>
          Click me
        </div>
      </div>
    </div>
  );
};

export default About;

// background: linear-gradient(90.65deg, #764725 0.88%, rgba(42, 22, 10, 0) 99.47%);

// border: 4px solid;

// border-image-source: linear-gradient(296.26deg, rgba(76, 45, 23, 0) 34.23%, #624225 78.29%),
// linear-gradient(77.56deg, #FFFFFF -70.12%, rgba(255, 255, 255, 0) 81.37%);


