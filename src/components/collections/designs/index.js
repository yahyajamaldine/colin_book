import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';


export default function Designs(){
    return(
       <div className='container'>
       <h1>Designs</h1>
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
        <p>Designs made by Alastair, for posters and for costumes.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              <li>Design for a Poster</li>
              <li>Design</li>
              <li>Design for Stage Costume</li>
              <li>Design for a Poster</li>
              <li>Design</li>
              <li>Poster</li>
              <li>Poster</li>
              <li>Night Suit","French: Costume du Soir</li>
          </ul>
       </div>
      </div>
    )

}