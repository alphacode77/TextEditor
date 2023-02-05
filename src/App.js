import './App.css';
import Navbar from './component/Navbar';
import Form from './component/form';
import Alert from "./component/alert"
import { useState } from 'react';
import About from"./component/about";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  // Dark Mode
  const [mode, setMode] = useState("light")

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor ="grey";
      document.body.style.color ="white";
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("light Mode Enabled","success")
    }
  }

  // Alert

  const [alert, setAlert]=useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
<Router>
  <Navbar title="Text Editor"  mode={mode} toggleMode = {toggleMode} about="About"/>
  <Alert  alert={alert} />
  


    <Routes>
    <Route exact path="/" element={ <div className='container my-3' >
    <Form className="container" heading3="Try Text App - WordCounter, Character Counter, Remove Extra Space, Etc"  showAlert={showAlert}/>
          </div>
      } />
      <Route exact path="/about" element={<About mode={mode}/>}/>


    </Routes>

  </Router>
  
  
  
    </>
  );
}

export default App;
