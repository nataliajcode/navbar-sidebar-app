import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h1>WELCOME.</h1> {/* Denna text påverkas av .content i CSS */}
          <h2>This is my React App.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;