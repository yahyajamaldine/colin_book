import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Alastair from './components/alastair';
import TOC from './components/toc';
import Bibliography from './components/bibliography';

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Alastair/>}/>
      <Route path='/toc' element={<TOC/>} />
      <Route path='/toc/bibilio' element={<Bibliography/>} />
      </Routes>
    </Router>
    );
}

export default App;
