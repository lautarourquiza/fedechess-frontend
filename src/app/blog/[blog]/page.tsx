'use client'
import { TopMenu } from "@/components";
import { BlogButton } from "@/components/ui/button/BlogButton";
import { blogs } from "@/data/bloginfo";
import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BiShareAlt } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";


export default function BlogPage() {
    const blog = decodeURIComponent(useParams().blog as string);

    const blogIndex = parseInt(blog, 10) - 1;

    if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= blogs.length) {
        return <p className="text-center mt-10">Post no encontrado.</p>;
    }

    const blogData = blogs[blogIndex];
    return (
        <div className="bg-white min-h-screen">
            <div className="hidden md:block">
                <section>
                    <div className="bg-black">
                        <TopMenu />
                    </div>
                    <div className="justify-between flex flex-row items-center bg-white h-fit w-11/12 mx-auto py-10">
                        <Link href={'/blog'} className="flex flex-row text-2xl my-20 items-center text-black ">
                            <RiArrowLeftSLine className="text-4xl font-extrabold mr-5" />
                            Volver a Blog
                        </Link>
                        <h4 className="text-xl">{blogData.date}</h4>
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center container mx-auto">
                        <Image alt={blogData.title} src={blogData.img} width={1000} height={1000} className="w-11/12 mx-auto h-auto object-cover rounded mb-20" />
                    </div>
                    <div className="w-11/12 mx-auto pb-20">
                        <h1 className="text-6xl font-semibold text-black text-center mb-5">{blogData.title}</h1>
                        <p className="text-2xl text-gray-800 font-light text-center mb-10">{blogData.subtitle}</p>
                    </div>
                </section>
            </div>
            <div className="block md:hidden">
                <section className="relative flex flex-col bg-cover min-h-[100dvh]" style={{ backgroundImage: `url(${blogData.img})` }}>
                    <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/100"></div>
                    <TopMenu />
                    <div className="flex flex-col justify-between mt-auto h-fit">
                        <div className="w-11/12 mx-auto pb-5 z-10 relative">
                            <h1 className="text-5xl font-semibold text-white text-center mb-5">{blogData.title}</h1>
                            <p className="text-2xl text-gray-100 font-light text-center mb-10">{blogData.subtitle}</p>
                        </div>
                        <div className="justify-between flex flex-row items-center h-fit w-11/12 mx-auto py-10 z-50 mt-auto">
                            <Link href={'/blog'} className="flex flex-row text-lg my-5 items-center text-white ">
                                <RiArrowLeftSLine className="text-4xl font-extrabold mr-5" />
                                Volver a Blog
                            </Link>
                            <h4 className="text-base text-white">{blogData.date}</h4>
                        </div>
                    </div>
                </section>
            </div>
            <section className="w-11/12 mx-auto flex flex-col justify-center py-10 bg-white h-fit">
                <div className="text-lg text-black grid grid-cols-1 auto-rows-auto md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto blog-posts" dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
            </section>
            <section className="flex md:flex-row flex-col-reverse justify-between bg-white h-fit w-11/12 mx-auto py-10 container">
                <div className="flex md:flex-col h-fit flex-row justify-around w-full md:w-fit">
                    <button className="bg-black text-white md:text-xl text-base font-bold py-4 px-7 md:flex items-center hidden w-fit">Compartir blog<Share2 className="ml-2" /></button>
                    <div className="flex flex-row items-center justify-center md:gap-5 gap-2 w-fit mt-0 md:mt-5 md:mx-auto mx-0">
                        <Link href={''}><BiShareAlt className="text-3xl ml-2 block md:hidden" /></Link>
                        <Link href={''}><FaInstagram className="text-4xl font-bold" /></Link>
                        <Link href={''}><FaFacebook className="text-4xl font-bold" /></Link>
                        <Link href={''}><FaWhatsapp className="text-4xl font-bold" /></Link>
                    </div>
                    <BlogButton/>
                </div>
                <p className="md:text-xl font-base ml-auto mb-10 md:mb-0 font-normal">Federico García Lemos</p>
            </section>
            <section className="container mx-auto">
                <div className="w-full md:w-11/12 mx-auto flex flex-col justify-center py-20 px-16 bg-white h-fit">
                    <h1 className="text-4xl font-bold mb-4">Dejame tu comentario!</h1>
                    <p className="text-gray-600 mb-8">Envíanos un mensaje para dejar tu opinión.</p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full border-b-2 border-gray-500 focus:border-black focus:outline-none p-1"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                className="mt-1 block rounded-none w-full border border-gray-500 focus:border-black focus:rounded-none focus:border-2 p-2 h-32"
                                placeholder=""
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-black text-white text-xl px-10 py-3 shadow hover:bg-gray-800 focus:outline-none"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}
