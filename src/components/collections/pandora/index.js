import  firstimg from "./images/1.png";
import secondimg from "./images/2.png";
import '../index.css';

export default function Pandora(){
    return(
       <div className='container'>
       <h1>Die Büchse der Pandora, Frank Wedekind</h1>
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
        <h2>English: “Pandora’s Box”</h2>
            <h2>by Frank Wedekind</h2>
            <h2>Published in 1904</h2>
            <h2>Alastair’s drawings published c1921</h2>
            
            <blockquote>
            <p>Both of these plays explored sexual freedom in the character of Lulu, who is the archetype of the femme fatale</p>
            <footer>David Beronä, <a href = '?bibliography#dover'><cite>Alastair: Drawings and Illustrations</cite></a></footer>
            </blockquote>
            
            <p>The second play by Frank Wedekind featuring the character Lulu, following <a href = '?collection=erdgeist'>Erdgeist</a>, which was also illustrated by Alastair.</p>
        </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
           <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
          </ul>
       </div>
      </div>
    )

}