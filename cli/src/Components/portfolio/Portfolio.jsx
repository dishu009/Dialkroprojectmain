import React from 'react'
import portfolio1 from "../assets/portfolio1.jpeg";
import portfolio2 from "../assets/portfolio2.jpeg";
import portfolio3 from "../assets/portfolio3.jpeg";
import portfolio4 from "../assets/portfolio4.jpeg";
import rgshineport from "../assets/rgshineport.png";
import dial24port from "../assets/dial24port.png";
import fabieport from "../assets/fabieport.png";
import skylineport from "../assets/skylineport.png";
import amantraport from "../assets/amantraport.png";
import claport from "../assets/claport.png"
import spacport from "../assets/spacport.png";
const Portfolio = () => {
  return (
    <div>
      <div className="container py-10 md:py-20 flex justify-center flex-col ml-20" id="portfolio">
  <h2 className="text-center font-header text-2xl font-bold uppercase text-red-700 sm:text-5xl lg:text-6xl">
    Check out our Portfolio
  </h2>
  <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
    Here's what I have done with the past
  </h3>

  <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
    <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
      <img src={portfolio1} className="w-full shadow" alt="portfolio image"/>
    </a>
    <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
      <img src={portfolio2} className="w-full shadow" alt="portfolio image"/>
    </a>
    <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
      <img src={portfolio3} className="w-full shadow" alt="portfolio image"/>
    </a>
    <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
      <img src={portfolio4} className="w-full shadow" alt="portfolio image"/>
    </a>
  </div>
    </div>



<div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={dial24port}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-50 max-w-full rounded-lg"
              src={skylineport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={rgshineport}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={fabieport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={amantraport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={claport}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={spacport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio;