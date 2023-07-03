import React from 'react';
import Header from "./components/global/Header.jsx";
import Footer from './components/global/Footer.jsx';
import Cards from './components/Cards.jsx';
import Collections from './components/Collections.jsx';
import Accordion from './components/Accordion.jsx';

function App() {
  return (
       <>
      <Header />
      <main className="container">
        <Cards/>
        <Collections/>
        <Accordion/>
      </main>
      <Footer/>
      </>
  );
}

export default App;
