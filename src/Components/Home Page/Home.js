import React, { useRef } from 'react'
import '../myComponent.css';
import Pizza from '../Images/pizza.jpeg';
import Fast from "../Images/Fast.png";
import Calender from "../Images/calender.png";
import Organic from "../Images/organic3.png";
import Feature from './Feature';
import Steps from './Steps';
import TopReviews from './TopReviews';
import TopPlans from './TopPlans';
import { useNavigate } from 'react-router-dom';
import Layout from '../Utilities/Layout';


export default function Home() {

    const topPlansRef = useRef(null);
    const navigate = useNavigate();

    const showTopPlans = ()=>{
        if(topPlansRef.current){
            topPlansRef.current.scrollIntoView({behaviour:'smooth'});
        }
    }

    const showAllPlans = ()=>{
        navigate('/plans')
    }

  return (
    <Layout>
        <div>
            <div className="flex justify-center  bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5 md:p-16 lg:p-28">
            <div className="flex flex-col justify-center  max-w-7xl  text-white">
                <h1 className="text-base font-medium tracking-wider ">Welcome to NetMeal - Your Daily Meal Planner</h1>
                <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; </span>
                <div className="flex flex-col text-white mt-5">
                    <h1 className="text-4xl md:text-[50px] font-semibold m-3">PLAN MEALS</h1>
                    <div className="flex header2">
                        <h1 className="text-4xl md:text-[50px] font-semibold m-3">FOR </h1>
                        <h1 className="animateh1 text-4xl md:text-[50px] font-semibold m-3">EVERYDAY</h1>
                    </div>
                </div>
                <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Here you can plan your daily meals. There are all kind of plans - healthy, tasty, diet food etc. You can choose the most suitable for you at very affordable price.
                </p>
                <div className="flex mt-10 space-x-5">
                    <button onClick={showAllPlans} className="bg-gradient-to-r to-purple-500 from-pink-500 text-white border-2 border-white rounded px-6 py-2 drop-shadow-lg hover:brightness-105 font-semibold">Book Now</button>
                    <button onClick={showTopPlans} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-white rounded px-6 py-2 hover:brightness-105 drop-shadow-lg font-semibold">Top Plans</button>
                </div>
            </div>
            </div>
            <div className="features">
                <h1 className='text-center mt-11 mb-5 text-3xl md:text-[40px] font-semibold text-grad1 underline underline-offset-8 decoration-sky-500 '>Awesome Features</h1>
                <div className="flex justify-center ">
                <div className=" flex md:flex-row justify-center flex-wrap flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
                    <Feature logo={Calender} bgColor="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800" heading="365 Days Delivery" description="Introducing our revolutionary '365 Days Delivery Service'. Say goodbye to limitations and enjoy 24/7 access to a wide array of products, all delivered with speed and reliability, even on holidays and weekends." />

                    <Feature logo={Fast} bgColor="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600" heading="30 Minutes Or Free" description="Welcome to our lightning-fast delivery service, where we guarantee your order will reach you within an incredible 30 minutes or it's absolutely free! We understand that time is of the essence, and our mission is to provide unparalleled convenience to our valued customers." />

                    <Feature logo={Organic} bgColor="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800" heading="100% Organic Food" description="Indulge in the goodness of nature with our exquisite range of 100% organic food, sourced straight from the bounties of Mother Earth. Embrace a healthier lifestyle with our commitment to delivering only the finest, chemical-free, and natural products to your table." />
                    
                </div>
                </div>

            </div>
            <div className="bg-purple-100 pt-5 steps">
                <h1 className='text-center text-grad2 mt-10 mb-5 text-3xl md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-fuchsia-500 '>Steps To Follow</h1>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                            <div className="lg:w-3/5 w-full flex flex-wrap">
                                <Steps step="1" heading="Log in" description="First, you must log in to our app(there is an option at the top-right corner of this page). If you don't have an account, first sign up, then log in." />
                                <Steps step="2" heading="Select a Plan" description="By visiting the ' Plans ' page, choose the plan that best fits your needs. Some top-rated plans(based on user ratings) are also displayed for your convenience." />
                                <Steps step="3" heading="Order the Food" description="Subscribe to the plan and order the food. You can order the food using our mobile app/website, or you can even call us." />
                                <Steps step="4" heading="Enjoy Your Meal" description="Wait for 30 minutes and get your food delivered to your doorstep within 30 minutes. Enjoy your meal!" />
                            </div>
                            <img className='lg:w-2/5 object-cover object-center rounded-lg lg:mt-0 hidden lg:flex' src={Pizza} alt="step" />
                        </div>
                    </div>
                </section>
            </div>
            <TopReviews/>
            <div ref={topPlansRef}>
                <TopPlans/>
            </div>
        </div>
    </Layout>
  )
}
// Things to do:
/**
 * 1. Awesome feature: change for 'md' screen sizes. all 3 must be in a row (change width, padding etc) and for 'sm' screen size height must be decreased means no extra height is being taken and padding increase.
 * 2. In 'navbar' provide a 'cross button' to collapse navbar to 'title' only (for 'md', 'sm' screens).
 * 3. In Reviews section, truncate review. And a limit can be applied on review length, username etc.
 */
