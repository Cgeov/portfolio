import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

export default function Services() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <div className="xl:mx-auto max-w-[1400px]">
      <div className="relative">
        <h2
          className="bgTitle text-6xl font-bold text-center pb-10"
          data-aos="fade-down"
        >
          Proyectos
        </h2>
        <h2
          className="titleSecond text-6xl font-bold text-center pb-10"
          data-aos="fade-down"
        >
          Proyectos
        </h2>
      </div>
      <div className="relative grid grid-cols-1 items-center md:flex bg-primary w-[85%] mx-auto py-20 md:pr-5 rounded-[40px] mb-10">
        <div className="w-[90%] md:w-[40%]">
          {/* <Image
            src="/blob/blob.svg"
            width={800}
            height={500}
            alt="Blob"
            className="absolute z-50"
          ></Image> */}
          <Swiper
            className="md:-left-14 absolute w-full top-[calc(50%_-_200px)]"
            modules={[Controller]}
            onSwiper={(e: any) => setFirstSwiper(e)}
            controller={{ control: secondSwiper }}
          >
            <SwiperSlide>
              <div className="w-[100%] md:top-0 h-full rounded-3xl">
                <Image
                  className="object-contain rounded-3xl mx-auto"
                  width={400}
                  height={400}
                  src={"/placeholder.jpg"}
                  alt="Servicio"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-[100%] md:top-0 h-full rounded-3xl">
                <Image
                  className="mx-auto object-contain rounded-3xl"
                  width={400}
                  height={400}
                  src={"/placeholder.jpg"}
                  alt="Servicio"
                ></Image>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:w-[60%]">
          <Swiper
            modules={[Controller, EffectFade, Navigation, Pagination, Mousewheel]}
            onSwiper={(e: any) => setSecondSwiper(e)}
            controller={{ control: firstSwiper }}
            effect="fade"
            navigation={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="text-white text-center md:text-left pt-12 md:pt-4 pb-16">
                <div className="flex flex-col gap-4 px-14">
                  <p className="font-bold text-center md:text-left text-3xl">
                    Lorem Ipsum
                  </p>
                  <p>Lorem Ipsum</p>
                  <div className="bg-secondary w-fit px-4 py-3 rounded-full cursor-pointer">Ver Proyecto</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-white text-center md:text-left pt-12 md:pt-4 pb-16">
                <div className="flex flex-col gap-4 px-14">
                  <p className="font-bold text-center md:text-left text-3xl">
                    Lorem Ipsum2
                  </p>
                  <p>Lorem Ipsum2</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
