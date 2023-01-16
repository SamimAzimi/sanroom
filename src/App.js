import './styles/app.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Contact from './components/Contactus'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path='/contact' element={<Contact />} />
          {/* 
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
