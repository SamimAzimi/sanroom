import './styles/app.css'
import Header from './components/Header'
import Main from './components/Main'

import Contact from './components/Contactus'
import Products from './components/Catagory'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
