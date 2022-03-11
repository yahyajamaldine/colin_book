import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Paques(){
    const [Dictionnary]=useState([
        "The Goddess on Pilgrimage","French: La Déesse en pèlerinage",
	"The First Meeting of Christ and the Sinful Woman","French: Le première rencontre du Christ et de la pécheresse",
	"The Mendicants of Love","French: Les Mendiantes d’Amour",
	"Adonis",
	"Woman of Byblos","French: Femme de Byblos",
	"Piéta",
	"An Angel","French: Un Ange"
    ]);
    return(
       <div className='container'>
       <h1>Poémes Pour Paques","Lois Cendré</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Goddess inevitable, without fearing you or cursing you, <br>
                </br>I accept you with a solemn and religious heart
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               Beautiful like the heroic youthful of the World,
               <br></br> the golden-eyed Aphrodite lights up irresistably the hearts.
               </p>
            </div>
       </div>
        <div class="description">
        <h2>English: Poems for Easter</h2>
<h2>by Loïs Cendré</h2>
<h2>Published in 1915</h2>

<blockquote>
<p>Shortly after Alastair had come to Switzerland he must have met the poet Lois Cendré. It is still unknown why he used the pseudonym “Celui qui aime l’Amour [He who loves Love]”.</p>
<footer><a href = '?bibliography#kunst'>Alastair: Kunst als Schicksal</a></footer>
</blockquote>

<blockquote>
<p>Alastair's drawings are among his most Symbolist and were printed in black on a beige paper, with parts of the drawings silk-screened in gold and white.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'>Alastair: Illustrator of Decadence</a></footer>
</blockquote>

<p>A privately printed collection of poems by Loïs Cendré, given away to his friends as an Easter present.</p>
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