import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import pergola from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import tomateos from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";
import bread from "../assets/food9.jpg";
import food11 from "../assets/food11.jpg";

export default function HeroSection() {
  const images = [
    { src: food2, alt: "Food 2" },
    { src: food3, alt: "Food 3" },
    { src: pergola, alt: "Place to Eat" },
    { src: food5, alt: "Food 5" },
    { src: food6, alt: "Food 6" },
    { src: tomateos, alt: "Tomatoes" },
    { src: food8, alt: "Food 8" },
    { src: bread, alt: "Bread" },
    { src: food11, alt: "Food 11" },
  ];

  return (
    <section className="mt-16 w-full">
      <Carousel
        showArrows={true} // Enables navigation arrows
        showThumbs={false} // Hides thumbnails
        infiniteLoop={true} // Loops images infinitely
        autoPlay={true} // Auto-plays images
        showStatus={false} // Hides the slide number indicator
        transitionTime={1000} // Sets fade animation duration (in ms)
        animationHandler="fade" // Enables fade effect instead of slide
        className="max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto"
      >
        {images.map((item, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto max-h-60 sm:max-h-80 md:max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
