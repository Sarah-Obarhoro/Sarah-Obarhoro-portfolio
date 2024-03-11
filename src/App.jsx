import './App.css';
import About from '../src/components/About';
import Proficiency from './components/Proficiency';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Proficiency />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

export default App
