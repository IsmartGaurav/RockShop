import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-black">

      <div className="relative z-10 w-full max-w-4xl p-6 mt-20 text-center text-white">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Pop Rock Crystal Shop! We are passionate about providing unique phone accessories, crystals, jewelry, and more. Our goal is to bring beauty and joy to your everyday life through our carefully curated selection of products.
        </motion.p>
        
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At Pop Rock Crystal Shop, our mission is to provide high-quality, stylish, and affordable accessories that allow you to express yourself and embrace your unique style.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Values
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          We believe in sustainability, craftsmanship, and the importance of creating meaningful connections with our customers. We are committed to sourcing our products ethically and promoting a positive impact on our community.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Founded in [Year], Pop Rock Crystal Shop started as a passion project, driven by our love for unique crystals and accessories. Over the years, we have grown into a beloved destination for crystal enthusiasts and fashion lovers alike.
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default AboutUs;
