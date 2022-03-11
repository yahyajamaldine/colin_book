import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Flashe(){
    const [Dictionnary]=useState([
        "Gilles",
        "Harlequin","German: Harlekin",
        "Executioner and Henchmen","German: Scharfrichter und Schergen",
        "Ibis",
        "The Man in the Bottle","German: Der Mann in der Flasche",
        "The Bound Princess","German: Die Gefesselte Fürstin",
        "Venetian Masks","German: Venezianische Masken",
        "Bat","German: Fledermaus",
        "The Hunchbacks","French: Les bossus",
        "Executioner","German: Scharfrichter",
        "Mandrake","German: Alraun",
        "Cannibals","German: Menschenfresser",
        "Butterfly","German: Schmetterling"
    ]);
    return(
       <div className='container'>
       <h1>Der Mann auf der Flasche","Gustave Meyrink</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                This drawing was exhibited at the Galleria Milano.
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               Out of every niche and lobby the maskers streamed<br/>toward him – harlequins, cannibal
               <br/>an ibis, and some Chinese, Don Quixotes,<br/> Columbines, bayaderes and dominoes of all colors.
                </p>
            </div>
       </div>
        <div class="description">
        <h2>English: “The Man in the Bottle”</h2>
<h2>by Gustav Meyrink</h2>
<h2>Published in 1909</h2>
<blockquote>
<p>This and Bologneser Tränen were fantastic tales by Gustave Meyrink which inspired Alastair to produce a large number of drawings, which he started in 1964.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'><cite>Alastair: Illustrator of Decadence</cite></a></footer>
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