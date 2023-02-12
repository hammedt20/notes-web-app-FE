import { useState } from 'react';
import { Routes } from 'react-router';
import { Route, Navigate } from 'react-router-dom';
import { routerType } from '../../types/router.types';
import PagesData from './PagesData';


export default function Router () {
  const [loggedIn, setLoggedIn] = useState<Boolean>(true);

    const pageRoutes = PagesData.map(({ path, title, element, requiresAuth }: routerType) => {
      if(requiresAuth){
        return <Route key={title} path={`/${path}`} element={loggedIn? element: <Navigate to="/login"/> } />
      }

      return <Route key={title} path={`/${path}`} element={element} />
    });
      
  return (
    <Routes>
      {pageRoutes}
    </Routes>
  );
}
