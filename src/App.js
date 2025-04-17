import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import FAQ from './components/Faq';
import Reg from './components/Registration';
import { useState } from 'react';


function App() {
  const [showReg, setshowReg] = useState(true);
  const toggleReg = () => {
    setshowReg(prev => !prev);
  };
  return (
    <>
    <div className={showReg ? 'App-bg':'hidden'}>
      <Navbar/>
      <Home toggleReg={toggleReg}/>
      <About/>
      <Timeline/>
      <Sponsors/>
      <FAQ/>
      <Footer/>
    </div>
    <div className={showReg ? 'hidden':''}>
      <Reg toggleReg={toggleReg}/>
    </div>
    </>
  );
}

export default App;
