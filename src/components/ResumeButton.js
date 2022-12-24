import React from 'react';
import ErikaResume from './assets/Erika.Zibelnik.Resume.pdf';

const ResumeButton = () => {

  return (
    <button className='downloadBtn'>
      <a className='downloadBtn' href={ErikaResume} download>
        Download Resume
      </a>
    </button>
  )
}

export default ResumeButton;





