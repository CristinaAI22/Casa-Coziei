import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import poza1 from "../assets/1.png";
import poza2 from "../assets/2.png";
import poza3 from "../assets/3.png";
import poza4 from "../assets/4.png";
import poza5 from "../assets/5.png";

export default function HeroSection() {
  return (
    <section className="mt-0">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img className="w-64 h-120 object-contain" src={poza1} alt="Food 1" />
        </div>
        <div>
          <img className="w-64 h-120 object-contain" src={poza2} alt="Food 2" />
        </div>
        <div>
          <img className="w-64 h-120 object-contain" src={poza3} alt="Food 3" />
        </div>
        <div>
          <img className="w-64 h-120 object-contain" src={poza4} alt="Food 3" />
        </div>
        <div>
          <img className="w-64 h-120 object-contain" src={poza5} alt="Food 3" />
        </div>
      </Carousel>
    </section>
  );
}
