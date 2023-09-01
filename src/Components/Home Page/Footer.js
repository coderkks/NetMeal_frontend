import React from "react";
import { Link } from "react-router-dom";
import NM from "../Images/NM_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="bg-gray-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 lg:px-24 xl:w-2/3 pt-20 pb-12 mx-auto flex justify-center md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center justify-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center justify-center text-gray-900"
            >
              <img src={NM} alt="" className="w-9 h-9 ml-2 rounded-full" />
              <span className="ml-3 text-xl">NetMeal</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Plan your daily meals - Nourish your body with our carefully
              curated meal plans.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-5 md:mt-0 mt-10 text-center">
            <div className=" px-4">
              <h2 className=" font-medium text-gray-900 text-base mb-3">
                Important Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plans"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Meal Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Feedback
                  </Link>
                </li>
              </nav>
            </div>
          </div>
          <div className="">
            <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col">
              <h2 className="font-semibold py-2 text-center">Contact Me:</h2>
              <div className="flex md:flex-col md:space-y-3 items-start space-x-4 md:space-x-0 justify-center p-2">
                <a
                  href="mailto:kksdeveloper123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-blue-600 text-2xl inline-block"
                    />
                    <span className="hidden md:flex px-2">Mail</span>
                </a>
                <a
                  href="http://www.linkedin.com/in/kaushalks20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-800 text-2xl"
                  />
                  <span className="hidden md:flex px-2">LinkedIn</span>
                </a>
                <a
                  href="https://t.me/+KSWiJXL7tDg0MTNl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="text-blue-600 text-2xl"
                  />
                  <span className="hidden md:flex px-2">Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 py-4">
          <p className=" text-sm text-center">
            Copyright © 2023 NetMeal. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
