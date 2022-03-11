import { useState } from "react";
import  firstimg from "./images/caresseintro.png";
import '../index.css';


export default function Caressepoems(){
    return(
       <div className='container'>
       <h1>Caressepoems</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                </p>
            </div>
       </div>
        <div class="description">
        <header>
        <h2>A selection of letters addressed to Caresse Crosby</h2>
         </header>
         </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>1</li>
              <li>3</li>
              <li>4</li>
              <li>IV</li>
	          <li><em>Not titled</em>"</li>
              <li>"Endymion"</li>
              <li><em>Not titled</em></li>
              <li><em>Not titled</em></li>
          </ul>
       </div>
      </div>
    )

}