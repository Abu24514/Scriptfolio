import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import Preview from './pages/Preview';
import Login from './pages/Login';
import NotFound404 from './pages/NotFound404';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />

    
  {/* Auth */}
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Login />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>

    </>
  )
}

export default App;