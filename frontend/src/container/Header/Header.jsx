import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <div class='head-text' style={{ marginLeft: 30 }}>
            <p className='p-text f-text'>
              Hello, I am <span>👋</span>
            </p>
            <h1 className='head-text'>Bright</h1>

            <p className='p-text sub'>I'm a Front End Developer</p>
            <p className='p-text sub'>ReactJs developer and avid learner!</p>
          </div>
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
          />
        </div>
      </div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[images.flutter, images.react, images.redux].map((circle, index) => (
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='profile_bg' />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
