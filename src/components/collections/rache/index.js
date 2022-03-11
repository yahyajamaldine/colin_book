import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Rache(){

    return(
       <div className='container'>
       <h1>Die Rache Einer Frau, Barbey d'Aurevily</h1>
       <div className='GalleryContainer'>
            <div className='MediaContainer'>
               <img src={firstimg} alt='' />
                <p className='image_desc'>
                In this figure, her forlorn face pokes out from her expensive garments,<br/>
                     which appear like a cocoon that constricts
                </p>
            </div>

            <div className='MediaContainer'>
               <img src={secondimg} alt=''/>
               <p className='image_desc'>
               her sexuality in contrast to her nakedness and the pleasure she shows with her lover
               </p>
            </div>
       </div>
       <div class="description">
       <h2>English: The Revenge of the Woman</h2>
            <h2>by Barbey d’Aurevilly</h2>
            <h2>Alastair’s drawings published in 1924</h2>
            
            <blockquote>
            <p>In this novella about a young wife who turns to prostitution to shame her wealthy and cold-hearted husband, Alastair uses the opulence of dress and décor to display the sexual constriction[…] the wife feels.</p>
            <footer>David Beronä, <a href = '?bibliography#dover'>Alastair: Drawings and Illustrations</a></footer>
            </blockquote>
            
            <p>Illustrated in the same year as Sebastian van Storck, but using a very distinct style. The figures were printed using collotype, a process overseen by Professor Fritz Goetz of the State Academy for Graphic Arts and Book Design (now the Academy of Visual Arts Leipzig). Four-hundred and eighty copies were made.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
           <li>Halftitle</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>he Murder of Don Esteban</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
          </ul>
       </div>
      </div>
    )

}