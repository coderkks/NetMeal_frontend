import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import ModalComponent from '../Utilities/ModalComponent';
import { useAuth } from "../Authentication/AuthContext";
import Layout from "../Utilities/Layout";

export default function Login() {
  const navigate= useNavigate();
  const {login} = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const userLogin = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('user/login',formData);
      if(response.status === 200) {
        if(response.data.message.loggedIn){
          // logged In
          console.log("logged in successfully");
          login(response.data.userDetails);
          navigate('/')
        }
        else{
          // Login Unsuccessful
          setModalHeading(response.data.message.heading);
          setModalDescription(response.data.message.description);
          openModal();
        }
      }
      else{
        setModalHeading("Login Unsuccessful");
        setModalDescription("Some error occurred while loggin in. Please try again.");
        openModal();
      }
    } catch (error) {
      console.log("Error : ",error);
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prevData) =>({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Layout>
      <div className="bg-purple-800 my-0 min-h-screen">
        <div className="flex justify-center py-10">
          <div className="flex  justify-center  shadow max-w-2xl w-[90%]  bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500 m-4">
            <div className="h-[90%] w-full mt-7">
              <div className="mb-6 text-white">
                <Link to="/signup" className="flex justify-end mr-8 space-x-2 underline underline-offset-4">
                  <h1>Sign up</h1>
                  <i className="fa-solid fa-arrow-right-long mt-[6px]"></i>
                </Link>
              </div>
              <div className=" flex flex-col justify-center items-center space-y-2">
                <div>
                  <h1 className="text-xl font-semibold text-white">
                    Log in Here
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-7 px-1 space-y-6 md:space-y-8">
                <form className='flex flex-col justify-center items-stretch px-2 gap-y-4' action="">
                  <div className="space-y-1">
                    <label htmlFor="emailId" className="text-base text-gray-200">Email: </label><br/>
                    <input
                      type="email"
                      placeholder="Enter your email id"
                      id="emailId"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className=" w-full rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="myPassword" className="text-base text-gray-200">Password: </label><br/>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="myPassword"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      minLength="6"
                      required
                      className=" w-full rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                    />
                    <p className="text-xs text-gray-200">* There must be at least 6 characters in the password.</p>
                  </div>
                  <div className="text-center mt-10">
                    <button type="submit" onClick={userLogin} className="uppercase text-center w-full md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">
                      log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-center my-6">
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-200 hover:text-white underline underline-offset-4"
                >
                  Forgot your Password ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent heading={modalHeading} description={modalDescription} isOpen={isModalOpen} closeModal={closeModal} />
    </Layout>
  );
}
