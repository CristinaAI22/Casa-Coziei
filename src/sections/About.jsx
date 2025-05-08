/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import food10 from "../assets/food10.jpg";
import platou from "../assets/platou.jpg";
import food4 from "../assets/food4.jpg";
import roxana from "../assets/roxana.jpg";
import solar from "../assets/solar.jpg";
import tibi from "../assets/tibi.jpg";
import tantiMaria from "../assets/Virgiloaia.jpg";
import stefi from "../assets/stefi.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-12 space-y-16 px-4 sm:px-6 md:px-8 w-full max-w-screen-xl mx-auto"
    >
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-primary mb-2">Despre noi</h2>
        <p className="text-gray-700 text-base leading-relaxed text-justify">
          Suntem o familie tânără care locuiește în Brezoi, micul orășel de
          munte de pe valea Lotrului. Casa noastră se află în satul Văratica,
          așezat chiarla baza muntelui Cozia. Povestea a început când Roxana,
          gazda primitoare și îndemânatică, s-a apucat să coacă pâine, să facă
          cele mai delicioase ciorbe, să combine rețete locale cu ingrediente
          noi, să împletească cozonaci, să facă murături, vișinată, limonadă.
          Apreciem frmusețea simplă a naturii și a tradițiilor și vrem să
          împărtățim cu oaspeții noștri bucatele gătite cu cel mai mare drag și
          respect.
          <br />
          <br />
          Gospodăria noastră a crescut odată cu fetița noastră, care avea 4 ani
          când ne-am mutat aici, iar acum este o domnișoară. Din grijă pentru ce
          mâncăm, am investit timp și resurse pentru a ne asigura o bază de
          produse bio (legume, fructe, ouă, carne de pasăre și porc) pe care
          ulterior am început să o folosim pentru a ne crea o adresă în materie
          de gastronomie locală.
          <br />
          <br />
          Ne propunem să oferim mâncare de cea mai bună calitate, gătită din
          produse cât mai naturale, chiar la noi acasă. Suntem mai degrabă un
          proiect de gastronomie locală, decât o afacere, preferăm să lucrăm cu
          un număr mic, dar constant de oaspeți, pe care ne dorim să îi mulțumim
          și să îi determinăm să revină cu drag la noi. Colaborăm cu alte mici
          buisiness-uri locale, <em> Lactate de Capră Brezoi </em> pentru
          aprovizionarea de carne și lactate, dar și cu{" "}
          <em> Camping Grădina cu Flori </em> și <em> Alpine Explore </em>.
          Ultimele două activează în turism și ne recomandăm și ajutăm reciproc,
          astfel încât să dezvoltăm împreună comunitatea de mici antreprenori
          locali din Brezoi. |
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[food10, platou, food4, solar].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`about-${i}`}
              className="w-full h-64 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Povestea din spatele poveștii
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            A fost odată o bunică extraodinară, Măria i se zicea, era căsătorită
            cu Virgil și avea o personalitate ieșită din comun. Blondă cu ochii
            albaștri, frumoasă și inteligentă, Măria a muncit din greu în
            vremuri mult mai grele, a crescut 3 copii și mai mulți nepoți, a
            iubit, a suferit, a trăit, ce să mai, ca orice femeie. Printre bune
            și rele, așa cum este viața în general, ea a pus familia pe primul
            loc. Iar Roxana, nepoata ei, și-o amintește încă, după 30 de ani,
            cum le gătea ei și fraților ei, părinților și unchilor. Împărțea
            bucate cu oricine îi trecea pragul, era aprigă de gură, dar bună la
            suflet. I se spunea Virgiloaia și nu puțini se temeau de
            temperamentul ei năvalnic, de frumusețea ei. Așa a crescut Roxana,
            fiind fetiță, într-un amestec de iubire, teama cuvenită față de o
            bunică în fața căreia tremurau și bărbații și în miros de mâncăruri
            delicioase.
            <br />
            După ani, teama s-a risipit. A rămas dorul, dragul, admirația,
            memoria acelor bucate speciale pe care Virgiloaia le făcea rapid să
            sature droaia de copii și adulți. Deși s-a dus dintre noi, Tanti
            Măria lu' Virgil continuă să o inspire pe nepoata ei, femeie adultă,
            care, încărcată din copilărie cu amintiri, gusturi, mirosuri,
            emoții, vrea să ducă memoria buncii mai departe. Așa a apărut ”La
            Virgiloaia-n tindă”, un loc special unde mănânci și te simți copil
            fericit.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={tantiMaria}
            alt="Tanti Maria"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full "
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-4">Roxana</h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Roxana este sufletul casei noastre. A moștenit-o pe Virgiloaia,
            bunica ei și este plină de determinare, sensibilitate, poftă de
            muncă. Atentă și grijulie, atât cu oamenii cât și cu ingredientele,
            ea dorește să își creeze o mică afacere bazată pe pasiunea ei pentru
            gătit. Își cultivă în grădină cea mai mare parte din legume, în
            micul ei solar, dar și într-un cottage înconjurat cu tufe de
            busuioc, cimbru, oregano și tufe de zmeuri. Alături crește păsări de
            ouă și de carne, iar lactatele și carnea de vită o cumpără de la
            producătorii locali de pe Valea Lotrului.
            <br />
            <br />
            Are o experiență bogată atât în gastronomie, cât și în lucrul cu
            oamenii, a lucrat timp de 3 ani la <em>Nedeea Vâlceană</em>, o
            afacere locală de turism, unde a învățăt foarte multe despre
            rețetele tradiționale, cum să faci incredibile ciorbe și zemuri care
            să ajungă la 20 de oameni, magnifice tocănițe la tuci, gogoși,
            plăcinte și pâini la cuptor, pe vatră sau pe plită.
            <br />
            <br />
            În ultimii doi ani s-a concentrat pe valorizarea potențialului pe
            care îl are și a decis să înceapă să gătească acasă pentru un număr
            mic de persoane. Ajutată, la nevoie, de mama ei,
            <em> Tanti Valerica, </em> de soț și de fiica ei, s-a conturat
            frumos ideea unei mici afaceri în sânul familiei. Detaliile despre
            ingredientele pe care le folosește, despre meniuri, dar și alte
            curiozități, sunt disponibile în sectiunea <em>chat</em>.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={roxana}
            alt="Roxana"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full "
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-4"> Tibi</h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Inventiv, amuzant, tăcut și liniștit, Tibi este partenerul și soțul
            <em> Roxanei </em>. Împreună au construit familia, gospodăria, casa,
            ideea de <em> gastronomie locală </em> la ei în sat. Autodidact și
            handyman, el se ocupă, atât cât îi permite timpul, de plantarea din
            semințe a răsadurilor, de organizarea grădinii de legume, de livada
            de pomi fructiferi. Deși are un job full time, Tibi este foarte
            implicat în treburile gospodăriei, așa cum îi șade bine unui bărbat
            modern: este specialist în murături asortate, în vișinate, afinate,
            coacăzate (toate ”atele” care poti fi făcute în casă), întreține
            stocul de ciuperi sălbatice(mânătărci, bureți de fag, creasta
            cocoșului, vinețele), dar și de ceaiuri din plante din flora
            spontană.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={tibi}
            alt="Tibi"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full "
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-primary mb-4"> Ștefi</h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Elevă de gimnaziu, adolescentă, Ștefania a crescut iubind animalele,
            păsările, natura. Semințele bune pe care părinții eu le-au plantat
            în ea, au dat roade. Copil crescut la curte, la poalele muntelui,
            Ștefi este totodată și un copil al tehnologiei, iar interesul pentru
            fotografii și mediul digital o face deja să fie un mic creator
            digital. Se dezvoltă personal alături de mica afacere, se implică în promovarea în mediul online, citește despre marketing digital. Crește frumos.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={stefi}
            alt="Stefi"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full "
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
