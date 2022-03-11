import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Dreadful(){
    return(
       <div className='container'>
       <h1>The City of Dreadful Night, James Thomson</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                The City is of Night, but not of Sleep
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               The mansion stood apart in its own ground
                </p>
            </div>
       </div>
        <div class="description">
        <h2>by James Thomson</h2>
        <br/>
        <blockquote>
<p>Executed in about 1929, these drawings just missed the era of luxurious illustrated books, and remained unpublished.</p>
<footer>Victor Arwas, <a href = '?bibliography#decadence'>Illustrator of Decadence</a></footer>
</blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>The Book</li>
              <li>The Mansion</li>
              <li>Night</li>
          </ul>
       </div>
      </div>
    )

}