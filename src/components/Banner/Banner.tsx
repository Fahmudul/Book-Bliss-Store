import React from "react";

const Banner = () => {
  return (
    <div className="h-[600px] w-full">
      <div className="h-[100%] w-full  bg-[url(/assets/Banner.png)] bg-cover flex items-center  bg-center bg-no-repeat">
        <div className="h-[450px] w-[80%] mx-auto flex items-center">
          <div className="w-[45%]  h-[300px]">
            <h2 className="text-3xl font-semibold">Year end sale</h2>
            <h1 className="text-5xl font-semibold text-[#e12503] mt-3">
              Get 70% Off For All <br /> Design Books
            </h1>
            <p className="mt-4">
              Design books are a great way to learn new skills and get inspired
              by the work of others. Our collection of design books includes
              titles on graphic design, web design, user experience (UX) design,
              and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
