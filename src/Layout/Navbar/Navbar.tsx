import * as React from 'react';
import './Navbar.css'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

// export interface IAppProps {
// }

export function Navbar () {
  return (
    <nav className='nav'>
      <Link className='nav-head' to={'/'}>Notes</Link>
      <input type='search' placeholder='Search your notes' />
      <div className="profile-buttons">
        <div className='profile'>
          
          <VscAccount size={24} />
          
          Hammed
        </div>
        <Link to={'/login'} className='profile-logout'>
          log out
        </Link>
      </div>
    </nav>
  );
}
