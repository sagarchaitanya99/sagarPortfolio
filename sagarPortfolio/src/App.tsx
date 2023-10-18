
import './App.css';
import Portfolio  from './Components/Portfolio';
import Navbar from './Navbar';
import ContactForm from './contact/Contact';


import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Portfolio/>}/>
      <Route path="/contactform" element={<ContactForm/>}/>
    
      </Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;


