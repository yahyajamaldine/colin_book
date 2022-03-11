import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Pieces(){

    return(
       <div className='container'>
       <h1>Pieces, JK Huysman</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                Put up for auction on Toronto on 2 December 2008.
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               Put up for auction in Toronto on 2 December 2008.
               </p>
            </div>
       </div>
        <div class="description">
        <h2>by JK Huysman</h2>
            <h2>Alastair’s drawings unpublished</h2>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
            <li>Les Visions du Mer</li>
              <li>Captive Maiden</li>
          </ul>
       </div>
      </div>
    )

}