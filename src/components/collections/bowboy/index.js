import { Link } from "react-router-dom";
import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';



export default function Bowboy(){
    return(
       <div className='container'>
       <h1>The Blind Bow-Boy","Carl van Vechten</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                In 1925, this illustration was privately owned by <br/>
                <Link to= 'https://en.wikipedia.org/wiki/Carl_Van_Vechten' target='_blank'>Carl van Vechten</Link>
               </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               </p>
            </div>
       </div>
        <div className="description">
        <h2>by Carl Van Vechten</h2>
<h2>Published in 1923</h2>
<h2>Alastair’s drawings published in 1925</h2>

<blockquote>
<p>[I]t recounts the adventures of Harold, a complete innocent, at the hands of the sophisticated, bright, and wealthy folk of New York.</p>
<footer>Victor Arwas, <Link to = '?bibliography#decadence'><cite>Alastair: Illustrator of Decadence</cite></Link></footer>
</blockquote>

<blockquote>
<p>In this instance, the painter, uncharacteristically, has followed the description of the characters as it is set down in the novel, but he has done much more than that. By employing curious symbols, he has brought about an interrelation between the plates. Admirably, then, as these drawings serve to illustrate my book, they also excellently play an independent drama of their own.</p>
<footer>Carl Van Vechten, <Link to = '?appendix=ii'><cite>A Note of Introduction</cite></Link></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>The Blind Bow-Boy</li>
            <li>Harold</li>
            <li>Alice</li>
            <li>Campaspe</li>
            <li>Ronald</li>
            <li>Zinbule</li>
            <li>Fannie</li>
          </ul>
       </div>
      </div>
    )

}