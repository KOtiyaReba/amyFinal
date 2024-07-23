import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from'./Header';
//Wrong imports from the AddBook to Login, you where trying to import Add Books to Signup from the components folder which doesn't exist 
import AddBook from './AddBook';
import Home from './Home';
import Books from './Book/Books';
// import About from './components/About';
import BookDetail from './Book/BookDetail';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/books' element={<Books />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/books/:id' element={<BookDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
