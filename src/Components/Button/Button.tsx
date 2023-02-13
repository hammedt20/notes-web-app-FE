import * as React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

// export interface IAppProps {
// }

export function Button ({ title }: { title: string}) {
  return (
      <button className='login-button' type='submit'>
        {title}
      </button>
    // <Link to = {'/'} className='login-button'>
    //   {title}
    // </Link>
  );
}
