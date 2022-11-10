import { useState } from 'react'
import Header from './components/Header';
import React from 'react'
import Navigation from './components/Navigation'
// import Project from './components/Project';
// import Footer from './components/Footer';
import About from './components/pages/About';

// logic to render different pages

function App() {
// CREATE VARIABLE TO HANDLE PAGES AND STATE CHANGES
    const [currentPage, setCurrentPage] = useState('About');

    // FUNCTION TO RENDER THE PAGE 
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          if (currentPage === 'Resume') {
            return <Resume />;
          }
          return <Contact />;
        };
        
    const handlePageChange = (page) => setCurrentPage(page);

return (
    <nav className="nav">
        <Header  title="Rod Bennett Portfolio"/>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Portfolio  currentPage={currentPage} handlePageChange={handlePageChange}/>

        {renderPage()}
    </nav>
)
}

export default App;
