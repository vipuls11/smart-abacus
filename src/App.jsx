import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Header from './components/header-footer/Header'
import MainHeader from './components/header-footer/MainHeader'
import Footer from './components/header-footer/Footer'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Cources from './components/Cources';
import { Achievement } from './components/Achievement';
import Pagenotfound from './Pagenotfound';
import Profile from './components/Profile';
import ForgetPassword from './Auth/ForgetPassword';



function App() {
 const location = useLocation();

  // All known valid routes
  const validPaths = ['/', '/about', '/courses', '/achievements', '/contact'];

  // If current path is NOT in validPaths, hide the footer
  const hideFooter = !validPaths.includes(location.pathname);
  return (
    <>

     <header>
        <Header/>
        <MainHeader/>
     </header>
     <main >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Cources />} />
        <Route path="/achievements" element={<Achievement/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
     </main>
        {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
   
    </>
  )
}

export default App
