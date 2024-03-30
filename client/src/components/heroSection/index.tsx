import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.css";
const HeroSection = () => {
  return (
    <section className="hero-section-container">
      <Swiper
        className="swiper"
        speed={2200}
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
      >
        <SwiperSlide className="slide">
          <div className="slide-container">
            <img
              className="img-slide"
              src="https://img.freepik.com/free-psd/simple-product-backdrop-mockup-psd-with-shadow_53876-141762.jpg?w=996&t=st=1711722631~exp=1711723231~hmac=e79c0fd46173300cbe3cba67e95c747eb474fcc3a11033936c489379320c4a2d"
            />
            <h1>Black Friday</h1>
            <button>Start Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-container">
            <img
              className="img-slide"
              src="https://img.freepik.com/free-psd/simple-product-backdrop-mockup-psd-with-shadow_53876-141762.jpg?w=996&t=st=1711722631~exp=1711723231~hmac=e79c0fd46173300cbe3cba67e95c747eb474fcc3a11033936c489379320c4a2d"
            />
            <h1>Black Friday</h1>
            <button>Start Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-container">
            <img
              className="img-slide"
              src="https://img.freepik.com/free-psd/simple-product-backdrop-mockup-psd-with-shadow_53876-141762.jpg?w=996&t=st=1711722631~exp=1711723231~hmac=e79c0fd46173300cbe3cba67e95c747eb474fcc3a11033936c489379320c4a2d"
            />
            <h1>Black Friday</h1>
            <button>Start Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default HeroSection;
