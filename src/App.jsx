import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar';


function App() {
  return (
    <>
      <div className='App'></div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"/>
            <Route path="/cart"/>
          </Routes>
        </Router>
    </>
  )
}

export default App
