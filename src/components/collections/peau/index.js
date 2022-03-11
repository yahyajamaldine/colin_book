import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Peau(){

    return(
       <div className='container'>
       <h1>La Peau de Chagrin, Honoré de Balzac</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Any sufferer in mind or body, any helpless or poor man, is a pariah.
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               With unnatural strength, the last effort of ebbing life, he broke down the door.
               </p>
            </div>
       </div>
        <div class="description">
        <h2>by Honoré de Balzac</h2>
<h2>Published in 1831</h2>
<h2>Alastair’s drawings unpublished</h2>

<blockquote><p>Raphaël de Valentin[…] decides to commit suicide. Before, his way guides him into an antique shop where he is given the Chagrin. All his wishes are being fulfilled with its help – but with every fulfillment his life is shortened, visualized in the shrinking of the Chagrin. He rejoices in any sensual pleasure he could ever imagine but does not find calm. Eventually, he realizes his love for Pauline who already adored him when he was poor. Still, he has to escape from her because the leather has melted down to a little piece. When they meet again though, she realizes the terrible fate of her loved one. She wants to strangle herself to death so that he does not desire her anymore. Raphaël prevents her from doing so and dies on top of her.</p>
<footer><a href = "?bibliography#kunst">Alastair: Kunst als Schicksal</a></footer></blockquote>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
          <li>The Sufferer, German: Der Kranke</li>
              <li>Ending, German: Ende</li>
          </ul>
       </div>
      </div>
    )

}