// src/components/ProductInfo.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { dummyData } from '../constants/dummyData';

const ProductInfo = () => {
  const { productId } = useParams();
  const product = dummyData.find(p => p.id === parseInt(productId));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const descriptionText = "Experience the beauty and energy of our handcrafted crystal phone grips. Each piece is unique, featuring natural variations in color and pattern. These grips not only add style to your device but also provide a comfortable and secure hold. Perfect for those who appreciate both aesthetics and functionality in their everyday accessories.";

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className='w-full max-w-4xl mx-auto p-6 h-[100vh] mt-20 mb-20 xs:mb-32 flex items-center justify-center'>
      <motion.div 
        className='flex flex-col md:flex-row gap-8'
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <div className='md:w-1/2 w-full'>
          <img 
            src={product.image} 
            alt={product.name} 
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='md:w-1/2 flex flex-col justify-between'>
          <div>
            <motion.h2 
              className='text-3xl font-semibold text-blue-900 mb-4 xs:text-2xl'
              variants={fadeInVariant}
            >
              {product.name}
            </motion.h2>
            <motion.p 
              className='text-xl font-bold text-red-600 mb-2 xs:text-2xl'
              variants={fadeInVariant}
            >
              ${product.price.toFixed(2)}
            </motion.p>
            <motion.p 
              className='text-gray-600 mb-6'
              variants={fadeInVariant}
            >
              {descriptionText}
            </motion.p>
          </div>
          <div className="flex items-center mb-4">
            <button 
              className="px-4 py-2 bg-gray-300 rounded" 
              onClick={() => handleQuantityChange(-1)} 
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="mx-4 text-xl">{quantity}</span>
            <button 
              className="px-4 py-2 bg-gray-300 rounded" 
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <motion.button 
            className="rounded-lg text-xl w-full h-12 bg-[#70b9fb] text-white justify-center transition-all duration-300 ease-in-out hover:bg-[#5aa0e0] shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            variants={fadeInVariant}
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductInfo;