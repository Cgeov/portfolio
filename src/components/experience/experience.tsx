import Image from "next/image";

export default function Experience() {
  return (
    <div className="bg-custom-gradient pt-10 md:pt-36 md:pb-44 px-[5%]">
      <h2
        className="bgTitle text-6xl font-bold text-center pt-16"
        data-aos="fade-down">
        Experiencia Laboral
      </h2>
      <div className="relative pl-8 sm:pl-48 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Software Developer
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:border-l-[1px] before:border-dashed before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px  sm:before:ml-[10rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:p-2 after:border-[1px] after:border-spacing-2 after:border-dashed after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[10rem] after:-translate-x-1/2 after:translate-y-1.5">
          <Image
            className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-16 mb-3 sm:mb-0 text-emerald-600rounded-full"
            src={"/logo1.png"}
            width={150}
            height={150}
            alt="Premier Distributions"
          />
          <div className="sm:absolute bottom-7 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Marzo 2023
          </div>
          <div className="text-xl font-bold text-slate-900">
            Premier Distributions
          </div>
        </div>
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vestibulum in nisi eget laoreet. Mauris volutpat erat nunc. Aenean
          faucibus rhoncus lacus, in viverra mauris pellentesque at. Mauris
          bibendum viverra rutrum. Nam rhoncus at augue ut pulvinar. Curabitur
          vehicula ligula et iaculis rutrum. Aliquam sit amet arcu nec odio
          commodo pulvinar.
        </div>
      </div>

      <div className="relative pl-8 sm:pl-48 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
        Front-end Developer
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:border-l-[1px] before:border-dashed before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px  sm:before:ml-[10rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-[1px] after:border-spacing-2 after:border-dashed after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[10rem] after:-translate-x-1/2 after:translate-y-1.5">
        <Image
            className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-36 h-16 mb-3 sm:mb-0 text-emerald-600rounded-full"
            src={"/logo1.png"}
            width={150}
            height={150}
            alt="Premier Distributions"
          />
          <div className="sm:absolute bottom-7 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Marzo 2023
          </div>
          <div className="text-xl font-bold text-slate-900">
            OrbitWeb.inc
          </div>
        </div>
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vestibulum in nisi eget laoreet. Mauris volutpat erat nunc. Aenean
          faucibus rhoncus lacus, in viverra mauris pellentesque at. Mauris
          bibendum viverra rutrum. Nam rhoncus at augue ut pulvinar. Curabitur
          vehicula ligula et iaculis rutrum. Aliquam sit amet arcu nec odio
          commodo pulvinar.
        </div>
      </div>

      <div className="relative pl-8 sm:pl-48 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
        Pasante - Web Developer
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:border-l-[1px] before:border-dashed before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px  sm:before:ml-[10rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-[1px] after:border-spacing-2 after:border-dashed after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[10rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            2023
          </time>
          <div className="text-xl font-bold text-slate-900">
           Fundación Manos Mágicas
          </div>
        </div>
        <div className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vestibulum in nisi eget laoreet. Mauris volutpat erat nunc. Aenean
          faucibus rhoncus lacus, in viverra mauris pellentesque at. Mauris
          bibendum viverra rutrum. Nam rhoncus at augue ut pulvinar. Curabitur
          vehicula ligula et iaculis rutrum. Aliquam sit amet arcu nec odio
          commodo pulvinar.
        </div>
      </div>

    </div>
  );
}
