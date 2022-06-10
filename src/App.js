import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:projectId" element={<ProjectDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
