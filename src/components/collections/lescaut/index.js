import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Lescaut(){
    const [Dictionnary]=useState([
        "&Dustja",
	"The Young Lovers",
	"A Self-Portrait",
	"&Endpaper 1",
	"&Endpaper 2",
	"Departure",
	"At the Play",
	"The Closed Gate",
	"The Passionate Embrace",
	"Chamber Music",
	"Manon Lescaut",
	"The Message",
	"Disagreement",
	"The Sad Journey",
	"The End",
	""
    ]);
    return(
       <div className='container'>
       <h1>Manon Lescaut, Abbé Prévost</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                We took our departure silently, and without creating the least alarm.
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               Manon with the Chevalier des Grieux in a box at a theater reminds me<br/>
              of one of Lautrec’s lithographs and of one of Conder’s colored designs.
                </p>
            </div>
       </div>
        <div class="description">
        <h2>by Abbé Prévost</h2>
            <h2>Published in 1732</h2>
            <h2>Alastair’s drawings published in 1928</h2>
            
            <blockquote>
            <p>this novel traced the love affair of the Chevalier de Grieux and Manon Lescaut from their first chance meeting when she was on her way to a convent, through many vicissitudes, to her death in New Orleans.</p>
            <footer>Victor Arwas, <a href = '?bibliography#decadence'>Illustrator of Decadence</a></footer>
            </blockquote>
            
            <blockquote>
            <p>Alastair has for I know not how many years been employing his singular and fantastic and fertile invention on every branch of decorative work, and his technique renews itself, partly because it is a reversion to old methods. And there is a savage energy and a weird kind of wildness in these dark and sinister glowing illustrations (such as those I have before me), painted often enough with the color of fire and night, colors which recur continually in these decorative designs.</p>
            <footer>Arthur Symons, <a href = '?appendix=vii'>Introduction from Manon Lescaut</a></footer>
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