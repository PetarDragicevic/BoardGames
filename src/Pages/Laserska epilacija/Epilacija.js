import React from "react";
import "./Epilacija.css";

function Epilacija() {
  return (
    <div>
      <img
        className="img-thumbnail img-fluid wallpaper"
        src="materijal/wallpapers/epilacija-wallpaper.jpg"
      />
      <div className="conteiner">
        <h1 className="title">Šta je trajna epilacija diodnim laserom?</h1>
        <hr></hr>
        <p>
          Dugotrajna redukcija dlačica lica i tela je popularno nazvana
          <span className="strong-text">“trajna epilacija”</span> ili
          <span className="strong-text">“trajno uklanjanje dlačica“</span>.
          Trajna epilacija ne znači doživotno i izraz nije najbolje izabran. Po
          definiciji trajna epilacija označava veći period od perioda svih
          ciklusa rasta dlake. Dlake rastu u ponovljenim ciklusima. I taj ciklus
          se može podeliti na tri faze: • Anagena faza (aktivna faza) tokom ove
          faze dlaka aktivno raste do 1 cm za 28 dana. Ova faza je najpogodnija
          za epilaciju. • Katagena faza (prelazna faza) koja nastaje nakon
          Anagene faze i nakon nje dlaka prestaje da raste. Ova faza traje 2-3
          nedelje. Tokom ove faze je teško postići dobre rezultate. • Telogena
          faza (neaktivna faza) tokom ove faze folikul nisu aktivan i ova faza
          traje 100 ili više dana. U ovoj fazi nije moguće postići permanentno
          uklanjenje dlačica.
        </p>
        <img src="materijal/Epilacija/epilacija-proces.jpg" />

        <h1 className="title">Zašto je potrebno uraditi više tretmana?</h1>
        <hr></hr>
        <p>
          Kako nisu sve dlačice u istoj fazi rasta kada radimo tretmane,
          potrebno je ponovo uraditi tretman nakon 3-4 nedelja kako bi smo
          „uhvatili” dlačice koje nisu tokom prvog tretmana bile u fazi aktivnog
          rasta.
        </p>
        <h1 className="title">
          Iskustva sa trajnom epilacijom diodnim laserom?
        </h1>
        <hr></hr>
        <p>
          Iskustva pokazuju da je rezultat vidljiv posle prvog tretmana u vidu
          proređivanja i otpadanja dlake alitek nakon 6-8 tretmana kod klijenta
          bi trebalo da se dobije pravi rezultat. Iskustvo je pokazalo da je
          poželjno da se jednom godišnje ponovi postupak na tretiranoj regiji.
          Rezultat laserske epilacije je individualan zavisi od mnogo faktora:
          fototipa kože,veličine i pigmentacije dlake,od faze rasta dlake na
          tretiranoj regiji, od hormonskih poremećaja.
        </p>
        <h1 className="title">Kako se pripremiti za epilaciju?</h1>
        <hr></hr>
        <p>
          NIKAKO ne treba raditi depilaciju voskom, elekričnim depilatorom ili
          ih čupati pincetom. 4 nedelje pre početka serije tretmana dlake treba
          uklanjati isključivo brijanjem, trimerom ili depil kremom i to što
          više puta kako bi dlake bile u fazi rasta.
        </p>
        <h1 className="title">Kako se ponašati između tretmana?</h1>
        <hr></hr>
        <p>
          Između tretmana takođe I isključivo brijanje ili trimovanje regija
          koje su tretirane.
        </p>
        <h1 className="title">Da li se tretira osunčana koža?</h1>
        <hr></hr>
        <p>
          Moguće je raditi epilaciju i na osunčanoj koži sa diodnim laserom
          (napomena: treba nekoliko dana nakon sunčanja krenuti na tretmane).
        </p>
        <h1 className="title">Kako radi dioni laser?</h1>
        <hr></hr>
        <p>
          Tehnologija diodnog lasera se bazira na dinamici svetlosti i toplote.
          Laser prolazi kroz površinu kože da bi stigao do korena folikula
          dlake. Svetlosni spektar privlači melanin u dlaci što mu određuje
          putanju do korena. Svetlost se pretvara u toplotu i na taj način
          uništava samo koren folikula dlake,tako se lasersko svetlo precizno
          usmerava samo na dlaku a okolno tkivo se ne oštećuje. Laserska
          epilacija veoma efikasno rešava problem uraslih dlaka i ostavlja kožu
          mekanu i sjajnu Dioni laser koji mi koristimo koristi 3 talasne
          dužinee: <br></br>• 755 nm (uklanjaju se veoma svetle dlake),{" "}
          <br></br>• 808 nm (uklanjaju se standardne dlake), <br></br>• 1064 nm
          (uklanjaju se veoma tamne i debele dlake).
        </p>
        <h1 className="title">Šta sve možemo epilirati?</h1>
        <hr></hr>
        <p>Svi delovi lica i tela koji imaju dlake, osim predela oko očiju.</p>
        <h1 className="title">Ko ne bi trebao da radi trajnu epilaciju?</h1>
        <hr></hr>
        <ul>
          <li>Trudnice i dojilje,</li>
          <li>Osobe sa epilepsijom,</li>
          <li>Dijabetičari koji zavise od Insulina,</li>
          <li>Osobe koje imaju herpes, psorijazu, ekcem i slčno,</li>
          <li>
            Osobe koje koriste antikagulantne lekove poput Aspirina i Heparina
          </li>
          <li>
            Klijenti koji koriste lekove koji izazivaju osetljivost na svetlo
            treba da naprave prekid u uzimanju terapije
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Epilacija;
