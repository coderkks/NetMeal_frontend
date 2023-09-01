import React, { useState } from 'react'
import Input from './Input';
import axios from "axios";
import ModalComponent from '../Utilities/ModalComponent';
import Layout from '../Utilities/Layout';

export default function Signup() {
  const adminArray = ["kkshukla3011@gmail.com", "kksdeveloper123@gmail.com"];
  const [cfmPasswordPara, setCfmPasswordPara] = useState("");
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cfmPassword = document.getElementById("cfmPassword");

  const handleChange = (e) =>{
    const {name, value} = e.target; // 'name' and 'value' attributes of target element will be stored here.
    setFormData((prevData)=>({
      ...prevData, //this is spread syntax which keeps the previous state as it is, only specified value changes.
      [name] : value
    }));
    
  }

  const submitData = async (e)=>{
    e.preventDefault();
    if(adminArray.includes(formData.email)){
      formData.role = "admin";
    }
    if(formData.password !== formData.confirmPassword){
      cfmPassword.value = "";
      cfmPassword.classList.add("border-2", "border-red-600");
      setCfmPasswordPara("* Confirm Password must match with the Password.");
    } 
    else if(formData.password === formData.confirmPassword){
      setCfmPasswordPara("");
      if(cfmPassword.classList.contains("border-2")) cfmPassword.classList.remove("border-2", "border-red-600");

      try {
        const response = await axios.post('/user/signup', formData);
        if(response.status === 200){
          // success
          setModalHeading(response.data.message.heading);
          setModalDescription(response.data.message.description);
        }
        else{
          // failed
          setModalHeading("Error while Signing Up!");
          setModalDescription("Some error occurred during signup, check your internet connection and try again.")
        }
        openModal();
      } catch (error) {
        console.log("Error : ", error);
      }
    }

  }

  return (
    <Layout>
      <div className="bg-purple-800 my-0 min-h-screen">
        <div className="flex justify-center py-10">
          <div className="flex  justify-center  shadow max-w-2xl w-[90%]  bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-600 m-4">
            <div className="h-[90%] w-full my-7">
              
              <div className=" flex flex-col justify-center items-center space-y-2">
                <div>
                  <h1 className="text-xl font-semibold text-white">
                    Sign Up Here
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-7 px-1 space-y-6 md:space-y-8">
                <form onSubmit={submitData} className='flex flex-col justify-center items-stretch px-2 gap-y-4' action="">
                  <Input id="userName" label="Name: " type="text" placeholder="Enter your name" name="name" minLength="3" handleChange={handleChange} value={formData.name} para="* Use only alphabets and no extra whitespace (MinLength : 3)." pattern="^(?!.*\s{2,})(?!^\s)(?!.*\s$)[A-Za-z\s]+$" />
                  <Input id="emailId" label="Email: " type="email" placeholder="Enter your email id" name="email" minLength="5" handleChange={handleChange} value={formData.email} para="" pattern="^[^\s]+$" />
                  <Input id="myPassword" label="Password: " type="password" placeholder="Enter your password" name="password" minLength="6" handleChange={handleChange} value={formData.password} para="* Password must have at least 6 characters and no whitespace." pattern="^[^\s]+$" />
                  <Input id="cfmPassword" label="Confirm Password: " type="password" placeholder="Confirm your password" name="confirmPassword" minLength="6" handleChange={handleChange} value={formData.confirmPassword} para={cfmPasswordPara} pattern="^[^\s]+$" />
                  
                  <div className="text-center mt-10">
                    <button type="submit" className="uppercase text-center w-full md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ModalComponent heading={modalHeading} description={modalDescription} isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </Layout>
    
  )
}
