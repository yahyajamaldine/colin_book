import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Liaisons(){
    const [Dictionnary]=useState([
        "Message",
	"The Broken Cord",
	"Devil's Intrigue",
	"Bad Counsel",
	"Servants at the Keyhole",
	"The Chinese Parasol",
	"Serpent and Mask",
	"Poisoned Dagger",
	"The Disheveled Bed",
	"Passionate Embrace",
	"The Insulting Bird",
	"Virtue in Danger",
	"Duel",
	"Shattered Looking-Glass",
	"Temptation", "French: Temtation"
    ]);
    return(
       <div className='container'>
       <h1>Les Liaisons Dangereuses, Choderlos de Laclos</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Alastair’s remarkable depiction of the extravagant costumes and dress
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
                </p>
            </div>
       </div>
        <div class="description">
        <h2>by Choderlos de Laclos</h2>
<h2>Published in 1782</h2>
<h2>Alastair’s drawings published in 1929</h2>

<blockquote>
<p>Alastair, discussing the placing, described the illustrations to his publisher as belonging to the book ‘<span class = "alastairquote">by atmosphere and person — but not in a strict illustration of a scene described in the book</span>’.</p>
<footer>Victor Arwas, <a href = "?bibliography#decadence"><cite>Illustrator of Decadence</cite></a></footer>
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