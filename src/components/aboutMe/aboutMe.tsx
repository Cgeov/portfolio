export default function AboutMe() {
  return (
    <div className="bg-black">
      <h2 className="bgTitle text-6xl font-bold text-center pt-16" data-aos="fade-down">Sobre Mi</h2>
      <div className="grid grid-cols-[2fr_3fr] items-center pb-2 px-10">
        <div>
          <img
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:rotate-6 duration-300"
            src="/profile.png"
          ></img>
        </div>
        <div className="[&>p]:mb-2" data-aos="fade-up">
          <p>
            Soy un apasionado Desarrollador Web. Me encanta convertir ideas en
            experiencias digitales. Con alrededor 2 años de experiencia en
            desarrollo web, he mejorado mi habilidad para transformar diseños
            creativos en código funcional y atractivo.
          </p>

          <p>
            Desde la planificación hasta la implementación final, disfruto cada
            etapa del proceso de desarrollo. Me aseguro de que cada línea de
            código esté optimizada para ofrecer una experiencia de usuario
            fluida y atractiva.
          </p>

          <p>
            Me esfuerzo por entender las necesidades del usuario y colaborar
            estrechamente con equipos interdisciplinarios para crear soluciones
            innovadoras y centradas en el usuario. Mi objetivo es superar las
            expectativas y entregar productos que inspiren y deleiten a los
            usuarios finales.
          </p>

          <p>
            Mantengo mis habilidades actualizadas y me mantengo al tanto de las
            últimas tendencias y tecnologías en desarrollo web. Me emociona
            enfrentar desafíos complejos y convertir conceptos abstractos en
            realidad digital.
          </p>
        </div>
      </div>
    </div>
  );
}
