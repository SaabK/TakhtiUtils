import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TakhtiUtils"/>
    <div className="container my-4">
      <TextForm heading="Enter Some Text:"/>
    </div>
    
    </>
  );
}

export default App;
