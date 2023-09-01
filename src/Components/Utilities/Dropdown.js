import React, { useState } from "react";

export default function Dropdown({ title, children }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [dropSymbol, setDropSymbol] = useState("\u{25BC}")

  const toggleDropdown = () => {
    if(isDropdownOpen) setDropSymbol("\u{25BC}")
    else setDropSymbol("\u{25B2}")
    setDropdownOpen(!isDropdownOpen);
  };

  const blurHandler = () =>{
    if(isDropdownOpen) toggleDropdown();
  }

  const clickHandler = () =>{
    if(!hovered) toggleDropdown();
    setHovered(false);
  }

  const hoverHandler = () =>{
    if(!isDropdownOpen){
      setHovered(true);
      toggleDropdown()
    };
  }

  const mouseLeaveHandler = ()=>{
    if(hovered && isDropdownOpen) toggleDropdown();
    setHovered(false);
  }

  return (
    <div
      className="relative group px-2"
      onBlur={blurHandler}
      onMouseEnter={hoverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <button
        className="text-white md:text-base text-sm font-normal align-middle hover:border-green-500 border-2 border-lime-400 p-1 rounded-xl hover:text-gray-300 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={clickHandler}
      >
        {title}
        <span className="md:text-sm text-xs px-1">{dropSymbol}</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 py-4">
          <ul
            className="border-4 border-sky-300 shadow-lg font-medium bg-cyan-800 text-gray-100 rounded-md p-4 space-y-2"
          >
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}
