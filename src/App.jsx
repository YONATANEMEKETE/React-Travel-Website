import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Header from './components/Header';
import Hero from './components/Hero';
import Popular from './components/Popular';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Popular />
      <Explore />
      <Contact />
    </>
  );
}

export default App;
