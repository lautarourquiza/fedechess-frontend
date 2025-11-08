'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export const ImageSlider = () => {
  return (
    <div className="w-full h-[250px] min-[400px]:h-[320px] min-[500px]:h-[380px] sm:h-[420px] max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        loop
        effect="coverflow"
        centeredSlides={true}
        spaceBetween={20} // Espacio por defecto
        breakpoints={{ // 📱 Responsive settings
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[300px] md:h-[500px]" // 🖼️ Altura adaptable
      >
        <SwiperSlide>
          <div className="relative w-full h-full flex">
            <Image
              src="/trophy1.png"
              alt="Slide 1"
              fill
              className="object-cover object-top"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex">
            <Image
              src="/fedechessblog.png"
              alt="Slide 2"
              fill
              className="object-cover object-top"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex">
            <Image
              src="/fedechessblog.png"
              alt="Slide 3"
              fill
              className="object-cover object-top"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
