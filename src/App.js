import React, { useEffect } from 'react';
import './App.css';
import './phoneApp.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Social from './components/Socials';
import Request from './components/Request';

function App() {
    function Disableall() { useEffect(() => {
        const handleKeyDown = (e) => {
          // Disable Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U, F12
          if (
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
            e.key === 'F12' ||
            (e.ctrlKey && e.key === 'U')
          ) {
            e.preventDefault();
          }
        };
    
        const handleContextMenu = (e) => {
          e.preventDefault(); // Disable right-click
        };
    
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('contextmenu', handleContextMenu);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('contextmenu', handleContextMenu);
        };
      }, []);}
    Disableall()
    return (
        <>
        <div className="App">
            <Social />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
        <div className='Toosmall'>
            <Request />
        </div>
        </>
    );
}

export default App;
