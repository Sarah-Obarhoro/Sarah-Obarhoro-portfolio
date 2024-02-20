import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from '../src/components/About'
import Proficiency from './components/Proficiency';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/proficiency" element={<Proficiency />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App
