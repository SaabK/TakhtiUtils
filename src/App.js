import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, symbolID, directory) => {
    setAlert({
      msg: message,
      type: type,
      symbolID: symbolID,
      directory: directory
    })

    setTimeout(() => {
      setAlert(null);
    }, 2100);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(21 25 30)";  
      document.body.style.color = "white";  // #dadce0
      showAlert("Dark Mode has been Enabled", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <Router>
      <Navbar title="TakhtiUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
        <Route exact path="/About">
          <About mode={mode}/>
        </Route>
        <Route exact path="/TakhtiUtils/" >
          <TextForm mode={mode} showAlert={showAlert} heading="Try TakhtiUtils - Word Counter, Change Case, Remove Extra Spaces"/>
        </Route>
      </Switch>
      {/* <TextForm mode={mode} showAlert={showAlert} heading="Enter Some Text:"/> */}
    </Router>
  );
}

export default App;
