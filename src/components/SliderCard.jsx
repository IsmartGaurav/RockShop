import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SliderCard = ({ product }) => {
  const scaleRotateVariant = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: { 
      opacity: 1,
      scale: 1, 
      rotate: 0, 
      transition: {
        duration: 1.5, 
        ease: 'easeInOut',
      }
    },
  };

  return (
    
    <motion.div
      className="relative lg:w-[70%] w-full h-80 xs:h-72 sm:h-96 bg-white rounded-[2.5rem] shadow-lg flex flex-col items-center justify-center text-center p-4"
      variants={scaleRotateVariant}
      initial="hidden"
      animate="visible"
    >
          <Link to={`/productInfo/${product.id}`} className="block">
      <span className="absolute top-10 -left-1 bg-purple-500 rounded text-white text-lg px-2 py-1 w-20 h-10">New lot</span>
      <img className="w-60 h-60 xs:w-64 xs:h-64 sm:w-80 sm:h-80 object-contain p-10" src={product.image} alt={product.name} />
      <span className='flex flex-row mb-5'>
        <h2 className="text-black text-lg xs:text-base sm:text-xl mr-2 xs:mr-1 ">{product.name} - </h2>
        <p className="text-gray-600 font-bold text-lg xs:text-base sm:text-xl">${product.price.toFixed(2)}</p>
      </span>
      </Link>
    </motion.div>
  );
};

export default SliderCard;
