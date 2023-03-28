import React from 'react';
// import about data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const About = () => {
  // destructure about data
  const { subtitle1, subtitle2,btnText, btnIcon } = aboutData;
  return (
    <section className='lg:py-16 xl:pb-[160px] bg-pink-300'>
      <div className='container mx-aut' id='About'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'> 
          {/* numbers */}
            <div className='ml-28 flex lg:flex-row flex-1 bg-about bg-contain bg-no-repeat h-96'>

            </div>

          {/* text */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 h-full xl:mt-48'
          >
            <div className='flex flex-col items-center'>
              <div className='max-w-[530px] text-grey'>
                <p className='mb-6'>{subtitle1}</p>
                <p className='mb-9'>{subtitle2}<a href="tel:+31627343006">+31627343006</a></p>
                <a href="https://www.instagram.com/tattoo_alice/" target="_blank" rel="noopener noreferrer">
                <button className='btn btn-lg btn-link'>
                  {btnText}
                  <div className='text-xl'>{btnIcon}</div>
                </button>
                </a>
              </div>                                        
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
