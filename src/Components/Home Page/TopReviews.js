import React, { useEffect, useState } from "react";
import Full_Star from '../Images/full_star2.png';
import Empty_Star from '../Images/empty_star.png';
import axios from "axios";

export default function TopReviews() {
  const [revArr, setRevArr] = useState([]);
  const colorArr = ['bg-orange-600', 'bg-green-600', 'bg-purple-600', 'bg-blue-600', 'bg-pink-600', 'bg-violet-600', 'bg-rose-600'];

  useEffect( () => {
    async function fetchData(){
      try {
        const reviewData = await axios.get("/review/top3");
        setRevArr(reviewData.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const formatDate = (inpdate) => {
    const dateParts = inpdate.split('T')[0].split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const date = dateParts[2];
    return `${date}/${month}/${year}`
  }

  const printStar = (stars) => {
    let starsArr = [];
    let i= 0;
    while(i<stars){
      starsArr.push(Full_Star);
      i++;
    }
    while(i<10){
      starsArr.push(Empty_Star)
      i++;
    }
    return starsArr.map((starImage, index) =>{
      return (
        <div key={index}>
          <img className="w-4" src={starImage} alt="" />
        </div>
      ) 
    });
  }

  return (
    <div>
      <h1 className="text-center text-grad3 mt-10 mb-5 text-3xl md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-orange-500 ">
        Reviews
      </h1>
      <div className="text-sm lg:text-base flex justify-center">
        <div className="revCards flex justify-center flex-wrap md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7">
          {revArr.map((revElem, index) => {
            return (
              // we'll have to provide the 'key' for each child of list.
              <div key={index}>
                <div className=" bg-emerald-100 shadow-lg rounded-lg h-full max-w-md md:w-[220px] lg:w-[255px] p-11 md:p-7 lg:p-9">
                  <div className="flex justify-center flex-wrap flex-col">
                    <div className="userName flex">
                      {revElem.user.profileImage ? <img src={revElem.user.profileImage} className="md:w-8 w-[26px] rounded-full object-cover" alt="" /> : <div className={`md:w-8 md:h-8 md:text-lg w-[26px] h-[26px] text-base text-white text-center align-middle mr-2 rounded-full ${colorArr[Math.floor(Math.random()*colorArr.length)]}`}>{revElem.user.name[0]} </div>}
                      <i className="font-semibold">{revElem.user.name}</i>
                    </div>
                    <div className="py-3 mb-3 review">{revElem.review}</div>
                    <div className="basePart gap-x-2 gap-y-2 flex flex-wrap">
                      <div className="plan font-sans font-medium">{`Plan : ${revElem.plan.name} `}</div>
                      <div className="rating flex flex-wrap gap-x-4">
                        <div>{`Ratings : ${revElem.rating}/10 `} </div>
                        <div className="stars flex flex-wrap">
                          {printStar(revElem.rating)}
                        </div>
                      </div>
                      <div className="date font-mono italic text-gray-500">{formatDate(revElem.createdAt)} </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
