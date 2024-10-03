import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Background from '../assets/background.svg';
import ProductImg from '../assets/product.png';
import { Link } from 'react-router-dom';
const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-full min-h-screen overflow-hidden">
      <img src={Background} alt="background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 flex flex-col top-16 lg:flex-row justify-between items-center h-full px-4 lg:px-0 py-8 lg:py-0">
        <div className="w-full lg:w-[60%] max-w-lg mx-auto lg:ml-auto lg:mr-16 text-center lg:text-right lg:self-center relative lg:mb-0">
          <motion.h3
            className="text-xl xs:text-2xl lg:text-4xl text-blue-900"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }} 
          >
            BEST PRICE
          </motion.h3>
          <motion.h1
            className="text-3xl xs:text-4xl lg:text-6xl font-bold text-blue-900"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }} 
          >
            Agate Phone Grip
          </motion.h1>
          <motion.p
            className="text-sm xs:text-base lg:text-lg text-gray-600 mt-4 mx-auto lg:ml-auto lg:mr-0 max-w-md"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.1 }} 
          >
            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color.
          </motion.p>
          <div className='flex justify-center lg:justify-end mt-4 items-center'>
            <motion.p
              className="text-lg xs:text-xl lg:text-2xl font-semibold text-sky-400 line-through mr-2"
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.4 }} 
            >
              $44.50
            </motion.p>
            <motion.p
              className="text-2xl xs:text-3xl lg:text-5xl font-bold text-red-600 -mt-1"
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.6 }} 
            >
              $19.50
            </motion.p>
          </div>
          <motion.button
            className="rounded-lg text-xl xs:text-lg my-4 w-40 xs:w-40 h-12 xs:h-12 bg-[#70b9fb] text-white justify-center transition-all duration-300 ease-in-out hover:bg-[#5aa0e0] shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.8 }} 
          >
            <Link to="/productInfo/1">
            Buy Now
            </Link>
          </motion.button>
        </div>
        <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-start">
          <div className="relative w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] lg:w-[500px] lg:h-[500px]">
            <motion.div
              className="absolute inset-0 bg-slate-200 bg-opacity-20 rounded-full flex items-center justify-center"
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 2.0 }}
            >
              <motion.div
                className="absolute w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] lg:w-96 lg:h-96 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.1)]"
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 2.3 }} 
              >
                <motion.div
                  className="absolute w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] lg:w-64 lg:h-64 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.10)]"
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 2.6 }}
                >
                  <motion.img
                    src={ProductImg}
                    alt="product"
                    className="object-contain w-full h-full p-4 lg:p-8"
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 2.9 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
