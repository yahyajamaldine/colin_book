import { Fragment } from 'react';
import Header from './Header';
import covertext from '../images/covertext.png';
import vulturedsun from '../images/vulturedsun.png';
import veridies from '../images/veridies.png';
import mrpitchfork from '../images/mrpitchfork.png';
import alastairsig from '../images/alastairsig.png';
import {Link } from 'react-router-dom';

export default function Alastair(){
    return(<Fragment>
          <Header className="Alastairlogo" src={covertext} alt="The alastair logo" />
          <main>
          <article>
          <p>Hans Henning von Voigt was born in 1887; he died Alastair in 1969. His Decadent drawings illustrated books for John Lane and Harry Crosby while he travelled, worked, and partied from Germany to Paris throughout the 1920s. Self-taught, his gothic style resembles nothing else, before or since. Alastair, says Carl Van Vechten, “betrays his instinctive sympathy with our restless, pathetic, modern life."</p>
          <p>This website is an account of Alastair as an illustrator, a poet, and a human being; and it is a gallery, presenting for the first time high-detail, digital restorations of his work; and it is a book, listing in its Table of Contents his surviving répertoire – at least, everything we could get our hands on.</p>
          <p>We have designed this website to be as clickable as possible.  All images are interactive, and the text is largely populated by links.  There are navigation buttons on most pages in the upper corners, and clicking on Alastair's signature (penned in his own hand) will always return you to the Table of Contents.</p>
          </article>
          <div  className='credits'>
          <div>
          <img  src={vulturedsun} className='home_logo' alt="" />
          <p>This website is a Vultured Sun production. </p>
          </div>
          <div>
          <img src={veridies} className='home_logo' alt="" />
          <dl id = 'colin'>
          <dt className='dt_alastair'>Colin Wolf Bishop Foley </dt>
          <dd className='dd_alastair' >research  </dd>
          <dd className='dd_alastair' >digitization</dd>
           <dd className='dd_alastair' >editing</dd>
           <dd className='dd_alastair' >design</dd>
           <dd className='dd_alastair' >writing</dd>
           {/**<!--<dd className='dd_alastair' >curriculum vitæ</dd>-->**/}
           </dl>
           <img src={mrpitchfork} className='home_logo' alt="" />
           <dl id = 'blaine'>
           <dt className='dt_alastair'>Blaine Theodore Evans Glover</dt>
           <dd className='dd_alastair' >restoration </dd>
           <dd className='dd_alastair' >web development</dd>
           <dd className='dd_alastair' >design</dd>
           <dd className='dd_alastair' >digitization  </dd>
            {/**<dd>curriculum vitæ</dd>--></div>**/}
           </dl>
           </div>
           </div>
          </main>
           <footer>
             <Link to='/toc'>
             <img src={alastairsig} id='signature' alt="" />
           <span>Go to the Table of Contents.</span>
           <div></div>
                 </Link>
           </footer>
         </Fragment>
    )
}