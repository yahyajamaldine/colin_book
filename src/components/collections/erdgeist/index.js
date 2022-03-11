import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Erdgeist(){
    const [firstEl]=useState([
        "Ballerina",
		"The Lace Hat",
		"Lulu in Front of the Café Alhambra",
		"Ballerina","aka Lady J– as a Ballet Girl",
		"The Young Widow",
		"En Jockey",
		"Skirt Dance"
    ]);
    const [secondEl]=useState([
        "Lulu as Mrs Medizinalrat Goll",
		"",
		"",
		"",
		"",
		"",
		"",
		"skirt dance",
		"",
		"",
		"",
		"",
		"Endpaper"
    ]);
    const [thirdEl]=useState([
        "Lascaris",
		"Pierrot",
		"Skirt Dance",
		"The Young Widow",
		"«I poisoned your mother in this room»",
    ]);
    return(
       <div className='container'>
       <h1>Erdgeist, Frank Wedekind</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Ballerina” is simply two legs,<br/> one flung skyward from out a mass of fluffy skirts,<br/> the other touching the floor
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               a remarkable representation of a gay crowd at night.
                 </p>
            </div>
       </div>
        <div class="description">
        <h2>English: “Earth Spirit”</h2>
<h2>by Frank Wedekind</h2>
<h2>Published in 1895</h2>
<h2>Alastair’s drawings published in 1914, 1920, and 1925</h2>

<blockquote>
<p>Both of these plays explored sexual freedom in the character of Lulu, who is the archetype of the femme fatale</p>
<footer>David Beronä, <a href = '?bibliography#dover'><cite>Alastair: Drawings and Illustrations</cite></a></footer>
</blockquote>

<blockquote>
<p>In 1911, Alastair is already dealing with the Lulu tragedies by Wedekind. In the same year, corresponding drawings are displayed in the Munich Modern Gallery by Heinrich Tannhäuser. Seven of them are reproduced in <a href = "?bibliography#fortythree"><cite>Forty-three Drawings by Alastair</cite></a> (1914).</p>
<footer><a href = '?bibliography#kunst'><cite>Alastair: Kunst als Schicksal</cite></a></footer>
</blockquote>

<blockquote>
<p>The artist emphasizes the statement that his drawings referring to the plates of this book are dated 1913. Due to the war and the huge difficulties in the production of this luxury edition its release was delayed until 1920.</p>
<footer>Note in <a href = "?bibliography#erdgeist"><cite>Erdgeist</cite></a></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>1</li>
            <ul>
            {firstEl.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
            <li>2</li>
            <ul>
              {secondEl.map((item,index)=>{
                  if(item===""){
                      return(<li key={index}>{index}</li>)
                  }
                  else{
                      return(<li key={index}>{item}</li>)
                  }
              })}
            </ul>
            <li>3</li>
            <ul>
               {thirdEl.map((item,index)=>{
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