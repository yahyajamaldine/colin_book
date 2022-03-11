import { Link } from 'react-router-dom';
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Usher(){

    return(
       <div className='container'>
       <h1>The Fall of the House of Usher,Edgar Allen Poe</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'></p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>the silent tarn a pestilent and mystic vapor,
                 dull, sluggish, faintly discernible, and leaden-hued.</p>
            </div>
       </div>
       <div class="description">
       <h2>by Edgar Allen Poe</h2>
            <h2>Published in 1839</h2>
            <h2>Alastair’s drawings published in 1928</h2>
            
            <blockquote>
            <p>Alastair considered his usual fine-line inked technique too clear-cut for this heavily atmospheric short story, so he illustrated it with soft lead pencil drawings, carefully smudging and blurring the lines to produce grays and blacks, adding the occasional touch of red pencil to heighten some details.</p>
            <footer>Victor Arwas, <Link to= '?bibliography#decadence'>Alastair: Illustrator of Decadence</Link></footer>
            </blockquote>  
       </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>That Which Passest</li>
              <li>The Deadly House</li>
              <li>The Last Exit"</li>
              <li>Brother and Siste</li>
              <li>The Buried Alive</li>
          </ul>
       </div>
      </div>
    )

}