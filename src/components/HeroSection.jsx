import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSection() {
  return (
    <section className="mt-16">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="https://source.unsplash.com/800x400/?food" alt="Food 1" />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/800x400/?restaurant"
            alt="Food 2"
          />
        </div>
        <div>
          <img src="https://source.unsplash.com/800x400/?dining" alt="Food 3" />
        </div>
      </Carousel>
    </section>
  );
}
