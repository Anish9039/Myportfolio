import './App.css';
import NavBar from './components/navbar';
import Home from './components/home'
import SocialLinks from './components/SocialLinks';
import AboutUs from './components/About';
import Portfolio from './components/Portfolio';
import Experince from './components/Experince';
import Contact from './components/Contact';

function App() {
  return (

    <div>
  <NavBar />
  <Home />
  <SocialLinks />
  <AboutUs />
  <Portfolio />
  <Experince />
  <Contact />
  </div>
    
  );
}

export default App;
