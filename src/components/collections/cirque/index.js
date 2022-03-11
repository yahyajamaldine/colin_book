import { useState } from "react";
import { Link } from "react-router-dom";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';



export default function Cirque(){
    const [Dictionnary]=useState([
        "Boxing Clowns","French: Clowns boxeurs",
	"Acrobats","French: Tête à Tête gymnastique",
	"Pompadour Sing","French: Balançoire Pompadour",
	"Tightrope Walker","French: Danseur de corde",
	"Can Can Dancers","German: Can-Can-Tänzerinnen",
	"Dwarf-tamer and furious cat","German: Nain-dompteur et chat en fureur",
	"Gladiators","French: Gladiateurs",
	"Flying hats","French: Chapeaux dansants",
	"Equilibrium","French: Equilibre",
	"Puss-in-Boots","German: Gestiefelter Kater",
	"Balance"
    ]);
    return(
       <div className='container'>
       <h1>The Transformations of the Dandy</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
            <img src={firstimg} alt='' />
                <p className='image_desc'>
                This illustration was exhibited in <Link to= '?bibliography#miniaturen' target="_blank">Magische Miniaturen</Link>
                </p>
            </div>

            <div className='MediaContainer'>
            <img src={secondimg} alt='' />
               <p className='image_desc'>
               Drawn in Munich. This illustration was exhibited in<br/> <Link to= '?bibliogrpahy#miniaturen' target="_blank">Magische Miniaturen</Link>
                </p>
            </div>
       </div>
        <div class="description">
        <h2>English: Circus Games</h2>
<blockquote>
<p>This was the overall title Alastair used for a set of drawings which explored the world of the circus, based on his youthful experiences when he had briefly joined one.</p>
<footer>Victor Arwas, <Link to= '?bibliography#decadence'>Illustrator of Decadence</Link></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          {Dictionnary.map(item=><li key={item}>{item}</li>)}
          </ul>
       </div>
      </div>
    )

}
