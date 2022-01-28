import milano from '../images/milanophoto.jpg';

export default function Cover(){
    return(
       <div className="milano_cover">
         <input id = 'phot' type = 'checkbox' />
          <div id = 'tpbkg'></div>
         <label htmlFor= 'phot' id = 'tocphotoPane'>
         <img className='milano_photo' src={milano} alt="milanophoto"/>
         <footer className='alasatir_footer'>Alastair, *1887 - <sup>†</sup>1969</footer>
          </label>
       </div>
    )
}