import React from "react";

export default function Feature(props) {
  return (
    <div>
      <div className= {`${props.bgColor} border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out`}>
        <div className="flex flex-col justify-center items-center text-white p-2 ">
          <img className="object-cover object-center rounded-lg w-11" src={props.logo} alt="" />
          <div className="text-3xl m-2 text-center">{props.heading}</div>
          <div className="text-white text-sm my-2 flex flex-col items-center h-60">
            <p className="text-center">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
