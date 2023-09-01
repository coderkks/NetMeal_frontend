import React from "react";

export default function Plans(props) {

  return (
    <div>
      <div className={`flex flex-col items-center ${props.bgClass} p-4`}>
        <h1 className="text-center text-white mt-10 mb-5 text-3xl md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-cyan-700 ">
          {props.heading}
        </h1>
        <p className="text-white px-10 text-center">
          {props.description}
        </p>
        <div className="flex justify-center h-min-[700px] md:min-h-[460px] lg:min-h-[550px] ">
            <div className=" flex flex-wrap md:flex-row md:w-[749px] lg:w-[854px] flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
              {props.planArray.map((element, index) => {
                return (
                      <div key={index} className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current md:p-5 lg:p-9 p-11 h-auto lg:max-w-[300px] md:w-[220px] lg:w-[255px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
                        <div className="flex flex-col justify-center items-center text-white p-2 ">
                          <div className="text-3xl ">{element.name}</div>
                          <div className="flex justify-center my-3 font-medium md:tracking-tighter ">
                            <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                              &#8377;
                            </div>
                            <div className="text-3xl md:text-5xl">{element.price}</div>
                          </div>
                          
                          <div className="text-white text-sm lg:text-base py-5 lg:py-7 mt-5 lg:my-5 border-t border-white flex flex-col justify-center items-center">
                            <ul className="list-disc">
                              <li>
                                <span>{`${(Math.ceil(element.price/element.duration) === element.price/element.duration)?("Only "):("Less than ")} `}</span>
                                <span>&#8377;</span>
                                <span>{`${Math.ceil(element.price/element.duration)} / Day`} </span>
                              </li>
                              <li>{`Duration : ${element.duration} Days`}</li>
                              <li>{`Discount: Upto ${element.discount}%`} </li>
                              <li>{`Ratings : ${(Math.round(element.ratingsAverage*10))/10}/10`} </li>
                            </ul>
                            <div className="px-7 py-1 my-5 lg:my-7 self-center rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                            <a href="/plandetails">Plan Details</a>
                          </div>
                          </div>
                        </div>
                      </div>
                );
              })}
            </div>
        </div>
        
      </div>
    </div>
  );
}
//  work on the width of cards(plan) container. As it is hardcoded now.