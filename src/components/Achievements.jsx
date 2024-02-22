// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import sahirMl from "../assets/images/sahirML.png";
import icpc from "../assets/images/icpc-achievement.png";
import icpc_pic from "../assets/images/icpc_pic.jpg";
import icpc_participation from "../assets/images/icpc-participation.png";
import cyber1 from "../assets/images/cyber1.png";
import cyber2 from "../assets/images/cyber2.png";
import english from "../assets/images/english2.png";

const heroData = [
  {
    title: "ICPC Final Round",
    description:
      "Participated in the prestigious International Collegiate Programming Contest, BUBT 2022, where our team was selected among the top performers. Demonstrated exceptional problem-solving skills and teamwork.",
    image: icpc_pic,
  },
  {
    title:
    "Champion at the intra-university programming contest",
    description:
    "Before the ICPC contest, we had to win the intra-university programming contest. I was the champion, having solved 9 out of 11 questions.",
    image: icpc,
  },
  {
    title: "Participated NPCP 2020, ICPC 2022",
    description:
    "I have been involved in programming contests since my first year of university life. Among the numerous contests I've participated in, these are the most prestigious ones.",
    image: icpc_participation,
  },
  {
    title: "Cyber Securiy Specialist",
    description: "Successfully completed a rigorous 6-month cybersecurity course where I have learned so many things that will help me build more accurate and secure softwares.",
    image: cyber1,
  },
  {
    title: "Cyber Security Examination Success",
    description: "Achieved success in passing the challenging CertiProf examination, demonstrating a comprehensive understanding of cybersecurity principles and practices.",
    image: cyber2,
  },
  {
    title: "English Proficiency Certificate",
    description: "Attended a British Council exam and achieved excellent result. The preparation equipped me with advanced language skills and enhanced my ability to communicate effectively in English.",
    image: english,
  },
  {
    title: "Completion of Machine Learning Mathematics and Statistics Course",
    description: "Acquired a deep understanding of foundational concepts and techniques essential for analyzing data, building predictive models, and deriving valuable insights",
    image: sahirMl,
  },
];

export default function Achievements() {
  return (
    <>
      <div className="sm:mt-[150px] md:mt-[100px] mr-3 text-white bg-[] md:w-[95%]">
        <h1 className="text-[white] text-2xl md:text-3xl pb-5">Achievements:</h1>
        <Swiper
          navigation={true}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          
        >
          {heroData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="block w-full md:w-[80%] md:flex h-full md:h-[470px] sm:mr-5 justify-between"
            >
              <div className="w-full md:w-[55%] h-[380px]">
                <img
                  src={item.image}
                  className={`w-full md:w-[900px] h-[380px] md:h-[470px] ${
                    index === 0 ? "object-cover" : "object-fit"
                  }`}
                  alt=""
                />
              </div>
              <div className="flex items-center w-full md:w-[45%] mr-5 p-4 pr-6 cursor-pointer">
                <div className="">
                  <h2 className="text-2xl lg:text-4xl font-bold my-6 leading-normal hover:text-[#2ecc71]">
                    {item.title}
                  </h2>
                  <p className="text-[23px] text-justify">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
