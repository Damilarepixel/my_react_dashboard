import React from 'react'

//COMPONENTS
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';



//CSS
import './App.css';





function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Dashboard />
    </div>
  );
}

export default App;
