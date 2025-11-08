import { ClassSelector, TopMenu, Acordeon } from "@/components";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ClassPage() {
    return (
        <>
            <div className="h-[90vh] bg-[url('/clases.jpg')] bg-cover bg-center relative">
                <div className="absolute z-0 inset-0 bg-gradient-to-b from-black/30 to-black/100"></div>

                <div className="relative flex flex-col z-10 justify-center h-[80vh]">
                    <TopMenu/>
                    <div className="flex flex-col h-fit my-auto w-fit mx-auto">
                        <h1 className="font-bold text-3xl md:text-5xl text-center text-white">Clases de Ajedrez</h1>
                        <p className="mt-2 text-white hidden md:block">Herramientas, consejos, claves y experiencias para todo tipos de jugadores.</p>
                        <p className="mt-2 block md:hidden w-11/12 mx-auto text-center text-sm text-gray-300 font-thin">Conocé todas las opciones que tenemos para jugadores principiantes, intermedios y avanzados: desde el aprendizaje de las reglas, pasando por conceptos básicos de táctica y estrategia, nociones de aperturas, armado de repertorio, medio juego, finales, preparación para torneos y planes de entrenamiento.</p>
                        <a href="#niveles" className="md:py-2.5 md:px-16 px-8 py-2 text-md md:text-xl  mx-auto bg-white text-black h-fit w-fit shadow-md text-center hover:shadow-2xl transition-shadow duration-300 my-6">Ver niveles</a>
                        <RiArrowDownSLine className="text-7xl font-extrabold  text-center mx-auto" />
                    </div>
                </div>
            </div>
          
            <section className="relative bg-white xl:h-[100vh] overflow-visible hidden md:flex">
                <div className="w-1/2 flex justify-end relative">
                    <Image
                        className="w-auto h-auto max-w-full max-h-full object-contain -mt-20 z-0 mr-5"
                        src={"/fedechess-clases.png"}
                        alt="clases image"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="w-1/2 flex flex-col h-fit my-auto">
                    <h1 className="w-5/6 font-bold mr-auto ml-auto text-black text-2xl">Exploramos todas las etapas del ajedrez: las aperturas, el medio juego y los finales. </h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-5/6 mx-auto mt-5">
                        <div className="h-fit flex flex-col text-black text-xl">
                            <span className="font-normal inline mb-2 font-sans">Resolver problemas tácticos:<br /></span>
                            <h1 className="font-thin opacity-80 tracking-wide">A través de ejercicios y estudios de partidas, mejorarás tu capacidad para encontrar las mejores jugadas.</h1></div>
                        <div className="h-fit flex flex-col text-black text-xl">
                            <span className="font-normal inline mb-2 font-sans">Jugar partidas:<br /></span>
                            <h1 className="font-thin opacity-80 tracking-wide">Pondrás en práctica lo aprendido en partidas reales para ganar experiencia y consolidar tus conocimientos. </h1></div>
                        <div className="h-fit flex flex-col text-black text-xl">
                            <span className="font-normal inline mb-2 font-sans">Análisis de partidas:<br /></span>
                            <h1 className="font-thin opacity-80 tracking-wide">Estudiaremos partidas de grandes maestros para aprender planes modelos y maniobras típicas.</h1></div>
                        <div className="h-fit flex flex-col text-black text-xl">
                            <span className="font-normal inline mb-2 font-sans">Integral:<br /></span>
                            <h1 className="font-thin opacity-80 tracking-wide">En nuestros cursos de ajedrez exploramos todas las etapas del juego: aperturas, medio juego y finales, profundizando en cada una de ellas.</h1></div>
                    </div>
                </div>
            </section>

            <section className="relative bg-white h-fit pb-10 flex flex-col overflow-visible md:hidden">
                <div className="w-full flex flex-row">
                    <Image
                        className="w-9/12 h-auto object-contain -ml-16 -mt-10 z-0"
                        src={"/fedechess-clases.png"}
                        alt="clases image"
                        width={1000}
                        height={1000}
                    />
                    <div className="w-5/12 h-auto flex">
                        <h1 className="w-11/12 font-bold mx-auto text-black text-right h-fit text-xl my-auto">Exploramos todas las etapas del ajedrez: las aperturas, el medio juego y los finales. </h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-5/6 mx-auto mt-5">
                    <div className="h-fit flex flex-col text-black text-lg">
                        <span className="font-normal inline mb-2 font-sans">Resolver problemas tácticos:<br /></span>
                        <h1 className="font-thin opacity-80 tracking-wide leading-tight">A través de ejercicios y estudios de partidas, mejorarás tu capacidad para encontrar las mejores jugadas.</h1></div>
                    <div className="h-fit flex flex-col text-black text-lg">
                        <span className="font-normal inline mb-2 font-sans">Jugar partidas:<br /></span>
                        <h1 className="font-thin opacity-80 tracking-wide leading-tight">Pondrás en práctica lo aprendido en partidas reales para ganar experiencia y consolidar tus conocimientos. </h1></div>
                    <div className="h-fit flex flex-col text-black text-lg">
                        <span className="font-normal inline mb-2 font-sans">Análisis de partidas:<br /></span>
                        <h1 className="font-thin opacity-80 tracking-wide leading-tight">Estudiaremos partidas de grandes maestros para aprender planes modelos y maniobras típicas.</h1></div>
                    <div className="h-fit flex flex-col text-black text-lg">
                        <span className="font-normal inline mb-2 font-sans">Integral:<br /></span>
                        <h1 className="font-thin opacity-80 tracking-wide leading-tight">En nuestros cursos de ajedrez exploramos todas las etapas del juego: aperturas, medio juego y finales, profundizando en cada una de ellas.</h1></div>
                </div>
            </section>
            <section className="py-10 bg-white">
            <h1 className="text-3xl font-bold text-black mx-auto w-fit my-6">Niveles de las clases</h1>
                <div className="max-w-xl mx-auto block lg:hidden">
                    <Acordeon/>
                </div>
                <div className="hidden lg:block">
                    <div className="w-11/12 max-w-7xl mx-auto bg-white">
                        <ClassSelector/>
                    </div>
                </div>
            </section>
        </>
    );
}