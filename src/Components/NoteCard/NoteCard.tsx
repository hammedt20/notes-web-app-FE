import * as React from 'react';
import './NoteCard.css'
import { IoShareOutline, IoTrashOutline } from 'react-icons/io5'
import { useContext } from 'react';
import { NotesContext } from '../../Context/NotesContext';

// export interface IAppProps {
// }

export function NoteCard () {
  const Notes = useContext(NotesContext)
  return (
    <div className='note-card'>
      <h2>{Notes?.newNote.noteTitle}</h2>
      <p>{Notes?.newNote.noteDescription}</p>
      <div className='note-card-icon'>
        <IoShareOutline />
        <IoTrashOutline onClick={Notes?.handleRefresh}/>
      </div>
    </div>
  );
}
