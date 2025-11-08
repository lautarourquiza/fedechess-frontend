import { TopMenu } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <div className="bg-[url(/fede-chess-bg.jpg)] md:h-[85vh] h-[100dvh] bg-cover bg-bottom flex flex-col relative">
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/100"></div>
        <TopMenu />
        <div className="md:mt-auto md:my-0 my-auto w-fit md:mb-20 mx-auto h-fit flex flex-col z-10">
          <h1 className="xl:text-6xl text-3xl w-10/12 sm:text-4xl lg:text-5xl mx-auto my-2 font-bold text-white text-center">Mejora tu nivel en ajedrez:<br />Aprende, estudia, entrena.</h1>
          <p className="text-sm md:text-xl font-thin md:font-normal w-10/12 text-center mx-auto text-gray-200">Encontrá las herramientas para progresar más allá del nivel que tengas. Tenemos los recursos personalizados y especialmente pensados y adaptados para que recorras el camino del ajedrez y logres tus objetivos.</p>
          <Link href={'/clases'} className="md:text-2xl text-xl py-3 md:px-20 px-14 font-bold bg-white text-black w-fit h-fit mx-auto my-5 md:my-10">Tomar clases</Link>
        </div>
      </div>


      <section className="md:bg-white bg-black h-fit flex flex-col pt-20">

        <div className="h-fit flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className="md:w-1/2 py-10 h-fit mx-auto ml-auto my-auto w-11/12 md:pb-10 flex flex-col pb-20">
            <h1 className="md:text-black text-white w-11/12 font-bold text-4xl mx-auto mb-10 my-auto md:mb-0 h-fit">Clases particulares para todos los niveles.</h1>
            <p className="md:text-black text-white w-11/12 text-lg mx-auto">Hola! Soy el candidato a Maestro e Instructor escolar (FIDE) Fede García Lemos. Profesor y entrenador de ajedrez desde hace 20 años. Enseño a todos los niveles; desde principiantes hasta jugadores de torneo, club y de campeonatos nacionales, ya sean niños o adultos. Si querés aprender, mejorar tu comprensión del juego, estudiar o entrenar para alcanzar objetivos más ambicioso en ajedrez, o si estudiaste y sentís que estás estancado en tu nivel, contactáme y planificamos tu progreso.</p>
            <div className="md:flex my-10 w-9/12 mx-auto justify-center hidden gap-3">
              <Link className="py-2 bg-slate-50 text-black h-fit my-auto mr-2 w-5/6 shadow-md text-center hover:shadow-2xl  transition-shadow duration-300" href={"/clases"}>Tomar clases</Link>
              <Link className="py-2 bg-black    text-white h-fit my-auto mr-2 w-5/6 shadow-md text-center hover:shadow-2xl  transition-shadow duration-300" href={"/contacto"}>Contacto</Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/100 via-black/5 to-transparent block md:hidden"></div>
            <Image className="md:w-9/12 w-full md:ml-2 ml-0 mr-auto my-auto h-auto" src={'/fedechess.png'} height={1000} width={1000} alt={"fede img"} />
          </div>
        </div>

        <div className="h-fit flex flex-col-reverse md:flex-row max-w-7xl mx-auto">
          <div className="md:w-1/2 w-full flex relative">
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/100 via-black/5 to-transparent block md:hidden"></div>
            <Image className="md:w-9/12 w-full md:mr-2 mr-0 ml-auto my-auto h-auto" src={'/fedechess2.png'} height={1000} width={1000} alt={"fede img"} />
          </div>
          <div className=" md:w-1/2 w-full mx-auto ml-auto my-auto">
            <div className="md:w-full h-fit py-10 mx-auto ml-auto my-auto w-11/12 md:pb-10 flex flex-col pb-5">
              <h1 className="md:text-black text-white w-11/12 font-bold text-4xl mx-auto mb-5 my-auto md:mb-0 h-fit">Nuestra comunidad</h1>
              <p className="md:text-black text-white w-11/12 text-lg mx-auto">Este sitio está destinado a todos aquellos que desean mejorar su comprensión del juego, elevar su nivel y encontrar herramientas probadas y pedagógicamente diseñadas, clásicas y modernas, para que puedas dar ese salto soñado en el progreso en ajedrez. Encontrarás material a la medida de tus necesidades, consejos, métodos, experiencias de otros jugadores y todo lo que pueda ayudarte y motivarte para recorrer el camino de mejoría en ajedrez.<br /><span className="font-bold text-xl">Seguinos!</span> </p>
              <div className="flex md:w-9/12 my-10 w-fit gap-5 mr-auto md:mr-0 ml-auto">
                <Link className="hover:translate-x-2 transition-transform ease-in duration-300 p-8 py-3 border-2 bg-white md:bg-transparent border-black text-black text-sm" href={"https://youtube.com"}>Ver videos en Youtube&nbsp;▶</Link>
                <Link className="my-auto" href={'https://facebook.com'}><FaFacebook className="text-white md:text-black text-4xl h-fit my-auto hover:-translate-y-1 transition-transform ease-in duration-300" /></Link>
                <Link className="my-auto" href={'https://instagram.com'}><AiFillInstagram className="text-white md:text-black text-4xl h-fit my-auto hover:-translate-y-1 transition-transform ease-in duration-300" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit py-10 bg-white flex flex-col">
        <div className="flex flex-col my-auto h-fit">
          <h1 className="w-9/12 text-center mx-auto my-5 text-black font-extrabold text-xl md:text-3xl">¿Qué beneficios tiene aprender Ajedrez?</h1>
          <p className="w-9/12 text-center mx-auto text-sm md:text-lg text-black">Aprender Ajedrez tiene una serie de beneficios que van más allá de las partidas y las victorias.</p>

          <div className="md:w-10/12 w-full flex mx-auto mt-8 max-w-7xl">
            <div className="w-1/6 h-fit mt-auto md:my-auto md:mt-10">
              <Image src={"/kingchess.png"} alt="king piece" width={1000} height={1000} className="w-9/12 -rotate-[9deg] h-auto" />
            </div>
            <div className="flex md:flex-row flex-col w-[80%] mb-auto md:w-[60%] my-auto">
              <ul className="mr-auto mb-auto w-full md:w-9/12 h-fit">
                <li><strong>• Mejora la concentración y memoria:</strong> Fomenta el enfoque y la retención de información.</li>
                <li><strong>• Desarrolla habilidades de resolución de problemas:</strong> Ayuda a tomar decisiones estratégicas.</li>
                <li><strong>• Fortalece el pensamiento crítico y la toma de decisiones:</strong> Mejora la capacidad de evaluar opciones y anticipar consecuencias.</li>
                <li><strong>• Aumenta la creatividad:</strong> Estimula la innovación y la búsqueda de soluciones originales.</li>
              </ul>
              <ul className="ml-auto mb-auto w-full md:w-9/12 h-fit space-y-4">
                <li><strong>• Fomenta la paciencia y el autocontrol:</strong> Enseña a manejar la frustración y a pensar antes de actuar.</li>
                <li><strong>• Impulsa la planificación a largo plazo:</strong> Ayuda a desarrollar la capacidad de prever y estructurar estrategias.</li>
                <li><strong>• Promueve la resiliencia:</strong> Enseña a aprender de los errores y a seguir adelante después de un fracaso.</li>
                <li><strong>• Desarrolla habilidades sociales:</strong> Favorece el respeto mutuo, la empatía y la deportividad en entornos competitivos.</li>
              </ul>
            </div>
            <div className="w-1/6 h-fit md:my-auto mb-auto md:mt-10">
              <Image src={"/queenchess.png"} alt="queen piece" width={1000} height={1000} className="w-9/12 rotate-[9deg] h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-fit md:h-[100dvh] py-20 bg-[url('/chess-bg.jpg')] bg-cover bg-center flex flex-col backdrop-brightness-50">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-2/3 mx-auto my-auto flex flex-col z-10">
          <h1 className="font-bold xl:text-6xl text-2xl  sm:text-3xl lg:text-5xl text-center text-white w-10/12 mx-auto">Estudiá y entrená de la manera correcta y subí de nivel</h1>
          <p className="text-center my-6 text-lg md:text-xl font-thin text-white w-10/12 mx-auto">Enviános un mensaje para más información</p>
          <Link className="md:py-2.5 md:px-16 px-8 py-2 md:text-xl text-lg font-extrabold mx-auto bg-white text-black h-fit my-auto w-fit shadow-md text-center hover:shadow-2xl transition-shadow duration-300" href={"/contacto"}>Contáctanos</Link>
        </div>
      </section>
    </>

  );
}
