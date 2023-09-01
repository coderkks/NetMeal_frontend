import React from 'react'
import Contact from './Contact'
import Layout from '../Utilities/Layout'

export default function About() {
  return (
    <Layout>
      <div>
          <div className="bg-cyan-950 py-10 text-white flex flex-col md:pb-20 p-2 md:p-10">
              <div className="flex flex-col items-center p-6">
                  <h1 className='md:text-lg text-3xl text-center md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-cyan-700  py-2' >About App</h1>
                  <p className='text-center text-sm md:text-base'>It's an web app developed for practice purpose only. It is not a real app to deliver any meal. Meal plans provided are all just dummy.</p>
                  <p className='text-center text-sm md:text-base'>This app's frontend is built using ReactJS library of JavaScript along with TailwindCSS framework of CSS. To built the backend of this app, ExpressJs framework and nodejs are used. I used MongoDB NoSQL database to store the data. Even this page is not of much meaning as of now. It's sort of a placeholder for the content that might get added in a future update.</p>
              </div>
              <div className="flex flex-col items-center p-6">
                  <h1 className='md:text-lg text-3xl text-center md:leading-[3rem] md:text-[40px] font-semibold underline underline-offset-8 decoration-cyan-700  py-2' >About Developer</h1>
                  <p className='text-center text-sm md:text-base'>I'm Kaushal Kishor Shukla. I'm a student in the department of Chemical Engineering at IIT Kanpur. I love programming and learning web development for more than a year and this web app is my first big project(full stack project).  I developed this app's frontend and backend both parts myself. I developed this web app while learning concepts of full stack web development. In fact, the only motto behind developing this was to grasp the concepts and have better understanding of these different frameworks and libraries. Honestly, it took me months to complete this as this was my first big project.</p>
              </div>
          </div>
          <Contact/>
      </div>
    </Layout>
  )
}
