import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Front End Development',
    description: 'I love creative design',
    imgUrl: images.about01,
  },
  {
    title: 'MERN Stack Development',
    description: 'I love creative design',
    imgUrl: images.about03,
  },
  {
    title: 'UI/UX',
    description: 'I love creative design',
    imgUrl: images.about02,
  },
  {
    title: 'IOS Development',
    description: 'I love creative design',
    imgUrl: images.about03,
  },
];

const About = () => {
  return (
    <>
      {/* <div class='desc'>
        <h2 className='head-text'>
          My<span> Services</span>
        </h2>
      </div> */}

      <div className='app__profiles'>
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <div className='about-des'>
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          </motion.div>
        ))} */}
      </div>
    </>
  );
};

export default About;
