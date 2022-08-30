import React from 'react'
import { quotes } from '../assets'


const FeedbackCard = ({ content, name, title, img}) => (
  (
    <div className='flex flex-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quote" className='w-[42px] h-[27px] object-contain' />
      <p className={` mt-10 text-[18px] font-poppins font-normal leading-[32px] text-white my-10`} >{content}</p>
      <div className='flex flex-row '>
        <img src={img} alt={name} className='h-[60px] w-[60px] rounded-full' /> 
        <div className='flex flex-col ml-4'>
          <h4 className='text-[20px] font-poppins font-semibold leading-[32px] text-white'>{name}</h4>
          <p className='text-[16px] font-poppins font-normal leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
)


export default FeedbackCard