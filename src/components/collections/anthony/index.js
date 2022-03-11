import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';




export default function Anthony(){
    const [Dictionary]=useState([
    ]);
    return(
       <div className='container'>
       <h1>La Tentation de Saint Antoine","Gustave Flaubert</h1>
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
        <div className="description">
        <h2>English: “The Temptation of Saint Anthony”</h2>
<h2>by Gustave Flaubert</h2>
<h2>Published in 1874</h2>
<h2>Alastair’s drawings published in 1925</h2>

<blockquote>
<p>Alastair never succeeded in getting a separate book published of his many St Anthony drawings. This group was published in Fifty Drawings by Alastair. The parade of temptations, torments, and horrors enabled Alastair to be considerably more fanciful than usual.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'>Illustrator of Decadence</a></footer>
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