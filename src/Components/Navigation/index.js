
import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';

const Navigation = () => (
    <nav className='db dt-l w-100 border-box pa3 ph5-l'>
      <Link
        className='link dim black b f6 f5-ns dib mr3'
        to={ROUTES.HOME}
      >
        MediaTrac
      </Link>
      <Link
        className='link dim gray f6 f5-ns dib mr3'
        to={ROUTES.HOME}
      >
        Home
      </Link>
      <Link
        className='link dim gray f6 f5-ns dib mr3'
        to={ROUTES.SEARCH}
      >
        Search
      </Link>
      <Link
        className='link dim gray f6 f5-ns dib mr3'
        to={ROUTES.FILM}
      >
        Films
      </Link>
    </nav>
);

export default Navigation;