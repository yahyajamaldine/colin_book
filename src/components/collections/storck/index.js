import { useState } from 'react';
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';
import { Link } from 'react-router-dom';

export default function Storck(){
    const [Dictionnary]=useState([
        "Halftitle",
        "Sebastian van Storck, confessedly the most graceful performer in all that skating multitude",
        "The most curious florists of Holland were ambitious to supply the Burgomaster van Storck with the choicest products of their skill»",
        "It was here that Sebastian could yield himself to the supremacy of his difficult thoughts»",
        "As she sat there beside the Clavecin looking very ruddy and fresh in her white satin, trimmed with glossy crimson swans-down»",
        "The artists and their wives were come to supper again",
        "She confessed to her mother the receipt of the letter – the cruel letter that had killed her",
        "And it was in the saving of this child that Sebastian had lost his life"
    ]);
       
    return(
       <div className='container'>
       <h1>Sebastian van Storck, Walter Pater</h1>
       <div className='GalleryContainer'>
       <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'> Sebastian van Storck </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               The most curious florists of Holland...
               </p>
            </div>
       </div>
       <div className="description">
       <h2>by Walter Pater</h2>
<h2>Published in 1886</h2>
<h2>Alastair’s drawings published in 1924</h2>

<blockquote>
<p>Walter Pater’s tale of a Dutch burgomaster’s son, resisting wealth and public office in favour of philosophical arguments in solitude; having cruelly rejected the girl who loved him in a natural and loyal manner by accusing her of a ‘vulgar coarseness of character’, he then lost his life in saving that of a child of drowning.</p>
<footer>Arwas, <Link to= '?bibliography#decadence'>Alastair: Illustrator of Decadence</Link></footer>
</blockquote>

<blockquote>
<p>It is the artistry of the illustrator – that most difficult of all the arts – which moves me most; and I marvel that the same pen could have depicted so truly the flâneur, the penseur, and the sauveur, those triple characteristics of Sebastian van Storck – but more especially the last.</p>
<footer><Link to= '?bibliography#storck'>PG Konody</Link></footer>
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