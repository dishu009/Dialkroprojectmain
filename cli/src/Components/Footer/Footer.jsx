import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaWhatsappSquare ,
  FaYoutube,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
import { useAuth } from "../ProAuth/AuthPro";

const CustomFooter = () => {
  const { isDarkMode } = useAuth();
  return (
    <>
      <footer className={isDarkMode ? "dark" : ""}>
        <div className="dark:bg-neutral-900 bg-black  dark:text-white p-4 items-center text-white  ">
          {" "}
          <div className="flex justify-center pt-10 pb-14 md:pb-9">
            {" "}
            <img
              className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]"
              src="images/cucet-footer-logo.png"
              alt=""
              srcSet=""
            />{" "}
          </div>{" "}
          <div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
            {" "}
            <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
              {" "}
              <div className="flex justify-start md:mt-10">
                {" "}
                <h1 className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  {" "}
                  Inform{" "}
                </h1>{" "}
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  ation
                </span>{" "}
              </div>{" "}
              <p>Registration Start Date</p> <p>Registration End Date</p>{" "}
              <p>Exam Last Date </p>{" "}
            </div>{" "}
            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
              {" "}
              <div>
                {" "}
                <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  {" "}
                  dates &nbsp;
                </pre>{" "}
              </div>{" "}
              <p>23 Dec 2021</p> <p>30 May 2022</p>{" "}
              <p>23 Dec 2021 to 31 May 2022</p>{" "}
            </div>{" "}
            <div className="md:flex flex-col justify-between">
              {" "}
              <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
                {" "}
                <div className="flex justify-start">
                  {" "}
                  <h1 className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    {" "}
                    About{" "}
                  </h1>{" "}
                  <span className="text-white font-sans uppercase font-normal tracking-wider">
                    exam
                  </span>{" "}
                </div>{" "}
                <p className="">
                  {" "}
                  <Link  to="/about" className="hover:text-[#cacaca]" href="#">
                    About
                  </Link>{" "}
                </p>{" "}
                <p className="">
                  {" "}
                  <Link to="/businesses" className="hover:text-[#cacaca]" href="#">
               Businesses List
                  </Link>{" "}
                </p>{" "}
                <p className="">
                  {" "}
                  <Link to="/new" className="hover:text-[#cacaca]" href="#">
                 Add New Business
                  </Link>{" "}
                </p>{" "}
                <p className="">
                  {" "}
                  <Link to="/mybusiness" className="hover:text-[#cacaca]" href="#">
              Personal Business
                  </Link>{" "}
                </p>{" "}
                <p className="">
                  {" "}
                  <Link to="" className="hover:text-[#cacaca]" href="#">
                     Blogs
                  </Link>{" "}
                </p>{" "}
                <p className="">
                  {" "}
                  <Link to="" className="hover:text-[#cacaca]" href="#">
                   Contact details
                  </Link>{" "}
                </p>{" "}
              </div>{" "}
              <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
                {" "}
                <div className="flex justify-start md:-mt-32">
                  {" "}
                  <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    {" "}
                    suppor{" "}
                  </h1>{" "}
                  <span className="text-white font-sans uppercase font-normal tracking-wider">
                    t
                  </span>{" "}
                </div>{" "}
                <p className="">
                  {" "}
                  <a href="#" className="hover:text-[#cacaca]">
                    FAQ's
                  </a>{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
              {" "}
              <div className="flex justify-start">
                {" "}
                <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  {" "}
                  get in t{" "}
                </h1>{" "}
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  ouch
                </span>{" "}
              </div>{" "}
              <p className="space-x-3">
                {" "}
                <i className="fa fa-home text-[17px]"></i>
                <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                  Our Company
                </strong>{" "}
              </p>{" "}
              <div className="leading-7">
                {" "}
                <p className="">
                  {" "}
                  E-260, b-1, phase 8 b, Industrial Area, Sector 74 Sahibzada Ajit Singh Nagar, Punjab 160055  <br /> General Helpline No:+91 987-6543-210{" "}
                </p>{" "}
              </div>{" "}
              <div className="leading-7 mt-4 text-[15px] font-[500]">
                {" "}
                <p className="space-x-3 hover:text-[#cacaca]">
                  {" "}
                  <i className="fa fa-phone text-[17px]"></i>{" "}
                  <a href="#"> 1800 1800 88800</a>{" "}
                </p>{" "}
                <p className="space-x-3 hover:text-[#cacaca]">
                  {" "}
                  <i className="fa fa-phone text-[17px]"></i>{" "}
                  <a href="#">
                    9946948000S ({" "}
                    <span className="text-[13px] font-[500]">
                      General Enquiry
                    </span>{" "}
                    )
                  </a>{" "}
                </p>{" "}
                <p className="space-x-3 hover:text-[#cacaca]">
                  {" "}
                  <i className="fa fa-phone text-[17px]"></i>{" "}
                  <a href="#">
                    994694700&nbsp;({" "}
                    <span className="text-[13px] font-[500]">
                      Technical Support: CUCET
                    </span>{" "}
                    ){" "}
                  </a>{" "}
                </p>{" "}
                <p className="space-x-3 hover:text-[#cacaca]">
                  {" "}
                  <i className="fa fa-envelope text-[16px]"></i>{" "}
                  <a href="#"> admin@Company.in</a>{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
            {" "}
            <p>&nbsp;</p> <p>&nbsp;</p>{" "}
          </div>{" "}
          <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
            {" "}
            <p>
              {" "}
              <a
                href="https://www.facebook.com/Dkanytime24" target="_blank"
                className="w-10 h-10  hover:text-blue-500 transform ease-in-out duration-500  rounded-full inline-block pt-[7px]"
              >
               <FaFacebook className="item-center text-blue-700 w-8 h-8" />
              </a>{" "}
            </p>{" "}
            <p>
              {" "}
              <a
                 href="https://www.instagram.com/dialkro.in/" target="_blank"
                className="w-10 h-10  hover:text-blue-500 transform ease-in-out duration-500  rounded-full inline-block pt-[7px]"
              >
                <FaInstagramSquare  className="item-center text-pink-600 w-8 h-8"/>
              </a>{" "}
            </p>{" "}
            <p>
              {" "}
              <a
                href="#"
                className="w-10 h-10  hover:text-blue-500 transform ease-in-out duration-500  rounded-full inline-block pt-[7px]"
              >
               <FaTwitter  className="item-center text-blue-300 w-8 h-8"/>
              </a>{" "}
            </p>{" "}
            <p>
              {" "}
              <a
                href="#"
                className="w-10 h-10  hover:text-blue-500 transform ease-in-out duration-500  rounded-full inline-block pt-[7px]"
              >
              <FaWhatsappSquare className="item-center text-green-400 w-8 h-8" />
              </a>{" "}
            </p>{" "}
            <p>
              {" "}
              <a
                href="https://www.youtube.com/@Dial24News"  target="_blank"
                className="w-10 h-10  hover:text-blue-500 transform ease-in-out duration-500  rounded-full inline-block pt-[7px]"
              >
           <FaYoutube className="item-center text-red-600 w-8 h-8"/>
              </a>{" "}
            </p>{" "}
    
       
          </div>
        </div>
      </footer>
    </>
  );
};

export default CustomFooter;
