import { useState } from 'react';
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Sekeltons(){
    const [Dictionnary]=useState([
        "Our Lady of Pain",
	    "Salammbô",
	   "Crucifixion",
	   "Salome",
	  "Baudelaire",
	"Massacre of the Innocents",
	"Cleopatra",
	"Sappho",
	"Endpiece"
    ]);
    return(
       <div className='container'>
       <h1>Red Skeletons,Harry Crosby</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>Harry Crosby Our Lady of Pain</p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>Harry Crosby Salammbô.</p>
            </div>
       </div>
       <div class="description">
      <h2>by Harry Crosby Published in 1927</h2>
     <p>These poems are for Alastair Harry Crosby</p>
        <blockquote>
       <p>
       I see Against the moon<br />
Four lions crucified<br />
Which are the four thoughts that I have<br />
Of you<br />
<footer>Harry Crosby</footer>
</p>

</blockquote>
<blockquote>
<p>
Go thou before, and leave me to my crucifix,<br />
Whose pallid burden, sick with pain, watches the world with wearied eyes,<br />
And weeps for every soul that dies, and weeps for every soul in vain.<br />
</p>
<footer>Oscar Wilde, The Sphinx</footer>
</blockquote>
<p>Seek my heart no longer; the beasts have eaten it.</p>
<footer>Charles Baudelaire (trans William Aggeler), Causerie</footer>
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