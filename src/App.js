import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/Not-Found';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FABComponent from './components/fab/fab';
import FooterComponent from './components/footer/footer';

function App() {
  return (
    <>
      <div className="wrapper">
        <FABComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="casinokiller/" element={<Home />} />
              <Route
                path="casinokiller/instructions"
                element={<Instructions />}
              />
              <Route path="casinokiller/contact" element={<Contact />} />
              <Route path="casinokiller/privacy" element={<Privacy />} />
              <Route path="casinokiller/terms" element={<Terms />} />
              <Route path="casinokiller/*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
