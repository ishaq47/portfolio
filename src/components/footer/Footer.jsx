import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
    const linkedinLink = 'https://www.linkedin.com/in/muhammad-ishaq-141136244?';
    const githubLink = 'https://github.com/ishaq47';
    const facebookLink = 'https://www.facebook.com/profile.php?id=100077201024283&mibextid=ZbWKwL';
    const instagramLink = 'https://www.instagram.com/zalmayy47?igsh=dnUxbnN3ZTJkdTg5';
    return (
        <div className='flex w-full flex-col h-[70vh] justify-start items-center gap-6 p-20'>
            <div className="w-full flex items-center justify-center gap-4">
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className='w-[50px] h-[50px] flex items-center justify-center rounded-3xl cursor-pointer border bg-slate-100'><FaLinkedin size={25} className='text-primary hover:text-secondary' /></a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className='w-[50px] h-[50px] flex items-center justify-center rounded-3xl cursor-pointer border bg-slate-100'><FaGithub size={25} className='text-primary hover:text-secondary' /></a>
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" className='w-[50px] h-[50px] flex items-center justify-center rounded-3xl cursor-pointer border bg-slate-100'><FaFacebook size={25} className='text-primary hover:text-secondary' /></a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='w-[50px] h-[50px] flex items-center justify-center rounded-3xl cursor-pointer border bg-slate-100'><FaInstagramSquare size={25} className='text-primary hover:text-secondary' /></a>
            </div>
            <p className="text-3xl md:text-5xl font-semibold text-primary">
                mik9649820@gmail.com
            </p>
            <ul className="flex flex-wrap justify-around items-center text-primary gap-10 text-xl pt-4 font-semibold">
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Experience</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Public Speaking</li>
                <li className='cursor-pointer'>Articles</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
            <p className="text-lg font-normal text-gray-500">
                Designed and Developed by Muhammad Ishaq
            </p>

        </div>
    )
}
