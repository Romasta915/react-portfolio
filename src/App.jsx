import './App.scss';

import Layot from './components/Layot/Layot'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layot />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
