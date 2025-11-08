import { TopMenu } from "@/components";
import { blogs } from "@/data/bloginfo";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

export default function BlogPage() {
  return (
    <>
      <div className="h-[90vh] bg-[url('/chess-background.jpg')] bg-cover bg-center relative">
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-black/30 to-black/100"></div>

        <div className="relative flex flex-col z-10 justify-center h-[80vh]">
          <TopMenu />
          <div className="flex flex-col h-fit my-auto w-fit mx-auto pt-10">
            <h1 className="font-bold text-5xl my-3 text-center text-white">Blog</h1>
            <p className="mt-2 md:w-3/6 w-5/6 text-sm md:text-base text-center mx-auto text-white">Conocé todas las opciones que tenemos para principiantes y avanzados. Desde aprender las reglas hasta dominar complejas estrategias. Preparate para dominar tu juego y tu mente.</p>
            <a href="#entradas" className="py-2.5 px-16 text-xl max-w-64  mx-auto bg-white text-black h-fit w-fit shadow-md text-center hover:shadow-2xl transition-shadow duration-300 my-6">Ver Entradas</a>
            <RiArrowDownSLine className="text-7xl font-extrabold text-white text-center mx-auto" />
          </div>
        </div>
      </div>
      <section className="h-fit pt-20 bg-white">
        <Link href={'/blog/1'} className="container bg-bottom h-[80vh] mx-auto my-auto flex bg-cover" style={{ backgroundImage: `url(${blogs[0].img})` }}>
          <div className="flex mt-auto mr-auto ml-5 mb-5 flex-col">
            <p className="text-white">{blogs[0].subtitle}</p>
            <h2 className="font-semibold text-5xl text-white">{blogs[0].title}</h2>
          </div>
        </Link>
      </section>

      <section id="entradas" className="h-fit py-10 bg-white flex flex-col">
        <h1 className="text-4xl font-bold text-black mx-auto w-fit mb-10">Últimos posteos</h1>
        <div className="h-fit grid grid-cols-1 md:grid-cols-3 container my-auto mx-auto gap-1">
          {
            blogs.map((item, index) => (
              <Link  href={`/blog/${index + 1}`} key={index} className="transition-all hover:-translate-y-2 aspect-[1/1] bg-bottom bg-cover w-full h-[30vh] md:h-[50vh] lg:h-[60vh] mx-auto my-auto flex" style={{ backgroundImage: `url(${item.img})` }}>
                <div className="flex mt-auto mr-auto ml-5 mb-5 flex-col">
                  <p className="text-white">{item.subtitle}</p>
                  <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl text-white">{item.title}</h2>
                </div>
              </Link>))
          }
        </div>
      <div className="w-fit mx-auto flex flex-col">
        <a href="#entradas" className="text-2xl max-w-64 mx-auto text-black h-fit w-fit text-center mt-10">Ver más entradas</a>
        <RiArrowDownSLine className="text-7xl font-extrabold text-black text-center mx-auto" />
      </div>
      </section>
    </>

  );
}