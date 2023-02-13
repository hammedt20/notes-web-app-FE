import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(Notes?.newNote)
      navigate('/');
    // if(Notes?.newNote.noteTitle !== null && Notes?.newNote.noteDescription !== null){
    // }else{
    //   alert('fill in the blanks')
    // }
  }

  return (
    <div  className='add-new-note'>
      <Navbar />
      <form className='note-form' onSubmit={(e)=>{handleSubmit(e)}}>
        <input   
          type='text'
          name='noteTitle'
          placeholder='Type your note title here'
          onChange={Notes?.handleInputChange}
          value = {Notes?.newNote.noteTitle}
          required
        />
        <textarea 
          name= 'noteDescription'
          onChange={Notes?.handleTextAreaChange}
          value = {Notes?.newNote.noteDescription}
          required
        />
        <Button title={title} />
      </form>
    </div>
  );
}
