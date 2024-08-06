import React from 'react';
import Header from './components/Header/header';
import MyWorks from './components/MyWorks/myWorks';
import Footer from './components/Footer/footer';
import Competences from './components/Competences/competences';
import Contact from './components/Contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="competences-section">
        <Competences />
      </div>
      <div id="myWorks-section">
        <MyWorks />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
