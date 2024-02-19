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

const heroData = [
  {
    title: "Participated International Collegiate programming contest.",
    description:
      "Participated International Collegiate programming contest.Participated International Collegiate programming contest.",
    image: icpc_pic,
  },
  {
    title:
    "Politics for some, Economy for all: BPA President at Annual General Meeting",
    description:
    "voluptatum quos incidunt sit necessitatibus praesentium aut architecto eligendi inventore id",
    image: icpc,
  },
  {
    title: "Government controlling media by different ways",
    description:
    "various obstacles. Freedom of media could not be ensured if rule of law is not established through a fair election in the country.",
    image: icpc_participation,
  },
  {
    title: "BPA President paid courtesy call on Finance Minister",
    description: "BPA President Mr. Mahbubul Alam Presided over the meeting",
    image: cyber1,
  },
  {
    title: "BPA President paid courtesy call on Finance Minister",
    description: "BPA President Mr. Mahbubul Alam Presided over the meeting",
    image: cyber2,
  },
  {
    title: "BPA President paid courtesy call on Finance Minister",
    description: "BPA President Mr. Mahbubul Alam Presided over the meeting",
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
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
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
              <div className="flex items-center w-full md:w-[45%] mr-5 p-4 pr-6">
                <div className="">
                  <h2 className="text-2xl lg:text-4xl font-bold my-6 leading-normal">
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
