import React, { useState } from "react";
import UserProfile from "./UserProfile";
import UserImage from "../Images/User_simple.png";
import { useAuth } from "../Authentication/AuthContext";
import { Navigate } from "react-router-dom";
import Layout from "../Utilities/Layout";

export default function Profile() {
  const [expanded, setExpanded] = useState(false);
  const [expSymbol, setExpSymbol] = useState("\u{25BC}");

  const { user } = useAuth();
  if(!user){
    return <Navigate to="/login" />
  }

  const handleExpansion = () => {
    const profileExp = document.getElementById("profileExp");
    if (expanded) {
      //means now it will be closed.
      setExpSymbol("\u{25BC}");
      profileExp.classList.remove("flex");
      profileExp.classList.add("hidden");
    } else {
      profileExp.classList.remove("hidden");
      profileExp.classList.add("flex");
      setExpSymbol("\u{25B2}");
    }

    setExpanded(!expanded);
  };

  return (
    <Layout>
      <div>
        
        <div className="min-h-min bg-teal-100 flex md:flex justify-center items-start">
          <div className="bg-white p-6 rounded-sm min-h-min flex flex-col md:flex-row flex-wrap justify-center items-start shadow-lr">
            <div className="flex md:flex-row md:justify-between sm:p-2">
              <div className="sm:p-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Your Profile
                </h2>
                <div className="flex items-center space-x-4 md:max-w-1/2">
                  <img src={UserImage} alt="" className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="text-lg font-medium">{user.name}</h3>
                    <p className="text-gray-600 text-clip">{user.email}</p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-col">
                  <button
                    onClick={handleExpansion}
                    className="hover:cursor-pointer rounded-md bg-gray-300 flex flex-row md:hidden mb-4 py-4 justify-between"
                  >
                    <span className="px-2">More Details</span>
                    <span className="px-3">{expSymbol}</span>
                  </button>
                  <div
                    id="profileExp"
                    className="space-y-4 hidden md:flex flex-col"
                  >
                    <div>
                      <h4 className="text-lg font-medium">Personal Information</h4>
                      <p className="text-gray-600">Age: -</p>
                      <p className="text-gray-600">Location: -</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Dietary Preferences</h4>
                      <p className="text-gray-600">Not Set</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Allergies</h4>
                      <p className="text-gray-600">Not Set</p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                  Edit Profile
                </button>
                <hr className="md:hidden flex my-4" />
              </div>
              <div className="h-8/10 hidden md:block border-l-gray-300 border-l-2 md:px-2 lg:ml-5 lg:px-6"></div>
            </div>
            <UserProfile />
          </div>
        </div>
      </div>
    </Layout>
  );
}
