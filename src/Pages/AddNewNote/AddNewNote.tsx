import * as React from 'react';
import { useContext } from 'react';
import { Button } from '../../Components/Button/Button';
import { NotesContext } from '../../Context/NotesContext';
import { Navbar } from '../../Layout/Navbar/Navbar';
import './AddNewNote.css'

// export interface IAppProps {
// }

const title: string = 'Save Note';

export function AddNewNote () {
  const Notes = useContext(NotesContext);
  console.log(Notes?.newNote);

  return (
    <div  className='add-new-note'>
      <Navbar />
      <form className='note-form'>
        <input   
          type='text'
          name='noteTitle'
          placeholder='Type your note title here'
          onChange={Notes?.handleInputChange}
        />
        <textarea 
          name= 'noteDescription'
          onChange={Notes?.handleTextAreaChange}
        />
        <Button title={title} />
      </form>
    </div>
  );
}
