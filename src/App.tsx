import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NotesContextProvider } from './Context/NotesContext';
import Router from './Pages/Routes/Router';



function App() {
  return (
   <NotesContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
   </NotesContextProvider>
  );
}

export default App;
