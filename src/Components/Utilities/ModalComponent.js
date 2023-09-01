import React from 'react'
import Modal from 'react-modal';

export default function ModalComponent(props) {
  return (
    
      <Modal className=" bg-white lg:inset-y-1/3 p-6 flex flex-col justify-center items-center my-36 md:my-20 mx-auto md:w-3/4 w-11/12 lg:w-2/3 xl:w-1/2 rounded-lg" isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <h2 className='text-center my-4 text-2xl md:leading-[2rem] md:text-[30px] font-semibold'>{props.heading}</h2>
        <p className='text-center'>{props.description}</p>
        <button 
         className='px-12 py-2 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white font-semibold text-base mt-6 rounded-md hover:shadow-xl'
         onClick={props.closeModal}>
          Close
        </button>
      </Modal>

  )
}
