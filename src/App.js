import React from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navBar';
import Learn from './pages/learn';
import Practice from './pages/practice';
import PracticeNew from './pages/practiceNew';
import Favorites from './pages/favorites';
import NotFound from './pages/app/notFound';
import './App.css';
import About from './pages/app/about';

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/login' ||
        pathname === '/register' ||
        pathname === '/not-found' || <NavBar />}
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<PracticeNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" exact element={<Navigate to="/learn" />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
};

export default App;
