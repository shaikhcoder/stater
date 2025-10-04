import { GoArrowUpRight } from "react-icons/go";
import NeonTextAnimation from "../animation/NeonTextAnimation";
import { Link, useNavigate } from "react-router-dom";
import FramerDiv from "../animation/FramerDiv";
import FramerParagraph from "../animation/FramerParagraph";
import FramerHeading from "../animation/FramerHeading";
import SplitText from "../ui/TextAnimations/SplitText/SplitText";
import { useState } from "react";
import Button from '@mui/material/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [animationComplete,setStateAnimation] = useState(false)

   function  handleAnimationComplete(){
    setStateAnimation(true)
   }

   const scrollToDownload = (e) => {
     e.preventDefault();
     const downloadSection = document.getElementById('download');
     if (downloadSection) {
       downloadSection.scrollIntoView({ behavior: 'smooth' });
     }
   };

  return (
    <div className="min-h-[45vh] sm:min-h-[50vh] w-full flex flex-col items-start justify-end bg-gradient-card p-5 rounded-md">
      <FramerDiv className="mx-auto w-full">
        {/* Date */}

        {/* Title with animated gradient */}
        { !animationComplete ?
        (< SplitText
          text=""
          className="text-center text-5xl md:text-7xl font-bold py-2 bg-gradient-to-r  text-[#11709c]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />) :
        (<FramerHeading className="text-center text-5xl md:text-7xl font-bold py-2 bg-gradient-to-r from-[#0f5f85] via-[#11709c] to-[#1490c1] bg-clip-text text-transparent animate-gradient-x">

          Test OP
        </FramerHeading>)}

        {/* Links container */}
        <FramerDiv className="flex flex-col md:flex-row items-center justify-end px-2 py-6 space-y-4 md:space-y-0 md:space-x-8">
          {/* Primary CTA Button */}
          <a
            className="group flex items-center justify-center py-2.5 px-8 rounded-full bg-[rgb(249,137,54)] hover:bg-[rgb(229,117,34)] text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
           href="https://app.kepuai.live/" 
          >
            Try Now
            <GoArrowUpRight className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Secondary Links */}
          <button
            onClick={scrollToDownload}
            className="text-text-primary font-medium transition duration-300 hover:underline hover:text-[rgb(229,117,34)] decoration-[rgb(249,137,54)] underline-offset-4 cursor-pointer"
          >
            Check Out
          </button>
        </FramerDiv>
       
      </FramerDiv>
    </div>
  );
};

export default HeroSection;
