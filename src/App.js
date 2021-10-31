import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#353535";  
      document.body.style.color = "white";  // #dadce0
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="TakhtiUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-4">
      <TextForm mode={mode} heading="Enter Some Text:"/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
