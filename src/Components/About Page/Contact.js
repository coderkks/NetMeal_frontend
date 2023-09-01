import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto text-center leading-relaxed text-base">
              Provide your Name and Email Address and write the message in the given box. If you want to provide some other means of contact as well, write it in the message box.
            </p>
            <p className="lg:w-2/3 mx-auto text-center leading-relaxed text-base"><strong> *Note:</strong> This page is a dummy page in the current version of this web app. Means I won't recieve any data that you fill here. It will be working in a later version</p>
          </div>
          <div className="xl:w-1/2 lg:w-3/5 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-br rounded text-lg">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="/" className="text-indigo-500">kksdeveloper@gmail.com</a>
                <p className="leading-normal my-5">
                  IIT Kanpur
                  <br />
                  Kanpur, Uttar Pradesh, India
                </p>
                <span className="inline-flex">
                  {/* this is left to add some icons of linkedIn, Telegram etc. */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
