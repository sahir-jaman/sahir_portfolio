import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


function HomeHero() {
  const inputRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(inputRef.current, {
      strings: [
        "Computer Science Engineer.",
        "Competitive Programmer.",
        "Youtuber.",
        "Machine Learning Enthusiast.",
      ],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up the Typed instance on component unmount
    };
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="text-white mt-[150px]">
      <div className="hero-text">
        <h3 className="md:text-[55px] text-[35px] font-semibold tracking-wide">
          Md. Sahiruzzaman
        </h3>
        <h1 className="md:text-[30px] text-[20px] font-semibold">
          {" "}
          I&apos;m <span className="text-[#2ecc71]" ref={inputRef}></span>
        </h1>
        <p className="md:text-[20px] text-[14px] tracking-wide py-1">
          Focused on providing programming excellence
        </p>
        <div className="social flex gap-2 py-4">
          <a href="https://github.com/sahir-jaman">
            <div className="bg-[rgba(255,255,255,0.1)] h-12 w-12 flex justify-center items-center rounded-full hover:bg-[#2ecc71] transition duration-500 ease-in-out">
              <FaGithub className="h-5 w-5" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/md-sahir-jaman-338632190/">
            <div className="bg-[rgba(255,255,255,0.1)] h-12 w-12 flex justify-center items-center rounded-full hover:bg-[#2ecc71] transition duration-500 ease-in-out">
              <FaLinkedin className="h-5 w-5" />
            </div>
          </a>
          <a href="mailto:sahirjaman8@gmail.com">
            <div className="bg-[rgba(255,255,255,0.1)] h-12 w-12 flex justify-center items-center rounded-full hover:bg-[#2ecc71] transition duration-500 ease-in-out">
              <HiOutlineMail className="h-6 w-6" />
            </div>
          </a>
          <a href="https://www.facebook.com/sahirjaman37/">
            <div className="bg-[rgba(255,255,255,0.1)] h-12 w-12 flex justify-center items-center rounded-full hover:bg-[#2ecc71] transition duration-500 ease-in-out">
              <FaFacebook className="h-5 w-5" />
            </div>
          </a>
          <a href="https://www.instagram.com/sahir_jaman/">
            <div className="bg-[rgba(255,255,255,0.1)] h-12 w-12 flex justify-center items-center rounded-full hover:bg-[#2ecc71] transition duration-500 ease-in-out">
              <FaInstagram className="h-5 w-5" />
            </div>
          </a>
        </div>

        <button
          className="md:mt-[20px] mt-[10px] border-2 border-[#2ecc71] border-solid px-[15px] py-[6px] rounded-3xl hover:bg-[#2ecc71] font-bold transition duration-500 ease-in-out"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1PizGGCBzYqrVvz6rtL6UNNJBX8vwiU7b/view?usp=sharing"
            )
          }
        >
          My Resume
        </button>
      </div>

      <div className="bottom md:mt-[250px] mt-[190px]">
        <p className="tracking-wider text-[18px]">
          @Last Updated on{" "}
          <span className="text-[#2ecc71]">5 january, 2024</span>
        </p>
      </div>
    </div>
  );
}

export default HomeHero;
