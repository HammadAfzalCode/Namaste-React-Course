import React from "react";
import { LOGO_URL } from "../utils/constants";

const About = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #f00, #f00, #600)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="flex mt-10">
      <img src={LOGO_URL} alt="Logo" />
      <div className="mt-30">
        <h1 className="mt-40 font-bold text-6xl" style={gradientStyle}>
          Fast Food Delivery App
        </h1>
        <h2 className="font-semibold mt-2">Our Mission:</h2>
        <p>
          Our mission is to provide a hassle-free food discovery experience.
          Easily find and enjoy your favorite dishes with our user-friendly app,
          connecting you to a world of culinary delights. Simplify your food
          journey and savor the convenience of hassle-free dining.
        </p>
      </div>
    </div>
  );
};

export default About;
