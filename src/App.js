import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import Profile from './components/profile';
import Error404 from './components/error404';
import EditTodo from './components/editTodo';

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/ReactTodo' exact element={<Home />}/>
        <Route path='*' element={<Error404 />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/todo/:id/edit' element={<EditTodo />}/>
      </Routes>
    </Router>
  );
}

export default App;
