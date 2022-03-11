import { useState } from "react";
import { Link } from "react-router-dom";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';



export default function Camelias(){
    return(
       <div className='container'>
       <h1>Carmen, Prosper Mérimée</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                This illustration was also titled “Camille” in a <Link to = '?bibliography#weyhe'>Weyhe Gallery exhibition</Link> in 1925.
               </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               An earlier version of <Link to = '?bibliography#fortythree'><cite>Marguerite Gantier</cite></Link>
               </p>
            </div>
       </div>
        <div class="description">
        <h2>English: The Lady of the Camellias</h2>
<h2>by Alexandre Dumas</h2>
<h2>Published in 1848</h2>
<h2>Alastair’s drawings published in 1925</h2>

<blockquote>
<p>the designs for “La Dame Aux Camélias,” whose delicacy is conceived by Alastair as that of the pathetic victim of harassing fatality</p>
<footer><a href = '?appendix=ix#advertreview'>Advertisement for Fifty Drawings by Alastair</a></footer>
</blockquote>

<blockquote>
<p>This almost perfect romantic novel by Alexandre Dumas fils inspired an extended series of delicately elegant drawings by Alastair, who may have felt an affinity with the beautiful but consumptive courtesan, Marguerite Gautier, who sacrifices everything for love.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'>Illustrator of Decadence</a></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>Marguerite Gantier</li>
            <li>La Dame aux Camélias</li>
            <li>The Bouquet</li>
            <li>The Secret</li>
            <li>The Faint</li>
            <li>The Death</li>
            <li>A Slave</li>
          </ul>
       </div>
      </div>
    )

}