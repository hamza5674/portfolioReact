import React from 'react'
import { TbBusinessplan } from "react-icons/tb";
import { SlLayers } from "react-icons/sl";
import { PiUsersThree } from "react-icons/pi";
import { TbDeviceMobileUp } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa6";
import { TbBrandWebflow } from "react-icons/tb";

function FeatureCard() {
    const cards=[
        {
            id:"1",
            icon:<TbBusinessplan />,
            title:"Business Stratagy",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"2",
            icon:<SlLayers />,
            title:"Website Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"3",
            icon:<PiUsersThree />,
            title:"Marketing & Reporting",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"4",
            icon:<TbDeviceMobileUp />,
            title:"Mobile Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"5",
            icon:<FaRegChartBar />,
            title:"Marketing & Reporting",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        {
            id:"6",
            icon:<TbBrandWebflow />,
            title:"App Development",
            content:"I throw myself down among the tall grass by the stream as I lie close to the earth."
        },
        
    ]
  return (
    <>
    <div className='grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-20'>
    {
        cards.map((item)=>{
         return   <div className='bg-[#f6f6f6] group  text-white px-8 py-12  rounded-xl cursor-pointer hover:text-white hover:bg-gradient-to-r from-[#f81f01] to-[#ee076e] hover:border-transparent hover:-translate-y-3 transition delay-150 duration-300 ease-in-out'>
            <span className='text-[#f9004d] text-6xl mb-8 inline-block group-hover:text-white'>{item.icon}</span>
                <h2 className='text-[24px] text-black mb-8'>{item.title}</h2>
                <p className='text-[#717173] mb-8 text-[18px] group-hover:text-white'>{item.content}</p>
    
    </div>
        })
       
    }
    
    </div>
    </>
  )
}

export default FeatureCard