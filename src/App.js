import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Alastair from './components/alastair';
import TOC from './components/toc';
import Bibliography from './components/bibliography';
import Sphinx from './components/collections/sphinx';
import Zauberflote from './components/collections/zauberflote';
import Usher from './components/collections/usher';
import Tosca from './components/collections/tosca';
import Valley from './components/collections/valley';
import Storck from './components/collections/storck';
import Sekeltons from './components/collections/skeletons';
import Salome from './components/collections/Salome';
import Rache from './components/collections/rache';
import Portraits from './components/collections/portraits';
import Pieces from './components/collections/pieces';
import Peau from './components/collections/peau';
import Paques from './components/collections/paques';
import Pandora from './components/collections/pandora';
import Other from './components/collections/other';
import Liaisons from './components/collections/liaisons';
import Lescaut from './components/collections/lescaut';
import Imaginary from './components/collections/Imaginary';
import Happy from './components/collections/happy';
import Gods from './components/collections/gods';
import Flashe from './components/collections/flashe';
import Erdgeist from './components/collections/erdgeist';
import Dreadful from './components/collections/dreadful';
import Designs from './components/collections/designs';
import Dandy from './components/collections/dandy';
import Cirque from './components/collections/cirque';
import Carmen from './components/collections/carmen';
import Caressepoems from './components/collections/caressepoems';
import Camelias from './components/collections/camelias';
import Bowboy from './components/collections/bowboy';
import Anthony  from './components/collections/anthony';


function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Alastair/>}/>
      <Route path='/toc' element={<TOC/>} />
      <Route path='/bibilio' element={<Bibliography/>} />
      <Route path='/sphinx' element={<Sphinx />} />
      <Route path='/zauberflote' element={<Zauberflote/>}  />
      <Route path='/usher' element={<Usher/>} />
      <Route path='/Tosca' element={<Tosca/>} />
      <Route path='/Valley' element={<Valley/>} />
      <Route path='/Storck' element={<Storck/>} />
      <Route path='/Skeleton' element={<Sekeltons/>} />
      <Route path='/salome' element={<Salome/>} />
      <Route path='/Rache' element={<Rache/>} />
      <Route path='/Portraits' element={<Portraits/>} />
      <Route path='/Pieces' element={<Pieces/>} />
      <Route path='/Peau' element={<Peau/>} />
      <Route path='/paques' element={<Paques/>} />
      <Route path='/Pandora' element={<Pandora/>} />
      <Route path='/Other' element={<Other/>} />
      <Route path='/Liaisons' element={<Liaisons/>} />
      <Route path='/Lescaut' element={<Lescaut/>} />
      <Route path='/Imaginary' element={<Imaginary/>} />
      <Route path='/happy' element={<Happy/>} /> 
      <Route path='/gods' element={<Gods/>} />
      <Route path='/Flash' element={<Flashe/>} />
      <Route path='/Erdgeist' element={<Erdgeist/>} />
      <Route path='/Dreadful' element={<Dreadful/>} />
      <Route path='/Designs' element={<Designs/>} />
      <Route path='/Dandy' element={<Dandy/>} />
      <Route path='/Cirque' element={<Cirque/>} />
      <Route path='/Carmen' element={<Carmen/>} />
      <Route path='/Caressepoems' element={<Caressepoems/>} />
      <Route path='/Camelias' element={<Camelias/>}/>
      <Route path='/bowboy' element={<Bowboy/>} />
      <Route path="/anthony" element={<Anthony/>} />
      </Routes>
    </Router>
    );
}

export default App;
