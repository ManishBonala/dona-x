import React from "react";
import HeroContainer from "../../components/HeroContainer";
const About = () => {
  return (
    <div className='h-full bg-[#100805] flex flex-col items-center justify-center w-full relative font-primary'>
      <HeroContainer />

      <div className="text-white text-center text-4xl font-bold my-24">
        We are Dona-X <br />
        <span className="text-[#ECA14B]">
          A Platform for Donating to Charity
        </span>
      </div>
    </div>
  );
};

export default About;

// background: linear-gradient(90.65deg, #764725 0.88%, rgba(42, 22, 10, 0) 99.47%);

// border: 4px solid;

// border-image-source: linear-gradient(296.26deg, rgba(76, 45, 23, 0) 34.23%, #624225 78.29%),
// linear-gradient(77.56deg, #FFFFFF -70.12%, rgba(255, 255, 255, 0) 81.37%);


