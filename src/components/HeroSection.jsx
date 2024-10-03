import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { dummyData } from '../constants/dummyData';
import Header from './Header';
import SliderCard from './SliderCard';
import Background from '../assets/hero.svg';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const waveTextVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: 'easeInOut'
    },
  }),
};

const waveTextLongerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.3,
      ease: 'easeInOut'
    },
  }),
};

// Button animation variant
const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

// Arrow button animation variant
const arrowVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Dot animation variant
const dotVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = dummyData;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const waveText = (text, variant) => {
    return text.split("").map((letter, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="relative">
      <Header />
      <div className="relative h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <img src={Background} alt="background" className="absolute bottom-0 z-0 w-full h-[80vh] object-cover" />
        <div className="flex flex-col lg:flex-row h-full z-10 px-4 items-center justify-center text-white">
          <div className="w-full lg:w-[60%] flex flex-col justify-center text-center xs:mt-10 lg:text-left lg:pl-10 mb-8 lg:mb-0">
            <p className="text-2xl xs:text-2xl md:text-4xl lg:text-5xl">
              {waveText("Welcome to", waveTextVariant)}
            </p>
            <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
              {waveText("Pop Rock Crystal Shop!", waveTextVariant)}
            </h1>
            <p className="mt-4 max-w-lg text-xs xs:text-sm md:text-base lg:text-lg">
              {waveText(
                "Here you will find unique phone accessories, crystals, jewelry, and more. Free shipping inside the U.S.",
                waveTextLongerVariant
              )}
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <motion.button
                className="mt-6 px-4 xs:px-6 py-2 w-32 xs:w-40 md:w-48 bg-white text-blue-500 font-bold rounded-full shadow-lg text-xs xs:text-sm md:text-base hover:bg-blue-100 z-20"
                variants={buttonVariant}
                initial="hidden"
                animate="visible"
              >
                SHOP NOW
              </motion.button>
              <motion.a
                href="#"
                className="mt-6 px-4 xs:px-6 py-2 text-white font-bold text-lg xs:text-sm md:text-xl z-20"
                variants={arrowVariant}
                initial="hidden"
                animate="visible"
              >
                about us
              </motion.a>
            </div>
          </div>
          <div className="relative w-full lg:w-[40%] flex flex-col items-center">
            <SliderCard product={products[currentIndex]} />
            <div className="flex justify-between items-center mt-4 w-40 xs:w-52">
              <motion.button
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-lg shadow-lg p-2"
                onClick={handlePrev}
                variants={arrowVariant}
                initial="hidden"
                animate="visible"
              >
                <IoMdArrowRoundBack />
              </motion.button>
              <div className="flex space-x-2">
                {Array(5).fill(0).map((_, index) => (
                  <motion.span
                    key={index}
                    className={`h-2 w-2 xs:h-3 xs:w-3 rounded-full ${currentIndex === index ? 'bg-purple-500' : 'bg-purple-300'}`}
                    variants={dotVariant}
                    initial="hidden"
                    animate="visible"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  ></motion.span>
                ))}
              </div>
              <motion.button
                className="bg-purple-400 hover:bg-purple-500 text-white rounded-lg shadow-lg p-2"
                onClick={handleNext}
                variants={arrowVariant}
                initial="hidden"
                animate="visible"
              >
                <IoMdArrowRoundForward />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
