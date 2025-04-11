/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import food10 from "../assets/food10.jpg";
import platou from "../assets/platou.jpg";
import food4 from "../assets/food4.jpg";
import roxana from "../assets/roxana.jpg";
import solar from "../assets/solar.jpg";
import tibi from "../assets/tibi.jpg";

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
          așezat chiar sub masivul Cozia. Povestea a început când Roxana, gazda
          primitoare și îndemânatică, s-a apucat să coacă pâine, să facă cele
          mai delicioase ciorbe, să combine rețete locale cu ingrediente noi, să
          împletească cozonaci, să facă murături, vișinată, limonadă. Apreciem
          frmusețea simplă a naturii și a tradițiilor și vrem să împărtățim cu
          oaspeții noștri bucatele gătite cu cel mai mare drag și respect.
          <br />
          Gospodăria noastră a crescut odată cu fetița noastră, care avea 4 ani
          când ne-am mutat aici, iar acum este o domnișoară. Din grijă pentru ce
          mâncăm, am investit timp și resurse pentru a ne asigura o bază de
          produse bio (legume, fructe, ouă, carne de pasăre și porc) pe care
          ulterior am început să o folosim pentru a ne crea o adresă în materie
          de gatsronomie locală.
          <br />
          Ne propunem să oferim mâncare de cea mai bună calitate, gătită din
          produse cât mai naturale, chiar la noi acasă. Suntem mai degrabă un
          proiect de gastronomie locală, decât o afacere, preferăm să lucrăm cu
          un număr mic, dar constant de oaspeți, pe care de dorim să îi mulțumim
          și să îi determinăm să revină cu drag la noi. Colaborăm cu alte mici
          buisiness-uri locale, <em>Lactate de Capră Brezoi</em> pentru
          aprovizionarea de carne și lactate, dar și cu{" "}
          <em>Camping Grădina cu Flori</em> și <em>Alpine Explore</em>. Ultimele
          două activează în turism și ne recomandăm și ajutăm reciproc, astfel
          încât să dezvoltăm împreună comunitatea de mici antreprenori locali
          din Brezoi. |
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
            Despre Roxana
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Roxana este sufletul casei noastre. Atentă și grijulie, atât cu
            oamenii cât și cu ingredientele, ea dorește să își creeze o mică
            afacere bazată pe pasiunea ei pentru gătit. Își cultivă în grădină
            cea mai mare parte din legume, în micul ei solar, dar și într-un
            cottage înconjurat cu tufe de busuioc, cimbru, oregano și tufe de
            zmeuri. Alături crește păsări de ouă și de carne, iar lactatele și
            carnea de vită o cumpără de la producătorii locali de pe Valea
            Lotrului.
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
            <em>Tanti Valerica</em>, de soț și de fată, s-a conturat frumos
            ideea unei mici afaceri în sânul familiei. Detaliile despre
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
          <h2 className="text-2xl font-bold text-primary mb-4">Despre Tibi</h2>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Inventiv, amuzant, tăcut și liniștit, Tibi este partenerul și soțul{" "}
            <em>Roxanei</em>. Împreună au construit familia, gospodăria, casa,
            ideea de <em>gastronomie locală</em> la ei în sat. Autodidact și
            handyman, el se ocupă, atât cât îi permite timpul, de plantarea din
            semințe a răsadurilor, de organizarea grădinii de legume, de livada
            de pomi fructiferi. Deși are un job full time, Tibi este foarte
            implicat în treburile gospodăriei, așa cum îi șade bine unui bărbat
            modern: este specialist în murături asortate, în vișinate, afinate,
            coacăzate (toate ”atele” care poti fi făcute în casă), întreține
            stocul de ciuperi sălbatice(mânătărci, bureți de fag, creasta
            cocoșului, vinețele), dar și de ceaiuri din plante din flora spontană.
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
    </section>
  );
}
