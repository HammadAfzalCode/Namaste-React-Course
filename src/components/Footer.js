import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-gray-700 p-4">
      <span className="font-bold text-white">Developer: Hammad Afzal</span>
      <a
        href="https://www.namastedev.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white"
      >
        <span className="font-bold text-white">Instructor: Akshay Saini</span>
      </a>

      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/hammad-afzal-09ab542a3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white"
        >
          <span className="font-bold">LinkedIn</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Logo"
            className="w-8 h-8 ml-2"
          />
        </a>
        <a
          href="https://www.github.com/HammadAfzalCode/Food-Sale-App"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white ml-4"
        >
          <span className="font-bold">GitHub Repo</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            className="w-8 h-8 ml-2"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
