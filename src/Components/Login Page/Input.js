import React from "react";

export default function Input(props) {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-base text-gray-200">
        {props.label}
      </label>
      <br />
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        minLength={props.minLength}
        onChange={props.handleChange}
        value={props.value}
        pattern={props.pattern}
        required
        className=" w-full rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
      />
      {(props.para)?(<p className="text-xs text-gray-200">
        {props.para}
      </p>): ""}
      
    </div>
  );
}
