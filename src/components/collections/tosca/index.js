import { Link } from 'react-router-dom';
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Tosca(){

    return(
       <div className='container'>
       <h1>La Tosca, Victorien Sardou</h1>
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
       <h2>by Victorien Sardou</h2>
<h2>Published in 1887</h2>
<h2>Alastair’s drawings published in 1925</h2>

<blockquote>
<p>The highly melodramatic tale of Floria Tosca, a celebrated singer, and her lover, the painter Cavaradossi, whose aid to Angelotti, an escaped political prisoner, allows them to fall into the hands of Scarpia, the Chief of Police. All the protagonists die in the end.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'><cite>Alastair: Illustrator of Decadence</cite></a></footer>
</blockquote>

<blockquote>
<p>The drawings for “La Tosca,” limpidly depraved and polished</p>
<footer><Link to= '?appendix=ix#advertreview'>Advertisement for Fifty Drawings by Alastair</Link></footer>
</blockquote> 
       </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>Tosca and Cavaradossi</li>
              <li>Tosca and Scarpia</li>
              <li>The Torture of Cavaradossi</li>
          </ul>
       </div>
      </div>
    )

}