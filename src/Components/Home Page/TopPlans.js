import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TopPlans() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const planData = await axios.get('/plans/top3plans');
        setArr(planData.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className=" flex flex-col items-center plan3 p-4">
        <h1 className="text-center text-white mt-10 mb-5 text-3xl md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-cyan-700 ">
          Top Plans
        </h1>
        <p className="text-white px-10 text-center">
          Here are our top plans (based on user rating), which are not only delicious but also nutritious. Say goodbye to mealtime stress and unhealthy eating habits, and say hello to a balanced and flavorful culinary experience.
        </p>
        <div className="flex justify-center">
            <div className=" flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
              {arr.map((element, index) => {
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
                            <a href="/plandetails">Details</a>
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
