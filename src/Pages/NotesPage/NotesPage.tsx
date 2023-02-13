import { Link, Route, Routes } from 'react-router-dom';
import { AddNewNote } from '../AddNewNote/AddNewNote';
// import { Button } from '../../Components/Button/Button';
import { NoteCard } from '../../Components/NoteCard/NoteCard';
import { Navbar } from '../../Layout/Navbar/Navbar';
import { BsPlusLg } from 'react-icons/bs'
import './NotesPage.css'
import { NotesContext } from '../../Context/NotesContext';
import { useContext } from 'react';

// export interface IAppProps {
// }

function AllNotes (){
  const Notes = useContext(NotesContext);
  return (
    <div className='notes-page'>
      <Navbar />
      {
        (Notes?.newNote.noteDescription && Notes?.newNote.noteTitle) ?
          <div className='note-cards'>
            <NoteCard />
          </div> :
            <div className='note-error'>
              You currently have no new note click the '+' button to add a new note
            </div>
      }
      <div className='note-button-wrapper'>
        <Link to={'/add'} className='note-button'>
            <BsPlusLg size={24}/>
        </Link>
      </div>
    </div>
  ); 
}

export function NotesPage () {
  return(
    <Routes>
      <Route path="" element={<AllNotes/>}/>
      <Route path="add" element={<AddNewNote/>}/>
    </Routes>
  )
}
