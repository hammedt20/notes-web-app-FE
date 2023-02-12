import * as React from 'react';
import './NoteCard.css'
import { IoShareOutline, IoTrashOutline } from 'react-icons/io5'

// export interface IAppProps {
// }

export function NoteCard () {
  return (
    <div className='note-card'>
      <h2>React Notes</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore fuga mollitia expedita, non, molestiae cupiditate eligendi sit quis iure odio omnis modi amet earum. Provident voluptatum consequuntur quod dolores libero!</p>
      <div className='note-card-icon'>
        <IoShareOutline />
        <IoTrashOutline />
      </div>
    </div>
  );
}
