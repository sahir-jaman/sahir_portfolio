// import React from 'react'

import { FaGithub } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";

import telehaelth from "../assets/images/projects/telehealth2.jpg";
import netflix from "../assets/images/projects/netflix.jpg";
import socialMedia from "../assets/images/projects/socialMedia.png";
import sentiment from "../assets/images/projects/sentiment.jpg";
import movie from "../assets/images/projects/movie.jpg";
import email_spam from "../assets/images/projects/emai_spam.jpg";

const cardData = [
    {
        image:telehaelth,
        project_name:"Tele-Health",
        description:"A production level website where patient and doctor can communicate online. ",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://telehealth-nextjs-git-experimental-repliq.vercel.app/",
        server:"https://github.com/sahir-jaman/cardi-check",
    },
    {
        image:"https://raw.githubusercontent.com/devmhimran/dummy-api/main/Devmhimran-Api/Devmhimran-image/devmhimran-find-tools.png",
        project_name:"Shopping E-commerse",
        description:"A fully functional ful stack website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://sahir-jaman.github.io/bigCommerce-shopping-system/",
        server:"https://github.com/sahir-jaman/bigCommerce-shopping-system",
    },
    {
        image:netflix,
        project_name:"Netflix Clone",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://sahir-jaman.github.io/netflilx-clone.github.io/src/index.html",
        server:"https://github.com/sahir-jaman/netflilx-clone.github.io",
    },
    {
        image:socialMedia,
        project_name:"Social Media Backend",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://github.com/sahir-jaman/social_media_backend",
        server:"https://github.com/sahir-jaman/social_media_backend",
    },
    {
        image:sentiment,
        project_name:"Sentiment analysis (ML)",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://github.com/sahir-jaman/Aspect-based-sentiment-analysis-based-on-prince-hike-comments",
        server:"https://github.com/sahir-jaman/Aspect-based-sentiment-analysis-based-on-prince-hike-comments",
    },
    {
        image:movie,
        project_name:"Movie Recommendation System (ML)",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
        live:"https://github.com/sahir-jaman/movie-recommendation-system?tab=readme-ov-file",
        server:"https://github.com/sahir-jaman/movie-recommendation-system?tab=readme-ov-file",
    },
    {
        image:email_spam,
        project_name:"Email Spam Classification",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
    },
    {
        image:"https://raw.githubusercontent.com/devmhimran/dummy-api/main/Devmhimran-Api/Devmhimran-image/devmhimran-find-tools.png",
        project_name:"Find tools",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
    },
    {
        image:"https://raw.githubusercontent.com/devmhimran/dummy-api/main/Devmhimran-Api/Devmhimran-image/devmhimran-find-tools.png",
        project_name:"Find tools",
        description:"A tool Manufacturing website, based on e-commerce",
        technology:"React Js, Tailwind Css, Daisy UI, React Router, Firebase Hook, Firebase, Node JS, Express Js, MongoDB",
    },
    
]

function Projects() {
  return (
    <div>
      <div className="projects max-w-[100%]">
        <div className="Grids grid grid-cols-1 md:grid-cols-5 gap- grid-flow-row justify-items-center">
       {cardData.map((item,index)=>(
            <div key={index} className="bg-white h-[480px] w-[300px] border border-solid border-[#2ecc71]">
            <img
                className="h-[220px] w-12/12 object-fit"
                src={item.image}
                alt=""
            />
            <div className="text-center p-2">
                <h1 className="text-[25px] font-bold ">{item.project_name}</h1>
                <p>{item.description}</p>
            </div>
            <div className="flex gap-10 justify-center">
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="flex gap-1 bg-red-500 items-center px-3 py-1 rounded-md cursor-pointer text-blue-600 bg-blue-400/20 hover:bg-blue-400 hover:text-black">
                    <IoDesktopOutline/>
                    <h1>Live</h1>
                </a>
                <a href={item.server} target="_blank" rel="noopener noreferrer" className="flex gap-1 bg-red-500 items-center px-3 py-1 rounded-md cursor-pointer text-black-600 bg-green-400/40 hover:bg-green-400/60 hover:text-black">
                    <FaGithub/>
                    <h1>Server</h1>
                </a>
            </div>
            <div className="p-2">
                <h1>Technology:</h1>
                <p>{item.technology}</p>
            </div>
            </div>
            ))}
       </div>
      </div>
    </div>
  );
}

export default Projects;
