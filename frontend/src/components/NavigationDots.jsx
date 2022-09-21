import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
