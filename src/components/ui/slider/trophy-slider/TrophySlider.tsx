'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

export const TrophySlider = () => {
  const awards = [
    { id: 1, text: "Campeón Superior FAOGBA por equipos 2009, 2011, 2018" },
    { id: 2, text: "Primer puesto Abierto 50 aniversario Ciudad de Berazategui 2011" },
    { id: 3, text: "Segundo puesto Abierto IRT Legislatura (Sub 2000) 2011" },
    { id: 4, text: "Tercer Puesto Abierto PROAM (sub 2250) 2014" },
    { id: 5, text: "Cuarto puesto Abierto IRT Doñihue (Chile) 2014" },
    { id: 6, text: "Primer puesto Abierto IRT APSEE 2015" },
    { id: 7, text: "Primer puesto Abierto IRT APSEE 2017" },
    { id: 8, text: "Primer puesto IRT Estudiando Ajedrez 2018" },
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='w-2/3'>
          <div className="flex flex-col items-start gap-4 p-6 bg-gray-50 rounded-lg shadow-md">
            {awards.map((award) => (
              <div key={award.id} className="flex items-center gap-3 text-gray-700">
                <span className="text-yellow-500 md:text-2xl text-xs">🏆</span>
                <p className="md:text-2xl text-xs font-medium text-left">{award.text}</p>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-start gap-4 p-6 bg-gray-50 rounded-lg shadow-md">
            {awards.map((award) => (
              <div key={award.id} className="flex items-center gap-3 text-gray-700">
                <span className="text-yellow-500 md:text-2xl text-xs">🏆</span>
                <p className="md:text-2xl text-xs font-medium text-left">{award.text}</p>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}