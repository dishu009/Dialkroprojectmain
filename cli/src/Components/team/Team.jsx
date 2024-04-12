import React from 'react'
import { Link } from "react-router-dom";
import team1 from "../assets/team1.jpg";
import aman from "../assets/aman.jpeg";
import gauravs from "../assets/gauravs.jpeg";
import Narender from "../assets/Narender.jpeg";
import vishal from "../assets/vishal.jpeg";
import komal from "../assets/komal.jpeg";
import CEO from "../assets/CEO.jpg";
import dialkroteam from "../assets/dialkroteam.png";
import amanraj from "../assets/amanraj.jpeg";
import "./Team.css";

import { FaInstagramSquare ,FaWhatsappSquare,FaFacebook} from "react-icons/fa";
const Team = () => {
  return (
    <div>
    <div className="bg-red-800">
        <div className="lg:grid lg:grid-cols-2">
            <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                    <span className="block">Ready To Meet Our Team</span>
                    {/* <span className="block">Start your free trial today.</span> */}
                </h2>
                <p className="text-gray-300 mt-5">
                DialKro is a dynamic social media marketing company committed to providing innovative solutions to enhance your online presence. Our team consists of creative strategists, digital experts, and social media enthusiasts who are passionate about driving results for our clients. With a focus on cutting-edge strategies and personalized approaches, we help businesses connect with their target audience, build meaningful relationships, and achieve their marketing goals. 
                </p>
                <div className="inline-block shadow mt-5">
                    <Link href="#" to="/new" className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-red-800 font-medium border border-transparent rounded-md">Add your Business</Link>
                </div>
            </div>
            <div className="lg:relative lg:mt-16">
                <img className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md" src={dialkroteam} alt="Woman workcation on the beach"/>
            </div>
        </div>
    </div>
    <section className="bg-white dark:bg-gray-900 teamback">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>
                
                <p className="max-w-5xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Our dedicated team members have gained expertise in providing customized web design and development solutions to help our customers. However, this helps to create an outstanding web presence that could go along with the identity of their company. The team of Dialkro is skilled and they are capable to develop any kind of web program. Here is a brief introduction of our expert team that works for the satisfaction of clients.
                </p>
                
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={CEO} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Prem Maurya</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">CEO</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>
                     <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">SADHANA MAURYA</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Managing Director</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Shubham Maurya</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Manager</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={gauravs} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Gaurva Sharma</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Graphic Team Leader</p>
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={team1} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Aditya Gunthal</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full Stack Web developer</p>
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={aman} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Aman Deep Singh</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full Stack Web Developer</p>
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-contain w-32 h-32 rounded-full ring-4 ring-gray-300" src={komal} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Komal Rani</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Video Editor</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>
 
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={vishal} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Vishal kumar</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Graphic Designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={Narender} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Narender kumar</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Graphic Designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-red-900 rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={amanraj} alt=""/>
                        
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Aman Raj</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Web Designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <FaInstagramSquare className='text-pink-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                             <FaFacebook className='text-blue-500'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <FaWhatsappSquare className='text-green-500'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}

export default Team;