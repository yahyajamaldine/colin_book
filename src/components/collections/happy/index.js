import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Happy(){
    return(
       <div className='container'>
       <h1>The Happy Prince, Oscar Wilde</h1>
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
        <div class="description">
<h2>by Oscar Wilde</h2>
<h2>Published in 1888</h2>

<blockquote>
<p>High above the city, on a tall column, stood the statue of the Happy Prince. He was gilded all over with thin leaves of fine gold, for eyes he had two bright sapphires, and a large red ruby glowed on his sword-hilt.</p>
<footer>Oscar Wilde, The Happy Prince</footer>
</blockquote>

<blockquote>
<p>He is standing high above the city. A young swallow that headed off to the south too late rests to his feet and is covered in tears of the Prince. The latter is unhappy because – being imprisoned in his castle Sanssouci in life – he never saw the poverty of his people and therefore never did anything about it. Now he asks the swallow to give the jewels and at last the beaten gold covering him to people in need. Because of love for the Prince the bird fails to fly toward warm places, and dies at the feet of the statue. Having become ugly the statue is melting. An angel brings the heart of the Prince and the swallow to God as the two most precious things in this city.</p>
<footer><a href = '?bibliography#kunst'>Alastair: Kunst als Schicksal</a></footer>
</blockquote>

<p>Alastair made at least two versions of the same basic design, the titular Happy Prince atop a crescent.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>The Happy Prince</li>
              <li>Happy Prince</li>
          </ul>
       </div>
      </div>
    )

}