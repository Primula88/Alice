import React, { useState } from 'react';
// import data
import { FullgalleryData } from '../data';
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const slides = FullgalleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const FullGallerySection = () => {
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { title, images } = FullgalleryData;
  return (
    <section className='bg-[#F9F9F9] section relative mt-[40px] lg:mt-0' id='FullGallery'>
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='mb-2 lg:mb-20'
      >
        <PhotoAlbum
          layout='rows'
          photos={images}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
    </section>
  );
};

export default FullGallerySection;
