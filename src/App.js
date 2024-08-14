import './App.css';
import NavBar from './components/navbar';
import Home from './components/home'
import SocialLinks from './components/SocialLinks';
import AboutUs from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (

    <div>
  <NavBar />
  <Home />
  <SocialLinks />
  <AboutUs />
  <Portfolio />
  </div>
    
  );
}

export default App;
