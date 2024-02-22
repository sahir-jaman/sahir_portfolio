// import React from 'react'

import { FaGithub } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";

import telehaelth from "../assets/images/projects/telehealth2.jpg";
import netflix from "../assets/images/projects/netflix.jpg";
import socialMedia from "../assets/images/projects/socialMedia.png";
import ecommerce from "../assets/images/projects/e-commerce.png";
import sentiment from "../assets/images/projects/sentiment.jpg";
import movie from "../assets/images/projects/movie.jpg";
import email_spam from "../assets/images/projects/emai_spam.jpg";
import dbm from "../assets/images/projects/dbm.jpg";
import jeebika from "../assets/images/projects/jeebika.jpg";
import bpa from "../assets/images/projects/bpa.jpg";

const cardData = [
  {
    image: telehaelth,
    project_name: "Tele-Health",
    description:
      "Production level website where patient and doctor communicate online. ",
    technology: "React Js, Tailwind Css, Python, Django Rest Framework",
    live: "https://telehealth-nextjs-git-experimental-repliq.vercel.app/",
    server: "https://github.com/sahir-jaman/cardi-check",
  },
  {
    image: jeebika,
    project_name: "Jeebika",
    description:
      "A production level website where people get jobs and acquire skills.",
    technology: "React Js, Tailwind Css, python, Django Rest Framework",
    live:"https://jeebika.com/",
    server:"https://github.com/sahir-jaman/jeebika",
  },
  {
    image: bpa,
    project_name: "DBA",
    description:"It's a Bar association project. Bar related tasks are performed.",
    technology: "React Js, Tailwind Css, python, Django Rest Framework",
    live:"https://github.com/sahir-jaman/DhakaBarAssociation",
    server:"https://github.com/sahir-jaman/DhakaBarAssociation",
  },
  {
    image: dbm,
    project_name: "Democratic budget",
    description:
      "Semi government project where owner control posters and blogs.",
    technology: "python, Django, tailwind css, Django Rest Framework",
    live: "https://democraticbudget.org/",
    server: "https://github.com/sahir-jaman/Democratic-Budget-Movement",
  },
  {
    image: ecommerce,
    project_name: "Shopping E-commerse",
    description:
      "Fully functional e-commerce website where user can buy electronic products.",
    technology: "Python, Django, HTML, CSS, Javascript, ES6, Bootstrap",
    live: "https://sahir-jaman.github.io/bigCommerce-shopping-system/",
    server: "https://github.com/sahir-jaman/bigCommerce-shopping-system",
  },
  {
    image: netflix,
    project_name: "Netflix Clone",
    description: "A clone of the Netflix platform.",
    technology: "React Js, Tailwind Css, Python, Django Rest Framework",
    live: "https://sahir-jaman.github.io/netflilx-clone.github.io/src/index.html",
    server: "https://github.com/sahir-jaman/netflilx-clone.github.io",
  },
  {
    image: socialMedia,
    project_name: "Social Media Backend",
    description: "Fully functional social media backend service.",
    technology: "Python, Django, Django Rest Framework, Celery, Redis",
    live: "https://github.com/sahir-jaman/social_media_backend",
    server: "https://github.com/sahir-jaman/social_media_backend",
  },
  {
    image: sentiment,
    project_name: "Sentiment analysis (ML)",
    description: "My final year 6 month thesis project. accuracy 81%.",
    technology: "Python, Django, Scikit-learn, Deep learning, BeutifulSoup",
    live: "https://github.com/sahir-jaman/Aspect-based-sentiment-analysis-based-on-prince-hike-comments",
    server:
      "https://github.com/sahir-jaman/Aspect-based-sentiment-analysis-based-on-prince-hike-comments",
  },
  {
    image: movie,
    project_name: "Movie Recommender(ML)",
    description: "It recommends movies based on the present movie.",
    technology: "React Js, Tailwind Css, Daisy UI",
    live: "https://github.com/sahir-jaman/movie-recommendation-system?tab=readme-ov-file",
    server:
      "https://github.com/sahir-jaman/movie-recommendation-system?tab=readme-ov-file",
  },
  {
    image: email_spam,
    project_name: "Email Spam Classification",
    description: "A tool Manufacturing website, based on e-commerce",
    technology: "Python, Django, Scikit-learn, Support vector machine",
    live:"https://github.com/sahir-jaman/Email-SMS-spam-Classifier",
    server:"https://github.com/sahir-jaman/Email-SMS-spam-Classifier",
  },
];

function Projects() {
  return (
    <div>
      <h1 className="text-[30px] pb-5 text-white font-semibold">
        Key Projects:
      </h1>
      <div className="projects max-w-[100%] hover:text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-10 grid-flow-row">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#2c2c2c] text-white md:hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-500 h-[450px] md:w-[300px] w-[100%] border border-solid border-[#2ecc71]"
            >
              <img
                className="h-[220px] w-12/12 md:object-fit mx-auto"
                src={item.image}
                alt=""
              />
              <div className="text-center p-2 max-h-[100px]">
                <h1 className="text-[20px] font-bold ">{item.project_name}</h1>
                <p>{item.description}</p>
              </div>
              <div className="flex gap-10 justify-center">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 bg-red-500 items-center px-3 py-1 rounded-md cursor-pointer text-white bg-blue-400/20 hover:bg-blue-400 hover:text-black"
                >
                  <IoDesktopOutline />
                  <h1>Live</h1>
                </a>
                <a
                  href={item.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 bg-red-500 items-center px-3 py-1 rounded-md cursor-pointer text-white bg-green-400/40 hover:bg-green-400/60 hover:text-black"
                >
                  <FaGithub />
                  <h1>Server</h1>
                </a>
              </div>
              <div className="p-1 pt-3 pl-7">
                <h1 className="float-left ">Technology:</h1>
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
