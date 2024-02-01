import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './notes/Header'
import Archives from './archive/Archives';
import DeleteNote from './deleteNotes/DeleteNote'
import Container from './notes/Container';
const Home = () => {
  return (
    <>



      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Container/>}></Route>
          <Route path="/archive" element={<Archives />}></Route>
          <Route path="/delete" element={<DeleteNote />}></Route>


        </Routes>
      </Router>
    </>
  )
}

export default Home