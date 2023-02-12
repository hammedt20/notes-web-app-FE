import * as React from 'react';
import './Navbar.css'
import { VscAccount } from 'react-icons/vsc'

// export interface IAppProps {
// }

export function Navbar () {
  return (
    <nav className='nav'>
      <h1>Notes</h1>
      <input type='search' placeholder='Search your notes' />
      <div className='profile'>
        
            <VscAccount size={24} />
        
        Hammed
      </div>
    </nav>
  );
}
