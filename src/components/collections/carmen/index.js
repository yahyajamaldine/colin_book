import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Carmen(){
    const [Firstcolec]=useState([
        "«Drôles de gens que ces gens là»",
        "English: «Curious types, those people.»",
		"«Ah je t’aime, Escamille»",
        "English: «Ah, I love you, Escamille»",
		"«Non par le sang – tu n’iras pas Carmen – c’est moi qui tu suivras»",
        "English: «No, by my blood – you will not go, Carmen – it is I you will follow»",
		"«Je vais danser pour vous»",
        "English: «I will dance for you»",
		"«Je t’aime, Escamille»",
        "English: «I love you, Escamille»",
		"«Le Fin»",
        "English: «The End»"

    ]);
    const [SecondColec]=useState([
        "Gypsy","German: Gitane",
		"Gypsy","German: Gitane",
		"",
	   "Don José is back","German: Don José ist zurück",
	   "«I want to dance for you, Don José»","French: «Je vais danser pour vous»<br>German: «Ich will für Euch tanzen, Don José»",
	   "The Embrace","German: Die Umarmung",
	   "",
	   "The Galane","German: Die Galane",
	   "",
	   "Before the Bullfight","German: Vor dem Stierkampf",
	   "Kiss of Death","German: Der Todesstoß",
	   "The Death","German: Der Tod"
    ]);
    return(
       <div className='container'>
       <h1>Carmen, Prosper Mérimée</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Alastair later demonstrates anger and jealously<br/>[<em>sic</em>] and lack of love in Don José’s vacant eyes
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               his black shirt sleeve covers his grief and guilt after killing Carmen
               </p>
            </div>
       </div>
        <div class="description">
        <h2>by Prosper Mérimée</h2>
<h2>Published in 1845</h2>
<h2>Alastair’s drawings published in 1914 and 1920</h2>
<blockquote>
<p>Prosper Mérimée’s tale of the love of a Spanish officer, Don Jose, for a cigarette factory girl, Carmen, for whom he abandons his fiancée and deserts the army. When his funds run low the fickle Carmen leaves him for Escamille, a bullfighter. The jealous Don Jose then stabs her in to death.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'><cite> Alastair: Illustrator of Decadence</cite></a></footer>
</blockquote>

<p>Alastair produced two sets of illustrations for Carmen. The first, of six drawings was published in a collection of his drawings, Forty-Three Drawings by Alastair, while the second, of twelve drawings was included in a reprint of the novella by Verlag Rascher & Co in Zurich.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          <li>1</li>
            <ul>
              {Firstcolec.map((item,index)=>{
                  if(item===""){
                      return(<li key={index}>{index}</li>)
                  }
                  else{
                      return(<li key={index}>{item}</li>)
                  }
              })}
            </ul>
            <li>2</li>
            <ul>
              {SecondColec.map((item,index)=>{
                  if(item===""){
                      return(<li key={index}>{index}</li>)
                  }
                  else{
                      return(<li key={index}>{item}</li>)
                  }
              })}
            </ul>
          </ul>
       </div>
      </div>
    )

}