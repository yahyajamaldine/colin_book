import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Imaginary(){
    const [Dictionnary]=useState([
        "Saints and the Lady of Pain",
    "St Sebastian",
    "Messaline",
    "4",
    "5",
    "Keats's Isabella",
    "Paganini",
    "The Picture of Dorian Gray",
	 "(A)The Picture of Dorian Gray",
	"(B)The Picture of Dorian Gray",
    "",
	"",
	"",
	"Woman with a Parasol",
	"The Virgin of Sorrows", "French: La Vierge des Sept Doleurs",
	"",
     "",
	"",
	"",
	"St Sebastian",
	"Saint Sebastian and Saint Chrysostomos",
	"German: Der heilige Sebastian und der heilige Chrysostomos",
	"",
	"Mademoiselle de Maupin",
	"Le Vampire",
	"Silvia Settala",
	""
    ]);
    return(
       <div className='container'>
       <h1>Imaginary Portraits</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Cold eyelids that hide like a jewel.
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               “Messalina” is the most hideous bit of femininity that 
               <br/>even the wild futurists have outlined on paper.
                </p>
            </div>
       </div>
        <div className="description">
        <p className="other">
            Drawings of fictional characters or figments of Alastair’s imagination; or, <br/>in a few cases, possibly
            acquaintances of Alastair whose names he simply failed to record.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          {Dictionnary.map((item,index)=>{
             if(item===""){
            return(<li key={index}>{index}</li>)
             }
             else{
                return(<li key={item}>{item}</li>)
             }
          })}
          </ul>
       </div>
      </div>
    )

}