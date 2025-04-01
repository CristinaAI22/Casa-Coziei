/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import food10 from "../assets/food10.jpg";
import platou from "../assets/platou.jpg";
import food4 from "../assets/food4.jpg";
import roxana from "../assets/roxana.jpg";
import solar from "../assets/solar.jpg";

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
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Suntem o familie tânără care locuiește în Brezoi, micul orășel de
          munte de pe valea Lotrului. Casa noastră se află în satul Văratica,
          așezat chiar sub masivul Cozia. Povestea a început când Roxana, gazda
          primitoare și îndemânatică, s-a apucat să coacă pâine, să facă cele
          mai delicioase ciorbe, să combine rețete locale cu ingrediente noi, să
          împletească cozonaci, să facă murături, vișinată, limonadă.
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
          <p className="text-gray-700 leading-relaxed">
            Roxana este sufletul casei noastre. Atentă și grijulie, atât cu
            oamenii cât și cu ingredientele, ea dorește să își creeze o mică
            afacere bazată pe pasiunea ei pentru gătit. Își cultivă în grădină
            cea mai mare parte din legume, în micul ei solar, dar și într-un
            cottage înconjurat cu tufe de busuioc, cimbru, oregano și tufe de
            zmeuri. Alături crește păsări de ouă și de carne, iar lactatele și
            carnea de vită o cumpără de la producătorii locali de pe Valea
            Lotrului.
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
    </section>
  );
}
