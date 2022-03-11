import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import { Link } from 'react-router-dom';
import '../index.css';

export default function Salome(){

    return(
       <div className='container'>
       <h1>Salome, Oscar Wilde</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'></p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'></p>
            </div>
       </div>
       <div class="description">
       <h2>by Oscar Wilde</h2>
            <h2>Published in 1893</h2>
            <h2>Alastair’s drawings published in 1925</h2>
            
            <blockquote>
            <p>Alastair executed several sets of drawings to illustrate Oscar Wilde’s play, originally written in French for Sarah Bernhardt, who was prevented from playing it in London by the Lord Chamberlain, the theater censor.</p>
            <footer>Victor Arwas, <Link to= '?bibliography#decadence'>Alastair: Illustrator of Decadence</Link></footer>
            </blockquote>
            
            <p>Two sets of Salome drawings are available to us: the first is from the book itself, published by G Crès, and the second was reproduced in Fifty Drawings by Alastair. There is also a lone sketch of Herodias, and another of Alastair’s friend, Luisa Casati, in the role of Salome.</p>
       </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          <li>1</li>
               <ul>
                   <li>&Salome and a Guard</li>
                   <li>2</li>
                   <li>3</li>
                   <li>4</li>
                   <li>Herodias</li>
                   <li>6</li>
                   <li>7</li>
                   <li>8</li>
                   <li>The death of Salome</li>
               </ul>
               <li>2</li>
               <ul>
                   <li>Salome and a guard</li>
                   <li>Salome and Jokanaan</li>
                   <li>Herodias</li>
                   <li>Herod</li>
                   <li>Herodias – «Ma fille a bien fait»","English: Herodias – «My daughter has done well»</li>
                   <li>Salome</li>
                   <li>Salome</li>
                   <li>The Death of Salome</li>
               </ul>
               <li>No set</li>
               <ul>
                   <li>La Dame Herodias
                   </li>
                     <li>
                        Drawing of Luisa Casati as Salome
                     </li>
               </ul>
          </ul>
       </div>
      </div>
    )

}