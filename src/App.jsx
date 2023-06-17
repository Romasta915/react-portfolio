import './App.scss';

import Layot from './components/Layot/Layot'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layot />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
