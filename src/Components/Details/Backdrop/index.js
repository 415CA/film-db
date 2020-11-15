import React from 'react';
import { image } from '../../../API';

const Backdrop = ({ backdrop, title }) => {
  return (
    <div>
      <div 
        className='vh-100 dt w-100 tc bg-dark-gray white cover center' 
        style={{ 
          backgroundImage: `url(${image}${backdrop})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' 
        }}>
        <div className='dtc v-mid helvetica'>
          <h3 className='f2 f1-m f-headline-l measure-narrow lh-title mv0 center'>
            <span className='bg-black-90 f1 f-headline-l fw1 i white pa3 mw1'>{title}</span>
          </h3>
        </div>
        </div>
    </div>
  );
};

export default Backdrop;
