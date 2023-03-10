import React from 'react';
// import contact data
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
import ContactImage from '../img/footer/footer.png'

const Contact = () => {
  // destructure contact data
  const { title, info } = contactData;
  return (
    <section className='section' id='Contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 m-auto'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px] m-auto'>{title}</h2>
            <br></br>
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {info.map((item, index) => {
                // destructure item
                const { title, address, phone } = item;
                return (
                  // item
                  <div key={index}>
                    {/* title */}
                    <div className='font-primary uppercase font-medium text-xl mb-3'>
                      {title}
                    </div>
                    {/* address, phone & email */}
                    <div className='flex flex-col gap-y-3 mb-8'>
                      {/* address */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{address.icon}</div>
                        <div className='font-medium'>{address.name}</div>
                      </div>
                      {/* phone */}
                      <div className='flex items-center gap-[10px]'>
                        <div>{phone.icon}</div>
                        <div className='font-medium'>{phone.number}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className='flex flex-col xl:flex-row items-end m-auto'>
              <img src={ContactImage} className='flex h-56' alt="Contact" /> 
              </div> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
