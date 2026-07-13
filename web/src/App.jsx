import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Partners from './pages/Partners.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import ServicePage from './pages/Service.jsx';
import { CEP, CDP, PA, BI, ATTR } from './data/services.js';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/services/cep" element={<ServicePage cfg={CEP} />} />
      <Route path="/services/cdp" element={<ServicePage cfg={CDP} />} />
      <Route path="/services/pa" element={<ServicePage cfg={PA} />} />
      <Route path="/services/bi" element={<ServicePage cfg={BI} />} />
      <Route path="/services/attribution" element={<ServicePage cfg={ATTR} />} />
    </Routes>
  );
}
