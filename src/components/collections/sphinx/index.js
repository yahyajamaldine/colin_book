import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import cover from './images/cover.png';
import endpaper1 from './images/endpaper1.png';

export default function Sphinx(){
    return(
       <div className='container'>
        <h1>The Sphinx , Oscar Wilde</h1>
        <div className='GalleryContainer'>
             <div className='MediaContainer'>
                <img src={endpaper1} alt='' />
                 <p className='image_desc'></p>
             </div>

             <div className='MediaContainer'>
                <img src={cover} alt=''/>
                <p className='image_desc'></p>
             </div>
        </div>
        <div class="description">
            <h2>By Oscar Wilde</h2>
            <h2>Published in 1894</h2>
            <h2>Alastair’s drawings published in 1920</h2>
            
            <blockquote className="alastairquote">
            <p>Moreover, the Sphinx (!) by Oscar Wilde was ordered to anything but favorable financial conditions. But his advertising is elaborate - there is a huge edition going to be printed for all countries. And then I agreed immediately - because Lane behaved himself well anyway.</p>
            <footer>Alastair, <Link to="/bibliography#kunst">15 February 1913 letter to Hans von Veltheim</Link></footer>
            </blockquote>
            
            <blockquote>
            <p>An invocation to the Sphinx, the ‘exquisite grotesque! half woman and half animal!’, it brought in a multiplicity of Egyptian echoes in its heightened language.</p>
            <footer>Victor Arwas, <Link to='/bibliography#decadence'><cite>Alastair: Illustrator of Decadence</cite></Link></footer>
            </blockquote>
        </div>
        <div className="dictionary">
          <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>Cover</li>
              <li>Ashtaroth</li>
              <li>Isis and Osiris</li>
              <li>Cleopatra</li>
              <li>Antinous</li>
              <li>Swarthy Ethiop</li>
              <li>Nereid</li>
              <li>Tyrian God</li>
              <li>Apis</li>
              <li>Pasht</li>
              <li>Crucifixus</li>
              <li>Endpaper 1</li>
              <li>Endpaper 2</li>
              <li>&A</li>
              <li>&G</li>
              <li>&H</li>
              <li>&I</li>
              <li>&L</li>
              <li>&O</li>
              <li>&T</li>
              <li>&W</li>
          </ul>
        </div>
       </div>
    )
}


