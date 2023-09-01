import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col space-y-4 text-center">
          <div className="text-cyan-700 text-xl font-medium">NetMeal</div>
          <div className="text-5xl font-medium">Page not found</div>
          <div className="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-purple-500 via-sky-600 to-blue-500 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
              <Link to='/'>Visit Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
