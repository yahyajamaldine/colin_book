import React  from "react";
import Cover from "./Milano_cover";
import {NavLink,Link} from 'react-router-dom';
import '../styles/toc.css';


export default function TOC(){
   return(
    <div className="toc_container">
    <div className="table_content">
    <table id='tableofcontents'>
	<tr className= 'nofleur'>
	<th colspan = '3'>Table of Contents</th>
	</tr>
	<tr className= 'nofleur'>
	<td className='col1'></td>
	<td className='col2, notWrappingTD forward_button'><NavLink to='/'><span id="foreward_button">Foreward</span></NavLink></td>
	<td className='col3'></td>
	</tr>
	<tr className= 'nofleur'>
	<td colspan = '3' className= 'sec'>Writing</td>
	</tr>
	<tr>
	<td className= 'wrappingTD'><span className='wrappingSpan'>1920</span></td>
	<td colspan = '2'><a href = '?collection=valley'><span className='notWrappingSpan'>The Burning Valley: Poems by Alastair</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1929</span></td>
		<td colspan = '2'><a href = '?collection=caressepoems'><span className='notWrappingSpan'>Poems for Caresse Crosby</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1923</span></td>
		<td colspan = '2'><a href = '?collection=dandy'><span className='notWrappingSpan'>The Transformations of the Dandy</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1920</span></td>
		<td colspan = '2'><a href = '?collection=otherpoetry'><span className='notWrappingSpan'>Other poetry</span></a></td>
	</tr>
	<tr className= 'nofleur'>
		<td colspan = '3' className= 'sec'>Art</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1911</span></td>
		<td><a href = '?collection=peau'><span className='notWrappingSpan'>La Peau de Chagrin</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Honoré de Balzac</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1913</span></td>
		<td colspan = '2'><a href = '?collection=gods'><span className='notWrappingSpan'>Gods</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1914</span></td>
		<td colspan = '2'><a href = '?collection=designs'><span className='notWrappingSpan'>Designs</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1915</span></td>
		<td><a href = '?collection=paques'><span className='notWrappingSpan'>Poèmes pour Pâques</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Lois Cendré</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1920</span></td>
		<td><a href = '?collection=sphinx'><span className='notWrappingSpan'>The Sphinx</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Oscar Wilde</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1920</span></td>
		<td><a href = '?collection=carmen'><span className='notWrappingSpan'>Carmen</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Prosper Mérimée</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1920</span></td>
		<td><a href = '?collection=erdgeist'><span className='notWrappingSpan'>Erdgeist</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Frank Wedekind</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1921</span></td>
		<td><a href = '?collection=pandora'><span className='notWrappingSpan'>Die Büchse der Pandora</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Frank Wedekind</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1922</span></td>
		<td><a href = '?collection=salome'><span className='notWrappingSpan'>Salome</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Oscar Wilde</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1924</span></td>
		<td><a href = '?collection=rache'><span className='notWrappingSpan'>Die Rache einer Frau</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Barbey d’Aurevily</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1924</span></td>
		<td><a href = '?collection=storck'><span className='notWrappingSpan'>Sebastian van Storck</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Walter Pater</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td><a href = '?collection=tosca'><span className='notWrappingSpan'>La Tosca</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Victorien Sardou</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td><a href = '?collection=camelias'><span className='notWrappingSpan'>La Dame aux Camélias</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Alexandre Dumas</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td><a href = '?collection=bowboy'><span className='notWrappingSpan'>The Blind Bow-Boy</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Carl Van Vechten</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td><a href = '?collection=zauberflote'><span className='notWrappingSpan'>Die Zauberflöte</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Wolfgang Mozart</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td><a href = '?collection=anthony'><span className='notWrappingSpan'>La Tentation de Saint Antoine</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Gustave Flaubert</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1927</span></td>
		<td><a href = '?collection=skeletons'><span className='notWrappingSpan'>Red Skeletons</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Harry Crosby</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td><a href = '?collection=usher'><span className='notWrappingSpan'>The Fall of the House of Usher</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Edgar Allen Poe</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td><a href = '?collection=birthday'><span className='notWrappingSpan'>The Birthday of the Infanta</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Oscar Wilde</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td><a href = '?collection=lescaut'><span className='notWrappingSpan'>Manon Lescaut</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Abbé Prévost</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1929</span></td>
		<td><a href = '?collection=liaisons'><span className='notWrappingSpan'>Les Liaisons Dangereuses</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Choderlos de Laclos</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1929</span></td>
		<td><a href = '?collection=dreadful'><span className='notWrappingSpan'>The City of Dreadful Night</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>James Thomson</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1969</span></td>
		<td><a href = '?collection=flasche'><span className='notWrappingSpan'>Der Mann auf der Flasche</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Gustave Meyrink</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'><span className='c'>c</span>1969</span></td>
		<td colspan = '2'><a href = '?collection=cirque'><span className='notWrappingSpan'>Jeux de Cirque</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td><a href = '?collection=pieces'><span className='notWrappingSpan'>Pieces</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>JK Huysman</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td><a href = '?collection=happy'><span className='notWrappingSpan'>The Happy Prince</span></a></td>
		<td className= 'notWrappingTD'><span className='notWrappingSpan'>Oscar Wilde</span></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td colspan = '2'><a href = '?collection=portraits'><span className='notWrappingSpan'>Portraits</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td colspan = '2'><a href = '?collection=imaginary'><span className='notWrappingSpan'>Imaginary Portraits</span></a></td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td colspan = '2'><a href = '?collection=other'><span className='notWrappingSpan'>Other illustrations</span></a></td>
	</tr>
	<tr className= 'nofleur'>
		<td colspan = '3' className= 'sec'>Appendices</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1914</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=i'><span className='wrapping'><span className='meta'>Appendix I:</span> A Note of Exclamation by Robert Ross</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1925</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=ii'><span className='wrapping'><span className='meta'>Appendix II:</span> A Note of Introduction by Carl Van Vechten</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1927</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=iii'><span className='wrapping'><span className='meta'>Appendix III:</span> The Alchemy of Alastair by PG Konody</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1927</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=iv'><span className='wrapping'><span className='meta'>Appendix IV:</span> Gallery Introductions by the Countess de Noailles and Arthur Symons</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=v'><span className='wrapping'><span className='meta'>Appendix V:</span> Introduction from The Fall of the House of Usher by Arthur Symons</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<span className='wrapping, notReady'><span className='meta'>Appendix VI:</span> Introduction from The Birthday of the Infanta by Harry Crosby</span>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>1928</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=vii'><span className='wrapping'><span className='meta'>Appendix VII:</span> Introduction from Manon Lescaut by Arthur Symons</span></a>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<span className='wrapping, notReady'><span className='meta'>Appendix VIII:</span> Correspondence</span>
		</td>
	</tr>
	<tr>
		<td className= 'wrappingTD'><span className='wrappingSpan'>? ? ?</span></td>
		<td className= 'wrappingTD' colspan='2'>
			<a href = '?appendix=ix'><span className='wrapping'><span className='meta'>Appendix IX:</span> Reviews</span></a>
		</td>
	</tr>
	<tr className= 'nofleur'></tr>
	<tr className= 'nofleur'>
		<td className= 'wrappingTD'><span className='wrappingSpan'></span></td>
		<td className="bibilio_link"><Link to='./bibilio'><span className='notWrappingSpan'><span>Bibliography</span></span></Link></td>
	</tr>
    </table>
    </div>
	<Cover />
     </div>
    )
}