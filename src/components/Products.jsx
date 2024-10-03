// src/components/Products.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Product from './Product';
import { dummyData } from '../constants/dummyData';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const Products = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);

    const productContainerRef = useRef(null);
    const isInView = useInView(productContainerRef, { once: true });

    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProducts(prevVisible => Math.min(prevVisible + 4, dummyData.length));
            setIsLoading(false);
        }, 1000);
    };

    const showLess = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProducts(prevVisible => Math.max(prevVisible - 4, 8));
            setIsLoading(false);
        }, 1000);
    };

    const canShowLess = visibleProducts > 8;

    return (
        <div className='container mx-auto px-4 py-8 text-[#31546d]'>
            <h1 className='text-5xl font-bold text-center mb-8 xs:text-3xl'>All Products</h1>
            <div className='mb-10 flex flex-row xs:flex-col justify-between xs:text-center xs:mb-5'>
                <div className='relative xs:mb-5 flex xs:justify-center'>
                    <label className='font-semibold text-xl xs:text-lg text-zinc-600'>Filter :</label>
                    <div onClick={() => setFilterOpen(!filterOpen)} className='font-bold text-xl rounded-lg mx-2 w-44 h-8 px-5 cursor-pointer bg-gray-100'>
                        ALL PRODUCT
                    </div>
                    <AnimatePresence>
                        {filterOpen && (
                            <motion.div
                                className="absolute top-10 left-14 xs:left-20 w-44 bg-white shadow-lg z-10 rounded-md overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                            >
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">OPAL PHONE GRIP</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">JADE PHONE GRIP</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">CITRINE PHONE GRIP</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">ONYX PHONE GRIP</motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className='relative flex xs:justify-center'>
                    <label className='font-semibold text-xl xs:text-lg text-zinc-600'>Sort by :</label>
                    <div onClick={() => setSortOpen(!sortOpen)} className='font-bold px-5 mx-2 text-xl cursor-pointer bg-gray-100 xs:w-[170px] xs:mx-1 rounded-lg'>
                        BEST SELLING
                    </div>
                    <AnimatePresence>
                        {sortOpen && (
                            <motion.div
                                className="absolute top-10 left-20 xs:left-24 xs:top-8 w-36 bg-white shadow-lg z-10 rounded-md overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                            >
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">10% OFF</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">20% OFF</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">30% OFF</motion.div>
                                <motion.div className="p-2 hover:bg-gray-200 cursor-pointer">50% OFF</motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <motion.div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                ref={productContainerRef} 
            >
                {dummyData.slice(0, visibleProducts).map((product) => (
                    <motion.div key={product.id} variants={item}>
                        <Link to={`/productInfo/${product.id}`}>
                            <Product
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            <div className='flex justify-center mt-10'>
                <button
                    className='border border-blue-600 text-blue-500 rounded-xl font-bold py-2 px-4 transition-all duration-300 ease-in-out hover:bg-[#70b9fb] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed w-40 text-lg'
                    onClick={canShowLess ? showLess : loadMore}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : canShowLess ? 'View Less' : 'View All'}
                </button>
            </div>
        </div>
    );
};

export default Products;
