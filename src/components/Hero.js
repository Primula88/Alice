import React from 'react';

import { motion } from 'framer-motion';


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  // destructure hero data
  //const { title, subtitle } = heroData;
  return (
<section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'
      >


      </motion.div>
    </section>
  );
};

export default Hero;
