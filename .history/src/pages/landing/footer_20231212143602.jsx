import React from 'react'
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

function footer() {
    return (
        <div className='bg-primaryLight rounded-xl'>
            <div className='flex flex-row justify-center space-x-5'>
                <RiFacebookCircleFill size={30} color='gray'/>
                <RiDiscordFill size={30} color='gray'/>
                <RiInstagramFill size={30} color='gray'/>
            </div>
            <div className='flex flex-row justify-center space-x-5 mt-3'> 
                <div className='text-md font-medium underline text-gray cursor-pointer'>About</div>
                <div className='text-md font-medium underline text-gray cursor-pointer'>Privacy Policy</div>
                <div className='text-md font-medium underline text-gray cursor-pointer'>Contact Us</div>
            </div>
            <div className='text-gray text-sm my-3'>@Codiphy 2023 All right reserved</div>
            <div className='text-gray text-sm my-3'>Crafted By: DEV</div>
        </div>

    )
}

export default footer