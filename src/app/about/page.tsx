import { ImageSlider, TopMenu, TrophySlider } from "@/components";
import { SeeMore } from "@/components/content/SeeMore";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function AboutPage() {
    return (
        <>
            <div className="h-[100vh] bg-[url('/aboutimage.jpg')] bg-cover bg-center relative">
                <div className="absolute z-0 inset-0 bg-gradient-to-b from-black/50 to-black/100"></div>

                <div className="relative flex flex-col z-10 justify-center h-[80vh]">
                    <TopMenu />
                    <div className="text-white p-8 rounded-xl max-w-3xl mx-auto mt-auto h-fit overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>
                        <div className="relative z-10">
                            <p className="text-4xl font-serif mb-4">“De pocas partidas he aprendido tanto como de la mayoría de mis derrotas.”</p>
                            <div className="text-right">
                                <p className="font-bold text-lg">J. R. Capablanca</p>
                                <p className="text-sm">Ex campeón del mundo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white h-fit md:p-20 px-0 py-0 flex flex-col">
                <div className="flex md:flex-row mb-10 flex-col-reverse max-w-5xl mx-auto">
                    <div className="md:w-1/2 w-full">
                        <h3 className="font-bold text-5xl text-black mb-5 hidden md:block">Federico Garcia Lemos</h3>
                        <p className="text-black text-lg leading-relaxed p-10 md:p-0">Hola! Soy Federico García Lemos, profesor, entrenador. Candidato a Maestro (FIDE), School Instructor (FIDE) y Monitor (FEDA) con más de <strong>20 años de experiencia en la enseñanza de ajedrez</strong>, tanto en grupos de Escuela Municipal, como con alumnos particulares en diferentes aspectos del juego: recreativo, social, escolar y competitivo.. Tengo y tuve alumnos y alumnas de todas las edades: desde jardín de infantes, hasta adultos mayores. También trabajé con <strong>todos los niveles</strong> que te puedas imaginar, desde chicos y chicas que no sabían mover las piezas hasta campeones nacionales de distintas categorías promocionales de mi país. También ayudé a mejorar a jugadores de otras nacionalidades y los preparé para jugar competencias exigentes en su país y en el extranjero. Me formé en la &quot;escuelita&quot; del mítico <strong>Club Argentino de Ajedrez</strong> (donde Alekhine derrotó a Capablanca!!) allí estuve 3 años y recibí una formación clásica muy completa en los mediados de los años 80, alcanzando la fuerza de un jugador de primera categoría. Cuestiones personales y laborales hicieron que a los 16 años dejara de estudiar y casi de jugar. A los 18 años jugué mis últimos torneos y, a partir de entonces, participé de manera muy esporádica en algún torneo por equipos en forma muy discontinuada.</p>
                    </div>
                    <div className="md:w-1/2 w-full flex relative">
                        <Image
                            className="md:w-4/5 w-full mx-auto h-auto my-auto"
                            src={'/fedechessblog.png'}
                            height={1000}
                            width={1000}
                            alt="blog image"
                            priority
                        />
                        <h3 className="font-bold md:text-5xl text-2xl mx-auto md:text-black mb-5 md:hidden absolute bottom-0 right-0 left-0 flex justify-center items-center text-white">
                            Federico Garcia Lemos
                        </h3>
                    </div>

                </div>
                <div className="block md:hidden">

                    <SeeMore/>

                </div>

                <p className="text-black text-lg leading-relaxed p-10 md:p-0 hidden md:block max-w-5xl mx-auto">Pero, como algunos de mis mejores amigos eran del ámbito ajedrecístico, por lo que, a pesar de no jugar de manera informal y mucho menos competitiva, siempre seguí <strong>ligado al juego</strong> de una u otra manera. De cualquier forma, uno nunca deja totalmente al ajedrez, por lo que, luego de muchos años sin jugar ni estudiar, y ejerciendo la práctica docente de otra disciplina en escuelas secundarias, me volví a vincular al juego, como docente, alrededor del año 2005. Había pasado mucho tiempo desde mi época adolescente de jugador y estaba desactualizado, por lo que me dediqué, en principio, a estudiar cuestiones de orden pedagógico y relativas a la enseñanza del juego ciencia.
                    Pero..... a mediados del 2009 ingresé como docente en mi querida <strong>Escuela Municipal de ajedrez &quot;Roberto Grau&quot; de Morón</strong> y, a instancias de colegas y alumnos, volví a jugar de manera competitiva torneos por equipos representando a esa institución, pero nada más. Entonces...... el bichito del ajedrez me empezó a picar de nuevo y, a mediados del 2011 decidí volver a competir!! Tenía casi 40 años, estaba muy desactualizado y totalmente fuera de forma. Además, la práctica del juego había cambiado muchísimo (imaginen que yo había jugado con relojes analógicos y suspendía las partidas...). No tenía <strong>ELO FIDE</strong> y el juego clásico que yo había aprendido y estudiado se había transformado de forma drástica con la introducción de computadoras, bases de datos y módulos de análisis (que, como sospecharán no sabía manejar adecuadamente). En ese contexto, las perspectivas de progreso eran poco alentadoras, pero yo confiaba ciegamente en la formación que había recibido en mi adolescencia y, sobre todo en mis condiciones. Ingresé al listado de <strong>ELO</strong> con 1989, puntuación más que respetable para muchos pero que me supo a poco, ya que, internamente sentía que estaba para mucho más. A partir de allí estuve un par de años jugando cuando mis obligaciones laborales y familiares me lo permitían, pero, pude leer un montón de material sobre entrenamiento (Dvoretsky, Michailchisin, Aagard, etc) y empecé a aplicar sus recomendaciones conmigo mismo (En alguna entrada de esta página contaré, específicamente, en qué consistió ese trabajo).
                    Al final del año 2015 ese trabajo rindió sus frutos y <strong>superé la barrera de los 2200 ELO FIDE</strong> que era el piso que yo me había propuesto alcanzar desde mi vuelta al ajedrez. Pero seguía compitiendo de forma irregular y espaciada según me lo permitiera el trabajo y la familia, por lo que, subía y bajaba de ranking y no conseguía progresar hacia el nuevo objetivo propuesto, los <strong>2300 puntos de ELO</strong> y el ansiado título de MF.
                    A comienzos del año 2019 jugué los 2 peores torneos de mi vida y bajé 70 puntos de ELO, por lo que me propuse jugar todos los torneos importantes que pudiera y entrenarme de forma sistemática e intensiva. <strong>Ese cambio de mentalidad cambió radicalmente mi desempeño</strong>, gané varios torneos, clasifiqué a un ITT (torneo cerrado con norma de MI en el que salí en 4º puesto) y competí de igual a igual con todos mis rivales, muchos de ellos, <strong>los mejores de mi país</strong>.
                    A comienzos del 2020 y luego de seguir entrenando de forma autodidacta la ya interminable pandemia del Covid interrumpe la actividad ajedrecística competitiva y me deja en el pico más alto de mi <strong>ELO FIDE, 2288</strong> (<a className="underline text-blue-500 font-bold" href="https://ratings.fide.com/profile/134651" target="_blank">Perfil de FIDE</a>). ¿Podré llegar a los anhelados <strong>2300</strong> y obtener el título de Maestro Fide? Lamentablemente no llegué, pero <strong>sigo compitiendo y entrenando, más enfocado en mi faceta de profesor y entrenador online, pero compitiendo con esfuerzo y dedicación cuando puedo hacerlo.</strong></p>
            </section>
            <section className="h-fit md:p-20 p-5 bg-white">
                <h3 className="font-bold md:text-5xl text-2xl text-gray-800 mx-auto w-fit my-10">Trofeos</h3>
                <TrophySlider />
            </section>
            <section className="p-5 bg-white hidden md:flex">
                <div className="mx-auto w-fit h-fit flex md:flex-row flex-col">
                    <div className="flex flex-row">
                        <h2 className="font-semibold text-xl h-fit mr-2 my-auto">Seguime!</h2>
                        <Link className="my-auto h-fit" href={'https://facebook.com'}><FaFacebook className=' hover:rotate-45 transition-all ease-in duration-500 text-black text-5xl mx-3' /></Link>
                        <Link className="my-auto h-fit" href={'https://instagram.com'}><AiFillInstagram className=' hover:rotate-45 transition-all ease-in duration-500 text-black text-5xl mx-3' /></Link>
                        <Link className="my-auto h-fit" href={'https://youtube.com'}><FaYoutube className=' hover:rotate-45 transition-all ease-in duration-500 text-black text-5xl mx-3' /></Link>
                    </div>
                    <Link className="my-auto py-3 px-20 text-xl mx-3 bg-black text-white h-fit w-fit shadow-md text-center hover:shadow-2xl transition-shadow duration-300" href={'/contacto'}>Contactar</Link>
                </div>
            </section>
            <section className="bg-white py-20">
                <h3 className="font-bold text-2xl text-gray-800 mx-auto w-fit mb-10">Algunos recuerdos</h3>
                <ImageSlider />
            </section>

        </>
    );
}