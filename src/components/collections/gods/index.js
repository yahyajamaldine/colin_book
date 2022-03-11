import { useState } from "react";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';
import { Link } from "react-router-dom";


export default function Gods(){
    return(
       <div className='container'>
       <h1>Gods</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               O tell me, were you standing by when Isis to Osiris knelt?
                </p>
            </div>
       </div>
        <div class="description">
        <blockquote>
<p>Of all your beautiful and lovely drawings which I am the fortunate owner of, the Crucifix and Ammon are my favorites. Additionally, I desire a Buddha and a Mohamed of the same size to create a folding altar for these four religious advocates. – The altar of yours, as you know, is an old idea of mine – but the realization of this desire always stays young and only gains intensity.</p>
<footer>Hans von Veltheim, <a href = "?bibliography#kunst">23 April 1913 letter to Alastair</a></footer>
</blockquote>

<p>Three drawings, all made in early 1913, of different religions’ gods. These three figures were collected in <a href = "?bibliography#kunst"><cite>Alastair: Kunst als Schicksal</cite></a>.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>The Great God Ammon</li>
            <li>Isis and Osiris</li>
            <li>Crucifixus</li>
          </ul>
       </div>
      </div>
    )

}