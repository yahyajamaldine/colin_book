import { useState } from 'react';
import '../index.css';

export default function Valley(){
    const [Dictionnary]=useState([
    "Inscription",
	"Bound helpless",
	"Through the lakes of heaven in the evening",
	"Bird in the twilight tree",
	"Alas, how mild moon wind plays the cithara",
	"Early, when the sun already burned",
	"Where is the love that once was",
	"Swans live in the shadow",
	"When I apply beauty to me",
	"I sang the words you told me",
	"In the morning you reached me",
	"Stay",
	"Do not kiss me",
	"Far from here",
	"We trample branches",
	"Sleep in my arm",
	"When I hunt under clouds the evilly corded up limbs",
	"Do not know anymore, from where",
	"My sky is cloudy",
	"Mother of pain",
	"Lamentation elapse",
	"Wake up the world",
	"Sorrow on highs",
	"Hear the calling",
	"Secret, have mercy",
	"Where are the ones",
	"Cursed are the impatient ones",
	"Guide us from the banks of the river",
	"In the rush of wildly armed threatening",
	"Venice",
	"For the death of",
	"S. Y. B.",
	"After your transition",
	"You descended into death",
	"For a dead parrot",
	"The ape",
	"My house I left",
	"Dying maenad",
	"Interment of Adonis",
	"Endymion",
	"Antinous",
	"Bluebeard",
	"The prophetess",
	"The singer",
	"Friend of eternal lamps",
	"A Goodbye"
    ]);
       
    return(
       <div className='container'>
       <h1>sketches</h1>
       <div className='GalleryContainer'>
       </div>
       <div className="description">
<h1>The Burning Valley</h1>
<h2>Poetry by Alastair</h2>
<h2 className='desc'>a new English translation of</h2>
<h2><cite>Das Flammande Tal</cite></h2>
<h2 className= 'desc'>by Thomas Schädlich</h2>
<h2 className='desc'>originally published in 1920 by Hyperion Verlag</h2>
       </div>
       <div className="dictionary">
       <p>Dictionary</p>
          <ul className="dictionary_list">
              {Dictionnary.map(item=><li key={item}>{item}</li>)}
          </ul>
       </div>
      </div>
    )

}