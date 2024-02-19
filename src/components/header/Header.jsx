import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu,setMobileMenu]=useState(false)
const openMobileMenu=()=>{
  setMobileMenu(!mobileMenu)
}
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (elementId) => {
    scroll.scrollTo(elementId, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className={`bg-${isScrolled ? "green-500" : "rgba(255, 255, 255, 0)"} border-gray-200 bg-blue-400 fixed w-full top-0 z-50`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl  whitespace-nowrap font-bold text-white">ISHAQ</span>
        </a>
        <button  onClick={openMobileMenu} data-collapse-toggle="navbar-default" type="button" className=" md:hidden absolute focus:ring-8 rounded right-6 self-center  " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        {
          mobileMenu? <div className='md:hidden'>
            <ul className=' w-full absolute top-16 bg-blue-400 right-0' >
              
            <ScrollLink 
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white  hover:bg-white hover:text-black rounded md:bg-transparent ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('home')
              setMobileMenu(false)}}
              >
                Home
              </ScrollLink>
              
              <ScrollLink 
              
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('about')
              setMobileMenu(false)}}
              >
                About
              </ScrollLink>
              <ScrollLink 
              
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('experience')
                setMobileMenu(false)}}
              >
               Experience
              </ScrollLink>
              <ScrollLink 
              
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('services')
                setMobileMenu(false)}}
              >
              Services
              </ScrollLink>
              <ScrollLink 
              
                to="speaking"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('speaking')
                setMobileMenu(false)}}
              >
               Public Speaking
              </ScrollLink>
              <ScrollLink 
              
                to="articles"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('articles')
                setMobileMenu(false)}}
              >
               Articles
              </ScrollLink>
              <ScrollLink 
              
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white   hover:bg-white hover:text-black rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => {scrollToElement('contact')
                setMobileMenu(false)}}
              >
               Contact Us
              </ScrollLink>
            </ul>
          </div> : ""
        }
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
            <li className="relative group">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded md:bg-transparent ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('home')}
              >
                Home
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
            <li className="relative group">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('about')}
              >
                About
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
            <li className="relative group">
              <ScrollLink
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('experience')}
              >
                Experience
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
            <li className="relative group">
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('services')}
              >
                Services
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
            <li className="relative group">
              <ScrollLink
                to="speaking"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('speaking')}
              >
               Public Speaking 
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
            <li className="relative group">
              <ScrollLink
                to="articles"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('aricles')}
              >
                Articles
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
         
            <li className="relative group">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={`block py-2 px-3 text-white rounded ${isScrolled ? 'hover:bg-transparent' : 'md:hover:bg-transparent md:border-0'}`}
                onClick={() => scrollToElement('contact')}
              >
            Contact Us
              </ScrollLink>
              <div className="flex items-center justify-center w-full gap-1 py-2 px-3 text-white rounded md:bg-transparent opacity-0 group-hover:opacity-100">
                <span className="w-3/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
                <span className="w-1/5 bg-white h-1 rounded-sm"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
