import { useState } from "react";
import { Link } from "react-router-dom";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';




export default function Birthday(){
    const [Dictionary]=useState([
        "The Dancing Dwarf", "French: La Nain qui Danse",
	"",
	"The Fanfare","French: La Fanfare",
	"",
	"",
	"",
	"The Dancers of the Virgin","French: Les Danseurs de la Vierge",
	"The Apes of Barbary", "French: Les Singes de Barbarie",
	"Those Who Press Grapes (Under Their Feet)","French: Les Fouleurs de Raisin",
	"La Nain Mort",
	"",
	"Birthday of the Infanta",
    "German: Gebursag der Infantin"
    ]);
    return(
       <div className='container'>
       <h1>Carmen, Prosper Mérimée</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                A hunchbacked dwarf[…] is part of<br/> the entertainment that includes many circus acts
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               After the Queen’s death[…], <br/>the King becomes protective of his daughter
               </p>
            </div>
       </div>
        <div className="description">
        <h2>by Oscar Wilde</h2>
<h2>Published in 1891</h2>
<h2>Alastair’s drawings published in 1928</h2>

<blockquote>
<p>The Birthday of the Infanta involves a day of festivities in honor of the King’s daughter – the Infanta.</p>
<footer>David Beronä, <Link to = '?bibliography#dover'>Alastair: Drawings and Illustrations</Link></footer>
</blockquote>

<blockquote>
<p>That Wilde should have written The Birthday of the Infanta was natural, that Alastair should have illustrated it was inevitable.</p>
<footer>Harry Crosby, Introduction to The Birthday of the Infanta</footer>
</blockquote>

<blockquote>
<p>[May] 31 [1928]. To Versailles [with C and Narcisse] to see Alastair and Thoma of the Four Leaf Clvoer was there and A showed us his drawings for the Birthday of the Infanta and he told us when we asked him that he had destroyed both pictures that he had drawn of us (he must have been very annoyed and now I am annoyed)</p>
<p>[June] 18 [1928]. Alastair for luncheon and he arrived bearing the most marriageable looking lilies and our Black Sun Press is going to edit The Birthday of the Infanta with nine of his drawings</p>
<footer>Harry Crosby, <Link to= '?bibliography#shadows'>Shadows of the Sun</Link></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          {Dictionary.map((item,index)=>{
                  if(item===""){
                      return(<li key={index}>{index}</li>)
                  }
                  else{
                      return(<li key={index}>{item}</li>)
                  }
              })}
          </ul>
       </div>
      </div>
    )

}