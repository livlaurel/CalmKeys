import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App;