import React  from 'react';
import '../styles/biblio.css';

export default function Bibliography() { 
    return(
     <article>
	<h1>Bibliography</h1>
	<p className='entry_click'>Click on an entry to show its information.</p>
	<h2>books illustrated by Alastair</h2>

	<label htmlFor= 'fortythreeInput'>
	<input type = 'checkbox' id = 'fortythreeInput' /> 
	<dl className="dl_hide" id = 'fortythree'>
		<dt><cite>Forty-Three Drawings by Alastair</cite> (with a note of Exclamation by Robert Ross)</dt>
		<dd>illustrated by Alastair</dd>
		<dd>introduced by Robert Ross</dd>
		<dd>John Lane, London, 1914</dd>
		<dd>edition of 500 copies</dd>
		<dd>43 illustrations, 1 endpaper design</dd>
		<dd className= 'method'>scanned from Dupré Library at the University of Louisiana, Lafayette by Colin Foley and Blaine Glover</dd>
		<dd className= 'method'>remaining illustrations photocopied from Shields Library at the University of California, Davis</dd>
		<dd className= 'hashtag'><a href = '#fortythree'>fortythree</a></dd>
	</dl>
	</label>

	<label htmlFor= 'paquesInput'>
	<input type = 'checkbox' id = 'paquesInput'/>
	<dl className="dl_hide" id = 'paques'>
		<dt><cite>Poèmes pour Pâques</cite></dt>
		<dd>by Loïs Cendré</dd>
		<dd>illustrated by Celui qui aime l’amour (pseudonym)</dd>
		<dd>privately printed, Geneva, 1915</dd>
		<dd>7 illustrations</dd>
		<dd className= 'method'>scanned from Bibliothèque Cantonale et Universitaire, Dorigny-Unithèque by Paul Wirion</dd>
		<dd className= 'hashtag'><a href = '#paques'>paques</a></dd>
	</dl>
	</label>

	<label htmlFor= 'sphinxInput'>
	<input type = 'checkbox' id = 'sphinxInput' />
	<dl className="dl_hide" id = 'sphinx'>
		<dt><cite>The Sphinx</cite></dt>
		<dd>by Oscar Wilde</dd>
		<dd>illustrated by Alastair</dd>
		<dd>John Lane, London, 1920</dd>
		<dd>edition of 1000 copies</dd>
		<dd>10 illustrations, 8 initial letters, 2 endpaper designs, 1 cover design</dd>
		<dd className= 'method'>photocopied from Shields Library at the University of California, Davis</dd>
		<dd className= 'hashtag'><a href = '#sphinx'>sphinx</a></dd>
	</dl>
	</label>

	<label htmlFor= 'carmenInput'>
	<input type = 'checkbox' id = 'carmenInput' />
	<dl className="dl_hide" id = 'carmen'>
		<dt><cite>Carmen</cite></dt>
		<dd>illustrated by Alastair</dd>
		<dd>Verlag Rascher & Co, Zurich, 1920</dd>
		<dd>edition of 500 copies, including 50 on Japon paper</dd>
		<dd>12 illustrations</dd>
		<dd className= 'method'>scanned from the University of Toronto for the <a href = 'https://archive.org/details/carmennovellemit00mruoft'>Internet Archive</a></dd>
		<dd className= 'hashtag'><a href = '#carmen'>carmen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'pandoraInput'>
	<input type = 'checkbox' id = 'pandoraInput' />
	<dl className="dl_hide" id = 'pandora'>
		<dt><cite>Die Büchse der Pandora</cite></dt>
		<dd>by Frank Wedekind</dd>
		<dd>illustrated by Alastair</dd>
		<dd>George Muller Verlag, Munich, c1921</dd>
		<dd>12 illustrations, 1 endpaper design</dd>
		<dd className= 'method'>photographed by David A Beronä</dd>
		<dd className= 'hashtag'><a href = '#pandora'>pandora</a></dd>
	</dl>
	</label>

	<label htmlFor= 'erdgeistInput'>
	<input type = 'checkbox' id = 'erdgeistInput' />
	<dl className="dl_hide" id = 'erdgeist'>
		<dt><cite>Erdgeist</cite></dt>
		<dd>by Frank Wedekind</dd>
		<dd>illustrated by Alastair</dd>
		<dd>George Muller Verlag, Munich, 1920</dd>
		<dd>edition of 500 copies</dd>
		<dd>12 illustrations, 1 endpaper design</dd>
		<dd className= 'method'>scanned from private collection by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#erdgeist'>erdgeist</a></dd>
	</dl>
	</label>

	<label htmlFor= 'racheInput'>
	<input type = 'checkbox' id = 'racheInput'/>
	<dl className="dl_hide" id = 'rache'>
		<dt><cite>Die Rache einer Frau</cite></dt>
		<dd>by Barbey d’Aurevilly</dd>
		<dd>illustrated by Alastair</dd>
		<dd>privately printed, Vienna, 1924</dd>
		<dd>9 illustrations</dd>
		<dd className= 'method'>scanned by the Special Collections Research Center at Southern Illinois University, Carbondale</dd>
		<dd className= 'hashtag'><a href = '#rache'>rache</a></dd>
	</dl>
	</label>

	<label htmlFor= 'storckInput'>
	<input type = 'checkbox' id = 'storckInput' />
	<dl className="dl_hide" id = 'storck'>
		<dt><cite>Sebastian van Storck</cite></dt>
		<dd>by Walter Pater</dd>
		<dd>illustrated by Alastair</dd>
		<dd>Im Avalun Verlag, Vienna, 1924</dd>
		<dd>edition of 480 copies</dd>
		<dd>7 illustrations, 1 half title</dd>
		<dt>reprinted</dt>
		<dd>introduced by PG Konody</dd>
		<dd>John Lane, London, 1927</dd>
		<dd>edition of 1050 copies</dd>
		<dd> 7 illustrations, 1 half title (duplicates, one signed in pencil)</dd>
		<dd className= 'method'>scanned from unknown library by Colin Foley and Blaine Glover</dd>
		<dt>reprinted</dt>
		<dd>Propyläen Verlag, Frankfurt am Main-Berlin-Vienna, 1974</dd>
		<dd>ISBN: 3549054343</dd>
		<dd>facsimile reprint of Im Avalun Verlag edition, edition of 400 copies</dd>
		<dd> 7 illustrations, 1 half title (duplicates)</dd>
		<dd className= 'hashtag'><a href = '#storck'>storck</a></dd>
	</dl>
	</label>

	<label htmlFor= 'salomeInput'>
	<input type = 'checkbox' id = 'salomeInput' />
	<dl className="dl_hide" id = 'salome'>
		<dt><cite>Salome</cite></dt>
		<dd>by Oscar Wilde</dd>
		<dd>illustrated by Alastair</dd>
		<dd>G Cres, Paris, 1925</dd>
		<dd>9 illustrations</dd>
		<dd className= 'method'>scanned from private collection by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#salome'>salome</a></dd>
	</dl>
	</label>

	<label htmlFor= 'fiftyInput'>
	<input type = 'checkbox' id = 'fiftyInput'/>
	<dl className="dl_hide" id = 'fifty'>
		<dt><cite>Fifty Drawings by Alastair</cite></dt>
		<dd>illustrated by Alastair</dd>
		<dd>introduced by Carl Van Vechten</dd>
		<dd>Alfred A Knopf, New York, 1925</dd>
		<dd>50 illustrations</dd>
		<dd className= 'method'>scanned in part from unknown library by Colin Foley and Blaine Glover</dd>
		<dd className= 'method'>remaining illustrations scanned from private collection by Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#fifty'>fifty</a></dd>
	</dl>
	</label>

	<label htmlFor= 'skeletonsInput'>
	<input type = 'checkbox' id = 'skeletonsInput' />
	<dl className="dl_hide" id = 'skeletons'>
		<dt><cite>Red Skeletons</cite></dt>
		<dd>by Harry Crosby</dd>
		<dd>illustrated by Alastair</dd>
		<dd>Editions Narcisse, Paris, 1927</dd>
		<dd>edition of 370 copies</dd>
		<dd>9 illustrations</dd>
		<dd className= 'method'>photocopied from Shields Library at the University of California, Davis</dd>
		<dd className= 'hashtag'><a href = '#skeletons'>skeletons</a></dd>
	</dl>
	</label>

	<label htmlFor= 'usherInput'>
	<input type = 'checkbox' id = 'usherInput' />
	<dl className="dl_hide" id = 'usher'>
		<dt><cite>The Fall of the House of Usher</cite></dt>
		<dd>by Edgar Allen Poe</dd>
		<dd>introduced by Arthur Symons</dd>
		<dd>illustrated by Alastair</dd>
		<dd>Editions Narcisse, Paris, 1928</dd>
		<dd>edition of 308 copy, including one on Japon paper with original drawings</dd>
		<dd>5 illustrations</dd>
		<dd className= 'method'>photocopied from Shields Library at the University of California, Davis</dd>
		<dd className= 'hashtag'><a href = '#usher'>usher</a></dd>
	</dl>
	</label>

	<label htmlFor= 'birthdayInput'>
	<input type = 'checkbox' id = 'birthdayInput' />
	<dl id = 'birthday' className= 'dl_hide notincollection'>
		<dt><cite>L’Anniversaire de L’Infante</cite></dt>
		<dd>by Oscar Wilde</dd>
		<dd>illustrated by Alastair</dd>
		<dd>Black Sun Press, Paris, 1928</dd>
		<dd>11 illustrations</dd>
		<dd className= 'method'>photographed by David A Beronä</dd>
		<dt>also printed in English</dt>
		<dt><cite>The Birthday of the Infanta</cite></dt>
		<dd>introduced by Harry Crosby</dd>
		<dd>not in collection</dd>
		<dd className= 'hashtag'><a href = '#birthday'>birthday</a></dd>
	</dl>
	</label>

	<label htmlFor= 'lescautInput'>
	<input type = 'checkbox' id = 'lescautInput' />
	<dl className="dl_hide" id = 'lescaut'>
		<dt><cite>Manon Lescaut</cite></dt>
		<dd>by Abbé Prévost</dd>
		<dd>introduced by Arthur Symons</dd>
		<dd>illustrated by Alastair</dd>
		<dd>John Lane, London, 1928</dd>
		<dd>edition of 1850 copies</dd>
		<dd>11 illustrations, 2 endpaper designs, 1 dust jacket</dd>
		<dd className= 'method'>photocopied in part from Shields Library at the University of California, Davis</dd>
		<dd className= 'method'>dust jacket photographed from private collection by Caliban Book Shop</dd>
		<dt>reprinted</dt>
		<dd>privately printed for Rarity Press, New York, 1933</dd>
		<dd>low-quality reprint</dd>
		<dd>7 illustrations (duplicates)</dd>
		<dd className= 'hashtag'><a href = '#lescaut'>lescaut</a></dd>
	</dl>
	</label>

	<label htmlFor= 'liaisonsInput'>
	<input type = 'checkbox' id = 'liaisonsInput' />
	<dl className="dl_hide" id = 'liaisons'>
		<dt><cite>Les Liaisons Dangereuses</cite></dt>
		<dd>by Choderlos de Laclos</dd>
		<dd>translated by Ernest Dowson</dd>
		<dd>illustrated by Alastair</dd>
		<dd>Black Sun Press, Paris, 1929</dd>
		<dd>2 volumes, edition of 1020 sets, including 15 on Japan paper</dd>
		<dd>14 illustrations</dd>
		<dd className= 'method'>photocopied from Shields Library at the University of California, Davis</dd>
		<dt>first volume reprinted</dt>
		<dt><cite>Dangerous Acquaintances</cite></dt>
		<dd>privately printed for William Godwin Inc, New York, 1933</dd>
		<dd>low-quality reprint</dd>
		<dd>7 illustrations (duplicates)</dd>
		<dd className= 'hashtag'><a href = '#liaisons'>liaisons</a></dd>
	</dl>
	</label>

	<h2>other illustrations published by Alastair</h2>

	<label htmlFor= 'hindv1i1Input'>
	<input type = 'checkbox' id = 'hindv1i1Input' />
	<dl className="dl_hide" id = 'hindv1i1'>
		<dt>The Golden Hind, volume 1, issue 1</dt>
		<dd>Chapman and Hall, London, 1922</dd>
		<dd>1 illustration (page 34)</dd>
		<dd className= 'method'>scanned from Earl Gregg Swem Library at the College of William and Mary</dd>
		<dt>reprinted</dt>
		<dd>Kraus Reprint, Nendeln, 1974</dd>
		<dd className= 'hashtag'><a href = '#hindv1i1'>hindv1i1</a></dd>
	</dl>
	</label>

	<label htmlFor= 'hindv1i4Input'>
	<input type = 'checkbox' id = 'hindv1i4Input' />
	<dl className="dl_hide" id = 'hindv1i4'>
		<dt>The Golden Hind, volume 1, issue 1</dt>
		<dd>Chapman and Hall, London, 1923</dd>
		<dd>2 illustrations (pages 8, 27)</dd>
		<dt>reprinted</dt>
		<dd>Kraus Reprint, Nendeln, 1974</dd>
		<dd className= 'method'>scanned from the University of Georgia by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#hindv1i4'>hindv1i4</a></dd>
	</dl>
	</label>

	<label htmlFor= 'hindv2i5Input'>
	<input type = 'checkbox' id = 'hindv2i5Input' />
	<dl className="dl_hide" id = 'hindv2i5'>
		<dt>The Golden Hind, volume 1, issue 1</dt>
		<dd>Chapman and Hall, London, 1923</dd>
		<dd>1 illustration (page 32)</dd>
		<dt>reprinted</dt>
		<dd>Kraus Reprint, Nendeln, 1974</dd>
		<dd className= 'method'>scanned from the University of Georgia by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#hindv2i5'>hindv2i5</a></dd>
	</dl>
	</label>


	<label htmlFor= 'ibidInput'>
	<input type = 'checkbox' id = 'ibidInput' />
	<dl  id = 'ibid' className= 'dl_hide notincollection'>
		<dt><cite>Ibid</cite>, volume 1, number 4</dt>
		<dd>1923</dd>
		<dd>2 illustrations (pages 8, 27)</dd>
		<dd>not in collection</dd>
		<dd className= 'hashtag'><a href = '#ibid'>ibid</a></dd>
	</dl>
	</label>

	<h2>writing by Alastair</h2>

	<label htmlFor= 'wegInput'>
	<input type = 'checkbox' id = 'wegInput' />
	<dl className="dl_hide" id = 'weg'>
		<dt>Der Weg, issue 4 (1919)</dt>
		<dd>Munich, 1919</dd>
		<dd>1 poem by Alastair (page 2)</dd>
		<dd className= 'method'>scanned from the University of Michigan by Google</dd>
		<dd className= 'hashtag'><a href = '#weg'>weg</a></dd>
	</dl>
	</label>

	<label htmlFor= 'valleyInput'>
	<input type = 'checkbox' id = 'valleyInput' />
	<dl className="dl_hide" id = 'valley'>
		<dt><cite>Das Flammende Tal</cite></dt>
		<dd>by Alastair</dd>
		<dd>Hyperion Verlag, Munich, 1920</dd>
		<dd>edition of 680 copies</dd>
		<dd>poems by Alastair</dd>
		<dd className= 'method'>scanned from <a href = 'http://babel.hathitrust.org/cgi/pt?id=njp.32101066384304'>Princeton University by Google</a></dd>
		<dd className= 'hashtag'><a href = '#valley'>valley</a></dd>
	</dl>
	</label>

	<label htmlFor= 'verwandlungenInput'>
	<input type = 'checkbox' id = 'verwandlungenInput' />
	<dl className="dl_hide" id = 'verwandlungen'>
		<dt><cite>Die Verwandlungen des Dandy</cite></dt>
		<dd>by Alastair</dd>
		<dd>published in Styl, volumes 5/6 (1923)</dd>
		<dd>Verlag Otto von Holten, Berlin, 1923</dd>
		<dd>7 illustrations</dd>
		<dd className= 'hashtag'><a href = '#verwandlungen'>verwandlungen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'horen1Input'>
	<input type = 'checkbox' id = 'horen1Input' />
	<dl  id = 'horen1' className= 'dl_hide notincollection'>
		<dt>Die Horen: Zweimonatshefte für Kunst und Dichtung, volume 3</dt>
		<dd>edited by Hanns Martin Elster and Wilhelm von Scholz</dd>
		<dd>Horen-Verlag, Berlin, 1927</dd>
		<dd>poems by Alastair (pages 21 to 24)</dd>
		<dd>not in collection</dd>
		<dd className= 'hashtag'><a href = '#horen1'>horen1</a></dd>
	</dl>
	</label>

	<label htmlFor= 'horen2Input'>
	<input type = 'checkbox' id = 'horen2Input' />
	<dl id = 'horen2' className= 'dl_hide notincollection'>
		<dt>Die Horen: Zweimonatshefte für Kunst und Dichtung, volume 3</dt>
		<dd>edited by Hanns Martin Elster and Wilhelm von Scholz</dd>
		<dd>Horen-Verlag, Berlin, 1929</dd>
		<dd>poems by Alastair (pages 842 to 846, 857 to 869)</dd>
		<dd>not in collection</dd>
		<dd className= 'hashtag'><a href = '#horen2'>horen2</a></dd>
	</dl>
	</label>

	<label htmlFor= 'neueInput'>
	<input type = 'checkbox' id = 'neueInput' />
	<dl id = 'neue' className= 'dl_hide notincollection'>
		<dt>Neue Schweizer Rundschau: Nouvelle Revue Suisse, volume 24, issue 12 (December)</dt>
		<dd>Verlag der Neuen Schweizer Rundschau, Zürich, 1931</dd>
		<dd>poems by Alastair (pages 943 to 946)</dd>
		<dd>not in collection</dd>
		<dd className= 'hashtag'><a href = '#neue'>neue</a></dd>
	</dl>
	</label>

	<h2>translations by Alastair</h2>

	<label htmlFor= 'sundeInput'>
	<input type = 'checkbox' id = 'sundeInput' />
	<dl className="dl_hide" id = 'sunde'>
		<dt><cite>Die Sünde des Abbe Mouret</cite></dt>
		<dd>translation of <cite>La Faute de l’abbe Mouret</cite></dd>
		<dd>by Emile Zola</dd>
		<dd>Kurt Wolff, Munich, 1922</dd>
		<dd className= 'hashtag'><a href = '#sunde'>sunde</a></dd>
	</dl>
	</label>

	<label htmlFor= 'mumieInput'>
	<input type = 'checkbox' id = 'mumieInput' />
	<dl className="dl_hide" id = 'mumie'>
		<dt><cite>Der Roman der Mumie</cite></dt>
		<dd>translation of <cite>Le Roman de la momie</cite></dd>
		<dd>by Théophile Gautier</dd>
		<dd>Avalun, Hellerau, 1925</dd>
		<dd className= 'hashtag'><a href = '#mumie'>mumie</a></dd>
	</dl>
	</label>

	<label htmlFor= 'jettaturaInput'>
	<input type = 'checkbox' id = 'jettaturaInput' />
	<dl className="dl_hide" id = 'jettatura'>
		<dt><cite>Jettatura</cite></dt>
		<dd>by Théophile Gautier</dd>
		<dd>Avalun, Hellerau, 1925</dd>
		<dd className= 'hashtag'><a href = '#jettatura'>jettatura</a></dd>
	</dl>
	</label>

	<label htmlFor= 'avatarInput'>
	<input type = 'checkbox' id = 'avatarInput' />
	<dl className="dl_hide" id = 'avatar'>
		<dt><cite>Avatar</cite></dt>
		<dd>by Théophile Gautier</dd>
		<dd>Avalun, Hellerau, 1925</dd>
		<dt>reprinted</dt>
		<dd>Suhrkamp-Taschenbuch 1161 & Phantastische Bibliothek 153</dd>
		<dd>Suhrkamp Taschenbuch-Verlag, Frankfurt, 1985</dd>
		<dd>ISBN: 3518376616</dd>
		<dd className= 'hashtag'><a href = '#avatar'>avatar</a></dd>
	</dl>
	</label>

	<label htmlFor= 'maupinInput'>
	<input type = 'checkbox' id = 'maupinInput' />
	<dl className="dl_hide" id = 'maupin'>
		<dt><cite>Mademoiselle de Maupin</cite></dt>
		<dd>by Théophile Gautier</dd>
		<dd>Avalun, Hellerau, 1926</dd>
		<dt>reprinted</dt>
		<dd>illustrated by Karl Walser</dd>
		<dd>Goverts, Stuttgart, 1965</dd>
		<dt>reprinted</dt>
		<dd>Goldmanns gelbe Taschenbücher 2485 / 2486</dd>
		<dd>Goldmann, Munich & Lizenz des Goverts Verlags, Stuttgart, 1969</dd>
		<dt>reprinted</dt>
		<dd>Knaur 2533</dd>
		<dd>Droemer Knaur, Munich, 1987</dd>
		<dd className= 'hashtag'><a href = '#maupin'>maupin</a></dd>
	</dl>
	</label>

	<label htmlFor= 'unschuldigenInput'>
	<input type = 'checkbox' id = 'unschuldigenInput' />
	<dl className="dl_hide" id = 'unschuldigen'>
		<dt><cite>Die Unschuldigen</cite></dt>
		<dd>by Comtesse de Noailles</dd>
		<dd>Kurt Wolff, Munich, 1926</dd>
		<dd className= 'hashtag'><a href = '#unschuldigen'>unschuldigen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'horenInput'>
	<input type = 'checkbox' id = 'horenInput' />
	<dl className="dl_hide" id = 'horen'>
		<dt><cite>Die Horen: Zweimonatshefte für Kunst und Dichtung</cite>, volume 3</dt>
		<dd>edited by Hanns Martin Elster and Wilhelm von Scholz</dd>
		<dd>Horen-Verlag, Berlin, 1927</dd>
		<dd>poems by Gerard de Nerval (page 23)</dd>
		<dd className= 'hashtag'><a href = '#horen'>horen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'rundschau1Input'>
	<input type = 'checkbox' id = 'rundschau1Input' />
	<dl className="dl_hide" id = 'rundschau1'>
		<dt><cite>Neue Schweizer Rundschau: Nouvelle Revue Suisse</cite> (1930)</dt>
		<dd>Verlag der Neuen Schweizer Rundschau, Zürich, 1930</dd>
		<dd>Chamber Music by James Joyce</dd>
		<dd className= 'hashtag'><a href = '#rundschau1'>rundschau1</a></dd>
	</dl>
	</label>

	<label htmlFor= 'rundschau2Input'>
	<input type = 'checkbox' id = 'rundschau2Input' />
	<dl className="dl_hide" id = 'rundschau2'>
		<dt><cite>Neue Schweizer Rundschau: Nouvelle Revue Suisse</cite>, volume 24, issue 2</dt>
		<dd>Verlag der Neuen Schweizer Rundschau, Zürich, 1931</dd>
		<dd>poetry by Jean Cocteau</dd>
		<dd className= 'hashtag'><a href = '#rundschau2'>rundschau2</a></dd>
	</dl>
	</label>

	<label htmlFor= 'undheiligeInput'>
	<input type = 'checkbox' id = 'undheiligeInput' />
	<dl className="dl_hide" id = 'undheilige'>
		<dt><cite>Johanna, Ketzerin und Heilige</cite></dt>
		<dd>translation of <cite>Jeanne, relapse et sainte</cite></dd>
		<dd>by Georges Bernanos</dd>
		<dd>Hegner, Leipzig, 1934</dd>
		<dd className= 'hashtag'><a href = '#undheilige'>undheilige</a></dd>
	</dl>
	</label>

	<label htmlFor= 'jungfrauInput'>
	<input type = 'checkbox' id = 'jungfrauInput' />
	<dl className="dl_hide" id = 'jungfrau'>
		<dt><cite>Johanna, die Jungfrau: Die Übersetzung und Bearbeitung aus den lateinischen und französischen Texten von Alastair</cite></dt>
		<dd>Barth, Planegg, 1935</dd>
		<dt>reprinted</dt>
		<dd>Rinn, Munich, 1956</dd>
		<dd className= 'hashtag'><a href = '#jungfrau'>jungfrau</a></dd>
	</dl>
	</label>

	<label htmlFor= 'saatInput'>
	<input type = 'checkbox' id = 'saatInput' />
	<dl className="dl_hide" id = 'saat'>
		<dt><cite>Saat im Sturm. Lebensbild des Edmund Campion aus der Zeit Elisabeths von England</cite></dt>
		<dd>translation of <cite>Edmund Campion</cite></dd>
		<dd>by Evelyn Waugh	</dd>
		<dd>Kösel & Pustet, Munich, 1938</dd>
		<dd className= 'hashtag'><a href = '#saat'>saat</a></dd>
	</dl>
	</label>

	<label htmlFor= 'mariastuartInput'>
	<input type = 'checkbox' id = 'mariastuartInput' />
	<dl className="dl_hide" id = 'mariastuart'>
		<dt><cite>Maria Stuart: Ich flehe, ich fordere, ich bekenne!: Der Königin Briefe</cite></dt>
		<dd>introduced by Einleitung von Werner Picht</dd>
		<dd>Verlags-Anstalt Hütig, Leipzig & Berlin & Heidelberg, 1940, 1941 & 1942 & 1943</dd>
		<dt>reprinted in part</dt>
		<dd>introduced by Einleitung von Werner Picht</dd>
		<dd>Steingrüben Verlag, Stuttgart, 1961</dd>
		<dd className= 'hashtag'><a href = '#mariastuart'>mariastuart</a></dd>
	</dl>
	</label>

	<label htmlFor= 'verbundetInput'>
	<input type = 'checkbox' id = 'verbundetInput' />
	<dl className="dl_hide" id = 'verbundet'>
		<dt><cite>Geist und Herz verbündet, Metternichs Briefe an die Gräfin Lieven</cite></dt>
		<dd>by Klemens Wenzel von Metternich</dd>
		<dd>Andermann, Vienna, 1942</dd>
		<dd className= 'hashtag'><a href = '#verbundet'>verbundet</a></dd>
	</dl>
	</label>

	<label htmlFor= 'cinqmarsInput'>
	<input type = 'checkbox' id = 'cinqmarsInput' />
	<dl className="dl_hide" id = 'cinqmars'>
		<dt><cite>Cinq-Mars: Roman</cite></dt>
		<dd>translation of <cite>Cinq-Mars ou Une conjuration sous Louis XIII</cite></dd>
		<dd>by Alfred de Vigny</dd>
		<dd>Hoffmann & Campe, Hamburg, 1948</dd>
		<dd className= 'hashtag'><a href = '#cinqmars'>cinqmars</a></dd>
	</dl>
	</label>

	<label htmlFor= 'bildnisInput'>
	<input type = 'checkbox' id = 'bildnisInput' />
	<dl className="dl_hide" id = 'bildnis'>
		<dt><cite>Das Bildnis des Dorian Gray</cite></dt>
		<dd>translation of <cite>The Picture of Dorian Gray</cite></dd>
		<dd>by Oscar Wilde</dd>
		<dd>Lingua Verlag, Konstanz, 1948</dd>
		<dd className= 'hashtag'><a href = '#bildnis'>bildnis</a></dd>
	</dl>
	</label>

	<label htmlFor= 'cromwellInput'>
	<input type = 'checkbox' id = 'cromwellInput ' />
	<dl className="dl_hide" id = 'cromwell'>
		<dt><cite>Carl und Cromwell</cite></dt>
		<dd>translation of <cite>Charles and Cromwell</cite></dd>
		<dd>by Hugh Ross Williamson</dd>
		<dd>Hoffmann & Campe, Hamburg, 1948</dd>
		<dd className= 'hashtag'><a href = '#cromwell'>cromwell</a></dd>
	</dl>
	</label>

	<label htmlFor= 'undheilige2Input'>
	<input type = 'checkbox' id = 'undheilige2Input ' />
	<dl className="dl_hide" id = 'undheilige2'>
		<dt><cite>Johanna, Ketzerin und Heilige</cite> (Die kleinen Bücher der Arche; 93/94),</dt>
		<dd>by Georges Bernanos</dd>
		<dd>Verlag der Arche, Zürich, 1949</dd>
		<dd className= 'hashtag'><a href = '#undheilige2'>undheilige2</a></dd>
	</dl>
	</label>

	<label htmlFor= 'andernInput'>
	<input type = 'checkbox' id = 'andernInput' />
	<dl className="dl_hide" id = 'andern'>
		<dt><cite>... der nicht mit den andern ging</cite></dt>
		<dd>translation of <cite>Roux, le bandit</cite></dd>
		<dd>by Andre Chamson</dd>
		<dd>Hoffmann & Campe, Hamburg, 1949</dd>
		<dd className= 'hashtag'><a href = '#andern'>andern</a></dd>
	</dl>
	</label>

	<label htmlFor= 'gebannteInput'>
	<input type = 'checkbox' id = 'gebannteInput' />
	<dl className="dl_hide" id = 'gebannte'>
		<dt><cite>Die Gebannte</cite></dt>
		<dd>translation of <cite>L'Ensorcelée</cite></dd>
		<dd>by Barbey d’Aurevilly</dd>
		<dd>Lingua Verlag, Konstanz, 1950</dd>
		<dt>reprinted</dt>
		<dd>Greno zehn, zwanzig 81</dd>
		<dd>Greno, Nördlingen, 1988</dd>
		<dd className= 'hashtag'><a href = '#gebannte'>gebannte</a></dd>
	</dl>
	</label>

	<label htmlFor= 'schneeInput'>
	<input type = 'checkbox' id = 'schneeInput' />
	<dl className="dl_hide" id = 'schnee'>
		<dt><cite>Blüte unterm Schnee</cite></dt>
		<dd>translation of <cite>La Neige et la fleur</cite></dd>
		<dd>by Andre Chamson</dd>
		<dd>Deutsche Verlags-Anstalt, Stuttgart, 1953</dd>
		<dd className= 'hashtag'><a href = '#schnee'>schnee</a></dd>
	</dl>
	</label>

	<label htmlFor= 'verzweifelteInput'>
	<input type = 'checkbox' id = 'verzweifelteInput' />
	<dl className="dl_hide" id = 'verzweifelte'>
		<dt><cite>Der Verzweifelte</cite></dt>
		<dd>translation of <cite>Le Désespéré</cite></dd>
		<dd>by Léon Bloy</dd>
		<dd>Kerle, Heidelberg, 1954</dd>
		<dd className= 'hashtag'><a href = '#verzweifelte'>verzweifelte</a></dd>
	</dl>
	</label>

	<label htmlFor= 'diekleineInput'>
	<input type = 'checkbox' id = 'diekleineInput' />
	<dl className="dl_hide" id = 'diekleine'>
		<dt><cite>Die kleine Heilige</cite></dt>
		<dd>translation of <cite>La petite Sainte Therese</cite></dd>
		<dd>by Maxence Van der Meersch</dd>
		<dd>Kiepen-heuer & Witsch, Cologne, 1954</dd>
		<dd className= 'hashtag'><a href = '#diekleine'>diekleine</a></dd>
	</dl>
	</label>

	<label htmlFor= 'betenInput'>
	<input type = 'checkbox' id = 'betenInput' />
	<dl className="dl_hide" id = 'beten'>
		<dt><cite>Herr, lehre uns beten</cite></dt>
		<dd>translation of <cite>Seigneur, apprenez-nous ä prier</cite></dd>
		<dd>by Paul Claudel</dd>
		<dd>Kerle, Heidelberg, 1955</dd>
		<dd className= 'hashtag'><a href = '#beten'>beten</a></dd>
	</dl>
	</label>

	<label htmlFor= 'spiegelInput'>
	<input type = 'checkbox' id = 'spiegelInput' />
	<dl className="dl_hide" id = 'spiegel'>
		<dt><cite>Schwert und Spiegel</cite></dt>
		<dd>translation of <cite>L'épée et le miroir</cite></dd>
		<dd>by Paul Claudel</dd>
		<dd>Kerle, Heidelberg, 1955</dd>
		<dd className= 'hashtag'><a href = '#spiegel'>spiegel</a></dd>
	</dl>
	</label>

	<label htmlFor= 'seelenwagerInput'>
	<input type = 'checkbox' id = 'seelenwagerInput' />
	<dl className="dl_hide" id = 'seelenwager'>
		<dt><cite>Der Seelenwäger: Eine phantastische Erzählung</cite> (Reclams Universal-Bibliothek 7833)</dt>
		<dd>translation of <cite>Le Peseur d’ämes</cite></dd>
		<dd>by André Maurois</dd>
		<dd>Reclam, Stuttgart, 1956</dd>
		<dd className= 'hashtag'><a href = '#seelenwager'>seelenwager</a></dd>
	</dl>
	</label>

	<label htmlFor= 'gebetesInput'>
	<input type = 'checkbox' id = 'gebetesInput' />
	<dl className="dl_hide" id = 'gebetes'>
		<dt><cite>Die unerschütterliche Hilfe. Macht und Wirkung des Gebetes (Dokumente religiöser Erfahrung)</cite></dt>
		<dd>translation of <cite>La Priee</cite></dd>
		<dd>OW Barth, Planegg, 1957</dd>
		<dd className= 'hashtag'><a href = '#gebetes'>gebetes</a></dd>
	</dl>
	</label>

	<label htmlFor= 'glaubeInput'>
	<input type = 'checkbox' id = 'glaubeInput' />
	<dl className="dl_hide" id = 'glaube'>
		<dt><cite>Was ich glaube</cite></dt>
		<dd>translation of <cite>Ce que je crois</cite></dd>
		<dd>by Luc Estang</dd>
		<dd>Kerle, Heidelberg, 1958</dd>
		<dd className= 'hashtag'><a href = '#glaube'>glaube</a></dd>
	</dl>
	</label>

	<label htmlFor= 'meistererzahlungenInput'>
	<input type = 'checkbox' id = 'meistererzahlungenInput' />
	<dl className="dl_hide" id = 'meistererzahlungen'>
		<dt><cite>Meistererzählungen (Manesse Bibliothek der Weltliteratur)</cite></dt>
		<dd>by Robert Louis Stevenson</dd>
		<dd>afterword by Richard Kraushaar</dd>
		<dd>Manesse Verlag, Zürich, 1958</dd>
		<dt>reprinted</dt>
		<dd>Manesse Verlag, Zürich, 1986</dd>
		<dt>reprinted in part as Der seltsame Fall des Dr. Jekyll und Mr. Hyde</dt>
		<dd>translation of <cite>The Strange Case of Dr. Jekyll and Mr. Hyde</cite></dd>
		<dd>Manesse Verlag, Zürich, 2001</dd>
		<dt>recorded in part for audio</dt>
		<dd>Verlag und Studio für Hörbuchproduktionen, Marburg, 2003</dd>
		<dt>recorded in part for audio as <cite>Quartier für eine Nacht. Aus dem Leben Frangois Villons</cite></dt>
		<dd>translation of <cite>A Lodging for the Night</cite></dd>
		<dd>Verlag und Studio für Hörbuchproduktionen, Marburg, 2004</dd>
		<dd className= 'hashtag'><a href = '#meistererzahlungen'>meistererzahlungen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'samuraiInput'>
	<input type = 'checkbox' id = 'samuraiInput' />
	<dl className="dl_hide" id = 'samurai'>
		<dt><cite>Der Sohn des Samurai: Das Leben des Sessue Hayakawa</cite></dt>
		<dd>Goverts, Stuttgart, 1963</dd>
		<dt>reprinted</dt>
		<dd>Deutsche Buch-Gemeinschaft, Berlin u a, 1965</dd>
		<dd className= 'hashtag'><a href = '#samurai'>samurai</a></dd>
	</dl>
	</label>

	<label htmlFor= 'bernhardInput'>
	<input type = 'checkbox' id = 'bernhardInput'/>
	<dl className="dl_hide" id = 'bernhard'>
		<dt><cite>Bernhard von Clairvaux und seine Söhne</cite></dt>
		<dd>by Henri Daniel-Rops</dd>
		<dd>Kerle, Heidelberg, 1964</dd>
		<dd className= 'hashtag'><a href = '#bernhard'>bernhard</a></dd>
	</dl>
	</label>

	<label htmlFor= 'kreuzzugInput'>
	<input type = 'checkbox' id = 'kreuzzugInput' />
	<dl className="dl_hide" id = 'kreuzzug'>
		<dt><cite>Das Drama von Albi: Der Kreuzzug gegen die Albigenser und das Schicksal Frankreichs</cite></dt>
		<dd>translation of <cite>Le Drame albigeois et le destin francais</cite></dd>
		<dd>by Jacques Madaule</dd>
		<dd>afterword by Karl Rinderknecht</dd>
		<dd>co-translated by Olten Helene Henze</dd>
		<dd>Walter, Freiburg im Breisgau, 1964</dd>
		<dd className= 'hashtag'><a href = '#kreuzzug'>kreuzzug</a></dd>
	</dl>
	</label>

	<h2>other information on Alastair</h2>

	<label htmlFor= 'dailymailInput'>
	<input type = 'checkbox' id = 'dailymailInput' />
	<dl className="dl_hide" id = 'dailymail'>
		<dt><cite>“Alastair”: Mystery of a New Artist</cite></dt>
		<dd>by PG Konody</dd>
		<dd>pubished in the Daily Mail (issue 5338, page 5)</dd>
		<dd>16 May 1913</dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dd className= 'hashtag'><a href = '#dailymail'>dailymail</a></dd>
	</dl>
	</label>

	<label htmlFor= 'dailycallInput'>
	<input type = 'checkbox' id = 'dailycallInput' />
	<dl className="dl_hide" id = 'dailycall'>
		<dt><cite>Alastair, Eccentric Artist</cite></dt>
		<dd>published in the Pittsburgh Press</dd>
		<dd>3 August 1913</dd>
		<dd>4 illustrations</dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dt>reprinted</dt>
		<dd>published in the San Francisco Daily Call (volume 114, number 85, page 2)</dd>
		<dd>24 August 1913</dd>
		<dd className= 'method'>scanned by the <a href = 'http://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=SFC19130824'>California Digital Newspaper Collection</a></dd>
		<dd className= 'hashtag'><a href = '#dailycall'>dailycall</a></dd>
	</dl>
	</label>

	<label htmlFor= 'burlingtonInput'>
	<input type = 'checkbox' id = 'burlingtonInput' />
	<dl className="dl_hide" id = 'burlington'>
		<dt>The Burlington Magazine, volume 24 (October 1913 to March 1914)</dt>
		<dd>The Burlington Magazine, London, 1913</dd>
		<dd>review of <cite>Forty-Three Drawings by Alastair</cite> (pages 353 to 354)</dd>
		<dd className= 'hashtag'><a href = '#burlington'>burlington</a></dd>
	</dl>
	</label>

	<label htmlFor= 'nytribuneInput'>
	<input type = 'checkbox' id = 'nytribuneInput' />
	<dl className="dl_hide" id = 'nytribune'>
		<dt><cite>Charles Condor and Some Other Modern Types</cite></dt>
		<dd>by Royal Cortissoz</dd>
		<dd>published in the New York Tribune (page 6V)</dd>
		<dd>13 December 1913</dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dd className= 'hashtag'><a href = '#nytribune'>nytribune</a></dd>
	</dl>
	</label>

	<label htmlFor= 'nytimesInput'>
	<input type = 'checkbox' id = 'nytimesInput' />
	<dl className="dl_hide" id = 'nytimes'>
		<dt><cite>A Book About Alastair</cite></dt>
		<dd>published in the New York Times (page 15)</dd>
		<dd>14 December 1913</dd>
		<dd>review of <cite>Forty-Three Drawings by Alastair</cite></dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dd className= 'hashtag'><a href = '#nytimes'>nytimes</a></dd>
	</dl>
	</label>

	<label htmlFor= 'latimesInput'>
	<input type = 'checkbox' id = 'latimesInput' />
	<dl className="dl_hide" id = 'latimes'>
		<dt><cite>Frantic Art</cite></dt>
		<dd>published in the Los Angeles Times (page 25)</dd>
		<dd>21 December 1913</dd>
		<dd>review of <cite>Forty-Three Drawings by Alastair</cite></dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dd className= 'hashtag'><a href = '#latimes'>latimes</a></dd>
	</dl>
	</label>

	<label htmlFor= 'leicesterInput'>
	<input type = 'checkbox' id = 'leicesterInput' />
	<dl className="dl_hide" id = 'leicester'>
		<dt>Catalogue of an Exhibition of New Drawings by Alastair</dt>
		<dd>catalogue for June 1914 exhibition at the Leicester Galleries</dd>
		<dd>Ernest Brown & Phillips, London, 1914</dd>
		<dd className= 'method'>scanned by the Brooklyn Institute of Arts and Sciences</dd>
		<dd className= 'hashtag'><a href = '#leicester'>leicester</a></dd>
	</dl>
	</label>

	<label htmlFor= 'indianapolisInput'>
	<input type = 'checkbox' id = 'indianapolisInput' />
	<dl className="dl_hide" id = 'indianapolis'>
		<dt><cite>The Strange Art of the Mysterious “Alastair”</cite></dt>
		<dd>published by the Indianapolis Star</dd>
		<dd>18 April 1915</dd>
		<dd>scanned by <a href = "http://www.newspapers.com">Newspapers.com</a></dd>
		<dd className= 'hashtag'><a href = '#indianapolis'>indianapolis</a></dd>
	</dl>
	</label>

	<label htmlFor= 'weyheInput'>
	<input type = 'checkbox' id = 'weyheInput' />
	<dl className="dl_hide" id = 'weyhe'>
		<dt><cite>Drawings by Alastair</cite></dt>
		<dd>catalogue for 26 October to 7 November 1925 exhibition at the Weyhe Gallery</dd>
		<dd>New York, 1925</dd>
		<dd>1 illustration (duplicate)</dd>
		<dd className= 'method'>scanned by the Brooklyn Institute of Arts and Sciences</dd>
		<dd className= 'hashtag'><a href = '#weyhe'>weyhe</a></dd>
	</dl>
	</label>

	<label htmlFor= 'artnewsInput'>
	<input type = 'checkbox' id = 'artnewsInput' />
	<dl className="dl_hide" id = 'artnews'>
		<dt>The Art News (31 October 1925)</dt>
		<dd>article by Dr Charles Fleischer</dd>
		<dd>review of Weyhe Gallery exhibition</dd>
		<dd className= 'hashtag'><a href = '#artnews'>artnews</a></dd>
	</dl>
	</label>

	<label htmlFor= 'dailyeagleInput'>
	<input type = 'checkbox' id = 'dailyeagleInput' />
	<dl className="dl_hide" id = 'dailyeagle'>
		<dt>Remarkable Drawings by the Mysterious Alastair</dt>
		<dd>published in the Broklyn Daily Eagle (page 6E)</dd>
		<dd>1 November 1925</dd>
		<dd className= 'hashtag'><a href = '#dailyeagle'>dailyeagle</a></dd>
	</dl>
	</label>

	<label htmlFor= 'knopfadInput'>
	<input type = 'checkbox' id = 'knopfadInput' />
	<dl className="dl_hide" id = 'knopfad'>
		<dt>advertisement for <cite>Fifty Drawings by Alastair</cite></dt>
		<dd>Alfred A Knopf, New York, 1925</dd>
		<dd>2 illustrations (duplicate)</dd>
		<dd className= 'method'>scanned by the Brooklyn Institute of Arts and Sciences</dd>
		<dd className= 'hashtag'><a href = '#knopfad'>knopfad</a></dd>
	</dl>
	</label>

	<label htmlFor= 'milanoInput'>
	<input type = 'checkbox' id = 'milanoInput' />
	<dl className="dl_hide" id = 'milano'>
		<dt><cite>Alastair: L’homme sur la bouteille</cite></dt>
		<dd>by Franco Passoni</dd>
		<dd>catalogue for 12 December 1967 exhibition at the Galleria Milano</dd>
		<dd>Milan, 1967</dd>
		<dd>4 illustrations</dd>
		<dd className= 'method'>scanned from the Getty Research Institute by Colin Foley and Janet Foley</dd>
		<dd className= 'hashtag'><a href = '#milano'>milano</a></dd>
	</dl>
	</label>

	<label htmlFor= 'miniaturenInput'>
	<input type = 'checkbox' id = 'miniaturenInput' />
	<dl className="dl_hide" id = 'miniaturen'>
		<dt><cite>Alastair: Magische Miniaturen</cite></dt>
		<dd>by Siegfried Wichmann</dd>
		<dd>catalogue for December 1968 to January 1969 exhibition at the Galleria del Levante</dd>
		<dd>Munich, 1968</dd>
		<dd>4 illustrations</dd>
		<dd className= 'method'>scanned from the Zentralinstitut fuer Kunstgeschichte by Rosa Weis</dd>
		<dd className= 'hashtag'><a href = '#miniaturen'>miniaturen</a></dd>
	</dl>
	</label>

	<label htmlFor= 'badenInput'>
	<input type = 'checkbox' id = 'badenInput' />
	<dl className="dl_hide" id = 'baden'>
		<dt><cite>Alchemie der Graphik: Alastair in Baden-Baden</cite></dt>
		<dd>published in Die Weltkunst, issue 39</dd>
		<dd>Munich, 1969</dd>
		<dd>1 illustration</dd>
		<dd className= 'method'>scanned from the Sacramento State University Library by Colin Foley and Patrick Foley</dd>
		<dd className= 'hashtag'><a href = '#baden'>baden</a></dd>
	</dl>
	</label>

	<label htmlFor= 'interviewInput'>
	<input type = 'checkbox' id = 'interviewInput' />
	<dl  id = 'interview' className= 'dl_hide notincollection'>
		<dt><cite>Alastair</cite></dt>
		<dd>by Peter Berling</dd>
		<dd>filmed interview with Alastair</dd>
		<dd>directed by Günter Lemmer</dd>
		<dd>FIOR Film GmbH, Munich, 1966</dd>
		<dd>1 illustration</dd>
		<dd className= 'method'>not in collection</dd>
		<dd className= 'hashtag'><a href = '#interview'>interview</a></dd>
	</dl>
	</label>

	<label htmlFor= 'dreamersInput'>
	<input type = 'checkbox' id = 'dreamersInput' />
	<dl className="dl_hide" id = 'dreamers'>
		<dt><cite>Dreamers of Decadence: Symbolist painters of the 1890s</cite></dt>
		<dd>by Philippe Jullian</dd>
		<dd>Praeger Publishers, New York, 1971</dd>
		<dd>ISBN: 0714816515</dd>
		<dd>1 illustration by Alastair (duplicate)</dd>
		<dd className= 'method'>held in private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#dreamers'>dreamers</a></dd>
	</dl>
	</label>

	<label htmlFor= 'postersInput'>
	<input type = 'checkbox' id = 'postersInput' />
	<dl className="dl_hide" id = 'posters'>
		<dt><cite>Posters 1900</cite></dt>
		<dd>by Siegfried Wichmann</dd>
		<dd>St Martin's Press, New York, 1971</dd>
		<dd>2 illustrations by Alastair (duplicates)</dd>
		<dd className= 'method'>photographed by Patrick Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#posters'>posters</a></dd>
	</dl>
	</label>

	<label htmlFor= 'shadowsInput'>
	<input type = 'checkbox' id = 'shadowsInput' />
	<dl className="dl_hide" id = 'shadows'>
		<dt><cite>Shadows of the Sun: The Diaries of Harry Crosby</cite></dt>
		<dd>edited by Edward Germain</dd>
		<dd>Black Sparrow Press, Santa Barbara, 1976</dd>
		<dd>ISBN: 0876853033</dd>
		<dd>records meetings between Harry Crosby and Alastair</dd>
		<dd className= 'method'>held in private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#shadows'>shadows</a></dd>
	</dl>
	</label>

	<label htmlFor= 'decadenceInput'>
	<input type = 'checkbox' id = 'decadenceInput' />
	<dl className="dl_hide" id = 'decadence'>
		<dt><cite>Alastair: Illustrator of Decadence</cite></dt>
		<dd>by Victor Arwas</dd>
		<dd>Thames and Hudson, London, 1979</dd>
		<dd>ISBN: 0500271526</dd>
		<dd>illustrations by Alastair</dd>
		<dd className= 'method'>scanned from private collection by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#decadence'>decadence</a></dd>
	</dl>
	</label>

	<label htmlFor= 'kunstInput'>
	<input type = 'checkbox' id = 'kunstInput' />
	<dl className="dl_hide" id = 'kunst'>
		<dt><cite>Alastair: Kunst als Schicksal</cite></dt>
		<dd>edited by Ines Janet Engelmann</dd>
		<dd>introduced by Katja Schneider</dd>
		<dd>with text from Hans Werhahn</dd>
		<dd>Kunstmuseum des Landes Sachsen-Anhalt, Halle, 2004</dd>
		<dd>ISBN: 3861050889</dd>
		<dd>illustrations by Alastair</dd>
		<dd className= 'method'>scanned from private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#kunst'>kunst</a></dd>
	</dl>
	</label>

	<label htmlFor= 'aprilprogrammInput'>
	<input type = 'checkbox' id = 'aprilprogrammInput' />
	<dl className="dl_hide" id = 'aprilprogramm'>
		<dt>Bayerische Akademie der Schönen Künste Monats-programm April/Mai 2007</dt>
		<dd>monthly program for the Bavarian Academy of Fine Arts</dd>
		<dd>Bayerische Akademie der Schönen Künste, Munich, 2007</dd>
		<dd>put online by <a href = "http://www.badsk.de/archiv/2007/pdfmai07/7.5.pdf">the Bayerische Akademie der Schönen Künste</a></dd>
		<dd className= 'hashtag'><a href = '#aprilprogramm'>aprilprogramm</a></dd>
	</dl>
	</label>

	<label htmlFor= 'casatiInput'>
	<input type = 'checkbox' id = 'casatiInput' />
	<dl className="dl_hide" id = 'casati'>
		<dt><cite>The Marchesa Casati: Portraits of a Muse</cite></dt>
		<dd>by Scot D Ryersson and Michael Orlando Yaccarino</dd>
		<dd>Abrams, New York, 2009</dd>
		<dd>ISBN: 081094815X</dd>
		<dd>1 illustration by Alastair</dd>
		<dd className= 'method'>scanned from McHenry Library at the University of California, Santa Cruz by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#casati'>casati</a></dd>
	</dl>
	</label>

	<label htmlFor= 'stylInput'>
	<input type = 'checkbox' id = 'stylInput' />
	<dl className="dl_hide" id = 'styl'>
		<dt>STYL: Das Modejournal der frühen 1920er Jahre</dt>
		<dd>by Adelheid Rasche and Anna Zika</dd>
		<dd>Arnoldsche, Stuttgart, 2009</dd>
		<dd>reprints in part <cite>Die Verwandlungen des Dandy</cite></dd>
		<dd className= 'method'>photographed from unknown library by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#styl'>styl</a></dd>
	</dl>
	</label>

	<label htmlFor= 'mannInput'>
	<input type = 'checkbox' id = 'mannInput' />
	<dl className="dl_hide" id = 'mann'>
		<dt><cite>Mann für Mann: Biographisches Lexikon zur Geschichte von Freundesliebe und mannmännlicher Sexualität im deutschen Sprachraum</cite></dt>
		<dd>by Bernd-Ulrich Hergemöller</dd>
		<dd>LIT Verlag, Berlin, 2010</dd>
		<dd>ISBN: 3643106939</dd>
		<dd>1 illustration by Alastair (duplicate)</dd>
		<dd className= 'method'>photographed by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#mann'>mann</a></dd>
	</dl>
	</label>

	<label htmlFor= 'doverInput'>
	<input type = 'checkbox' id = 'doverInput' />
	<dl className="dl_hide" id = 'dover'>
		<dt><cite>Alastair: Drawings and Illustrations</cite></dt>
		<dd>edited by David A Beronä</dd>
		<dd>Dover Publications, New York, 2011</dd>
		<dd>ISBN: 0486482030</dd>
		<dd>illustrations by Alastair (all duplicates)</dd>
		<dd className= 'method'>scanned from private collection by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#dover'>dover</a></dd>
	</dl>
	</label>

	<label htmlFor= 'berlingInput'>
	<input type = 'checkbox' id = 'berlingInput' />
	<dl className="dl_hide" id = 'berling'>
		<dt><cite>Hazard und Lieblos</cite></dt>
		<dd>by Peter Berling</dd>
		<dd>Hoffmann und Campe, Hamburg, 2011</dd>
		<dd>ISBN: 3455810144</dd>
		<dd>records meeting between Berling and Alastair</dd>
		<dd className= 'hashtag'><a href = '#berling'>berling</a></dd>
	</dl>
	</label>

	<label htmlFor= 'caresseInput'>
	<input type = 'checkbox' id = 'caresseInput' />
	<dl className="dl_hide" id = 'caresse'>
		<dt>Caresse Crosby papers, series 5</dt>
		<dd>recorded correspondence between Caresse Crosby and her associates</dd>
		<dd>held in the Special Collections Research Center at Southern Illinois University, Carbondale</dd>
		<dd className= 'method'>scanned from the Special Collections Research Center at Southern Illinois University, Carbondale</dd>
		<dd className= 'hashtag'><a href = '#caresse'>caresse</a></dd>
	</dl>
	</label>

	<label htmlFor= 'olderphotoInput'>
	<input type = 'checkbox' id = 'olderphotoInput' />
	<dl className="dl_hide" id = 'olderphoto'>
		<dt>Photograph of Alastair</dt>
		<dd className= 'method'>held in private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#olderphoto'>olderphoto</a></dd>
	</dl>
	</label>
	
	<label htmlFor= 'artnetInput'>
	<input type = 'checkbox' id = 'artnetInput' />
	<dl className="dl_hide" id = 'artnet'>
		<dt>Records of Alastair’s works on artnet</dt>
		<dd>http://www.artnet.com/artists/alastair-hans-henning-baron-vogt/past-auction-results</dd>
		<dd className= 'method'>photographed from private collections</dd>
		<dd className= 'hashtag'><a href = '#artnet'>artnet</a></dd>
	</dl>
	</label>

	<label htmlFor= 'swannInput'>
	<input type = 'checkbox' id = 'swannInput' />
	<dl className="dl_hide" id = 'swann'>
		<dt>Record of sold illustrations by Swann Auction Galleries</dt>
		<dd className= 'method'>photographed from <a href = 'http://catalogue.swanngalleries.com/asp/fullCatalogue.asp?salelot=2014+++++++2+'>private collection</a></dd>
		<dd className= 'hashtag'><a href = '#swann'>swann</a></dd>
	</dl>
	</label>
	
	<label htmlFor= 'forumauctionInput'>
	<input type = 'checkbox' id = 'forumauctionInput' />
	<dl className="dl_hide" id = 'forumauction'>
		<dt>Record of sold illustrations by Forum Auctions</dt>
		<dd className= 'method'>photographed from <a href = 'https://www.forumauctions.co.uk/68944/Voight-Hans-Henning-quotAlastairquot.-Herod-for-39Salome-58-Drame-en-un-Acte-39-original-drawing-in-red-amp-black-ink-over-pencil-c.1922?auction_date=&auction_no=1060'>private collection</a></dd>
		<dd className= 'hashtag'><a href = '#forumauction'>forumauction</a></dd>
	</dl>
	</label>

	<label htmlFor= 'pieces1Input'>
	<input type = 'checkbox' id = 'pieces1Input' />
	<dl className="dl_hide" id = 'pieces1'>
		<dt>Elizabeth V Bouras' collection</dt>
		<dd>by Alastair</dd>
		<dd>unpublished illustrations for <cite>Pieces</cite>, by JK Huysman</dd>
		<dd className= 'method'>scanned from private collection by <a href = 'http://www.pinterest.com/sistinas138'>Elizabeth V Bouras</a></dd>
		<dd className= 'hashtag'><a href = '#pieces'>pieces</a></dd>
	</dl>
	</label>

	<label htmlFor= 'arwasInput'>
	<input type = 'checkbox' id = 'arwasInput' />
	<dl className="dl_hide" id = 'arwas'>
		<dt>Gretha Arwas' collection</dt>
		<dd>by Alastair</dd>
		<dd>original art owned by Gretha Arwas</dd>
		<dd>11 drawings (6 duplicates)</dd>
		<dd className= 'method'>photographed</dd>
		<dd className= 'hashtag'><a href = '#arwas'>arwas</a></dd>
	</dl>
	</label>

	<label htmlFor= 'engelmannInput'>
	<input type = 'checkbox' id = 'engelmannInput' />
	<dl className="dl_hide" id = 'engelmann'>
		<dt>Photographs by Ines Janet Engelmann</dt>
		<dd>32 photographs of art by Alastair</dd>
		<dd className= 'method'>photographed</dd>
		<dd className= 'hashtag'><a href = '#engelmann'>engelmann</a></dd>
	</dl>
	</label>

	<label htmlFor= 'marbachInput'>
	<input type = 'checkbox' id = 'marbachInput' />
	<dl className="dl_hide" id = 'marbach'>
		<dt>DLA Marbach's collection</dt>
		<dd>drawings and books by Alastair</dd>
		<dd><a href = 'http://www.dla-marbach.de/'>www.dla-marbach.de</a></dd>
		<dd className= 'hashtag'><a href = '#marbach'>marbach</a></dd>
	</dl>
	</label>

	<h2>other sources</h2>

	<label htmlFor= 'notturnoInput'>
	<input type = 'checkbox' id = 'notturnoInput' />
	<dl className="dl_hide" id = 'notturno'>
		<dt><cite>Notturno</cite></dt>
		<dd>by Gabriele d’Annunzio</dd>
		<dd>translated by Stephen Sartarelli</dd>
		<dd>originally published Fratelli Treves, Milan, 1921</dd>
		<dd>Yale University Press, New Haven, 2012</dd>
		<dd className= 'hashtag'><a href = '#notturno'>notturno</a></dd>
	</dl>
	</label>

	<label htmlFor= 'passionateInput'>
	<input type = 'checkbox' id = 'passionateInput' />
	<dl className="dl_hide" id = 'passionate'>
		<dt><cite>The Passionate Years</cite></dt>
		<dd>by Caresse Crosby</dd>
		<dd>Dial Press, 1953</dd>
		<dt>reprinted</dt>
		<dd>Southern Illinois University Press, Carbondale, 1968</dd>
		<dd>ISBN: 0809303213</dd>
		<dt>reprinted</dt>
		<dd>Ecco Press, New York & Penguin Books Canada Limited, Canada, 1979</dd>
		<dd>ISBN: 0912946660</dd>
		<dd className= 'method'>held in private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#passionate'>passionate</a></dd>
	</dl>
	</label>

	<label htmlFor= 'alwaysInput'>
	<input type = 'checkbox' id = 'alwaysInput' />
	<dl className="dl_hide" id = 'always'>
		<dt><cite>Always Yes, Caresse</cite></dt>
		<dd>by Robert Snyder</dd>
		<dd>Masters and Masterworks Productions, Santa Barbara, 1962</dd>
		<dd className= 'method'>ripped from private collection by Colin Foley and Blaine Glover</dd>
		<dd className= 'hashtag'><a href = '#always'>always</a></dd>
	</dl>
	</label>

	<label htmlFor= 'blacksunInput'>
	<input type = 'checkbox' id = 'blacksunInput' />
	<dl className="dl_hide" id = 'blacksun'>
		<dt><cite>Black Sun: The Brief Transit and Violent Eclipse of Harry Crosby</cite></dt>
		<dd>by Geoffrey Wolff</dd>
		<dd>New York Review Books Classics, New York, 2003</dd>
		<dd>ISBN: 1590170660</dd>
		<dd className= 'method'>held in private collection by Colin Foley</dd>
		<dd className= 'hashtag'><a href = '#blacksun'>blacksun</a></dd>
	</dl>
    </label>

	<label htmlFor= 'stanfordInput'>
	<input type = 'checkbox' id = 'stanfordInput' />
	<dl className="dl_hide" id = 'stanford'>
		<dt><cite>Stanford Encyclopedia of Philosophy</cite></dt>
		<dd>article on Hermann Cohen</dd>
		<dd>2010</dd>
		<dd className= 'method'><a href = 'http://plato.stanford.edu/entries/cohen/'>http://plato.stanford.edu/entries/cohen/</a></dd>
		<dd className= 'hashtag'><a href = '#stanford'>stanford</a></dd>
	</dl>
	</label>
</article>
    )

 }