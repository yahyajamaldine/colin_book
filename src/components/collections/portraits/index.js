import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Portraits(){
    const [Dictionnary]=useState([
        "Florinde de S–",
"Lady P–",
"Florinde de S–",
"La Princesse Tsch–",
"Hans Hasso von Veltheim",
	"Hans Hasso von Veltheim",
	"Hans Hasso von Veltheim",
"Polaire",
"La Princesse Tsch–",
"Florinde de S–",
"Mistinguette",
	"Polaire",
	"Florinde de S–",
	"Lady P–",
	"La Princesse Tsch–",
	"Madame Eleonora Duse",
	"Marchesa Luisa Casati",
	"Sarah Bernhardt",
	"Marchesa Luisa Casati",
	"Mr H de St…… Paris",
	"Eleonora Duse",
	"Réjane",
	"Florinde de S–",
	"Madame de R–",
	"Young Sarah Bernhardt",
	"Bildnis Eleonore Duse"
    ]);

    return(
       <div className='container'>
       <h1>Portraits</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               </p>
            </div>
       </div>
       <div class="description">
       <p>A collection of portraits done by Alastair of his associates and other celebrities.</p>
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