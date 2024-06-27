import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

export default function Services() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="relative">
        <Image className="absolute -z-50" src="/blob/blob.svg" width={800} height={500} alt="Blob"></Image>
        <Swiper
         className="absolute"
          modules={[Controller]}
          onSwiper={(e: any) => setFirstSwiper(e)}
          controller={{ control: secondSwiper }}>
          <SwiperSlide>
            <div className="w-[100%] md:top-0 h-full">
              <Image
                className="object-contain" width={400} height={300}
                src={'/placeholder.jpg'}
                alt="Servicio"></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] md:top-0 h-full">
              <Image
                className="object-contain" width={400} height={300}
                src={'/placeholder.jpg'}
                alt="Servicio"></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-size": "15px",
          }}
          modules={[Controller, EffectFade, Navigation, Pagination]}
          onSwiper={(e: any) => setSecondSwiper(e)}
          controller={{ control: firstSwiper }}
          effect="fade"
          navigation={true}
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <div className="text-white text-center md:text-left pt-12 md:pt-4 pb-16">
              <div className="flex flex-col gap-4 ">
                <p className="font-bold text-center md:text-left text-3xl">
                  Lorem Ipsum
                </p>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white text-center md:text-left pt-12 md:pt-4 pb-16">
              <div className="flex flex-col gap-4 ">
                <p className="font-bold text-center md:text-left text-3xl">
                  Lorem Ipsum2
                </p>
                <p>Lorem Ipsum2</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
