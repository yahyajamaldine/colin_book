import { Link } from 'react-router-dom';
import  firstimg from "./images/firstimg.png";
import secondimg from "./images/secondimg.png";
import '../index.css';

export default function Zauberflote(){
    return(
        
       <div className='container'>
       <h1>Die Zauberflöte ,Wolfgang Mozart</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>She is here clearly seen as a moon-goddess
                     ...</p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>A earlier draft of, the Queen of the Night</p>
            </div>
       </div>
       <div class="description">
       <blockquote>
        <p>She is here clearly seen as a moon-goddess, standing on a crescent and with another crescent in her elaborate hair-do which, with the multiple fans of her dress, houses the starry firmament.</p>
        <footer>Victor Arwas, <Link to = '?bibliography#decadence'><cite>Alastair: Illustrator of Decadence</cite></Link></footer>
        </blockquote> 
       </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul class="dictionary_list">
              <li>The Queen of the Night</li>
              <li>The Queen of the Night"</li>
              <li>The three Ladies</li>
          </ul>
       </div>
      </div>
    )
    };