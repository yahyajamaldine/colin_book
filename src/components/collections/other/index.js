import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Other(){
    const [Dictionnary]=useState([
        "1",
	"2",
	"3",
	"The Sorrowing Nun",
	"Costume Shirée",
	"L'isle Joyeuse",
	"4",
	"Pen Drawing",
	"The Bird Hardly Hurt","French: L’Oiseau Peu Blessé",
     "The Plague",
     "Self-Portrait","German: Selbstportrait",
     "5",
     "Posthumous Sketch",
     "Snake",
     "6",
     "Fleurs du Mal",
     "7",
     "Self-Portrait",
     "Annunciation / Visitation","German: Verkündigung / Heimsuchung",
     "Body Overcomes Death", "German: Leibe Überwindet den Tod",
     "From an Oriental Tale",
     "8",
     "9",
     "Woman With Parasol and Woman With Child"
        ]);
    return(
       <div className='container'>
       <h1>Other Illustrations</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'> </p>
            </div>
       </div>
        <div class="description">
        <p className="other">While most of his work was done for specific works or collections, Alastair also created a number of drawings that cannot easily be sorted into any group. Twenty-five of those drawings are presented here.</p>
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