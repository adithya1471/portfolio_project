import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Navbar from './components/Navbar';
import Themes from './components/Themes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Themes />
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
