import React from "react";
import Layout from "../Utilities/Layout";

export default function Feedback() {
  return (
    <Layout>
        <div className="bg-sky-900">
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl text-white font-medium title-font mb-4 ">
                Send Your Feedback
                </h1>
                <p className="pb-3 text-white">Note: This page is a dummy page in the current version of this web app. Means I won't recieve any data that you fill here. It will be working in a later version.</p>
                <hr />
            </div>
            <form className="flex flex-row flex-wrap">
                <div className=" xl:w-1/2 md:w-1/3 p-2 flex md:flex-row md:justify-between">
                    <div className="flex flex-col">
                        <div className="text-part md:flex flex-col justify-center hidden lg:p-4 md:p-2">
                            <h1 className="text-center font-semibold text-white py-2">Help Me Do Better</h1>
                            <p className="text-white text-sm text-center py-3">Use the form to send me your feedback about your experience using this web app and ideas on how I can improve.</p>
                            <hr />
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <p className="leading-7 text-sm md:text-base text-white">
                                    Type
                                </p>
                                <div className="flex flex-row flex-wrap justify-between gap-x-4 py-2">
                                    <div className="flex flex-row justify-start">
                                        <input 
                                            type="radio"
                                            id="suggestion" 
                                            name="fdType"
                                            value="suggestion"
                                            required
                                            className=" fbd-type"
                                        />
                                        <label htmlFor="suggestion" className="leading-7 text-sm md:text-base text-white px-2">
                                            Suggestion
                                        </label>
                                    </div>
                                    <div className="flex flex-row justify-start">
                                        <input 
                                            type="radio"
                                            id="complain" 
                                            name="fdType"
                                            value="complaint"
                                            required
                                            className=" fbd-type"
                                        />
                                        <label htmlFor="complain" className="leading-7 text-sm md:text-base text-white px-2">
                                            Complaint
                                        </label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="h-full hidden md:flex border-l-gray-100 border-l-2 md:px-1 lg:px-2"></div>
                </div>
                <div className="xl:w-1/2 md:w-2/3 px-auto">
                    <div className="flex flex-wrap m-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm md:text-base text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="userEmail"
                                    required
                                    className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <div className="relative">
                                <label htmlFor="fdSubject" className="leading-7 text-sm md:text-base text-white">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="fdSubject"
                                    name="subject"
                                    required
                                    className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="fdMessage" className="leading-7 text-sm md:text-base text-white">
                                    Feedback
                                </label>
                                <textarea
                                    id="fdMessage"
                                    name="description"
                                    className="w-full bg-gray-100 bg-opacity-70 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-gradient-to-r from-lime-500 to-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-br rounded text-lg">
                            Send Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </section>
        </div>
    </Layout>
  );
}