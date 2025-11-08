import Image from "next/image"
import Link from "next/link"
import { FaChessPawn, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { SiLichess } from "react-icons/si"


export const Footer = () => {
    return (
        <div className='h-fit py-10 bg-black flex-col flex'>
            <div className='md:w-11/12 w-9/12 mx-auto max-w-[1680px]'>
                <div className='flex justify-between w-11/12 text-lg flex-col md:flex-row mx-auto md:mb-0 mb-3'>
                    <Link className='my-auto' href={"/"}>
                        <Image alt="App Logo" src={'/fede-chess-footer.png'} width={1000} height={1000} className="md:h-[9vh] h-[7vh] lg:h-[12vh] mx-auto w-auto my-5" />
                    </Link>
                    <Link className='my-auto text-white text-xl min-[850px]:text-base md:text-sm font-thin hover:-translate-y-1 transition-transform ease-in duration-300' href={"/"}>Home</Link>
                    <Link className='my-auto text-white text-xl min-[850px]:text-base md:text-sm font-thin hover:-translate-y-1 transition-transform ease-in duration-300' href={"/clases"}>Clases particulares</Link>
                    <Link className='my-auto text-white text-xl min-[850px]:text-base md:text-sm font-thin hover:-translate-y-1 transition-transform ease-in duration-300' href={"/blog"}>Blog</Link>
                    <Link className='my-auto text-white text-xl min-[850px]:text-base md:text-sm font-thin hover:-translate-y-1 transition-transform ease-in duration-300' href={"/about"}>Sobre mi</Link>
                    <Link className='my-auto text-white text-xl min-[850px]:text-base md:text-sm font-thin hover:-translate-y-1 transition-transform ease-in duration-300' href={"/contacto"}>Contacto</Link>
                </div>
                <hr className='border-spacing-1 h-px bg-white rounded-full w-auto mx-auto' />
            </div>
            <div className='flex mx-auto min-[500px]:flex-row w-fit my-auto h-fit mt-5 flex-col'>
                <div className="flex gap-5 mr-5 ">
                    <Link href={'https://youtube.com'}><FaYoutube className='hover:rotate-12 transition-all ease-in duration-100 text-white text-5xl rounded-full border p-2' /></Link>
                    <Link href={'https://instagram.com'}><FaInstagram className='hover:rotate-12 transition-all ease-in duration-100 text-white text-5xl rounded-full border p-2' /></Link>
                    <Link href={'https://facebook.com'}><FaFacebook className='hover:rotate-12 transition-all ease-in duration-100 text-white text-5xl rounded-full border p-2' /></Link>
                </div>
                <div className="flex gap-5 mx-auto mt-3  min-[500px]:mt-0">
                    <SiLichess className='text-5xl text-white p-1' />
                    <FaChessPawn className='text-5xl text-white p-1' />
                </div>
            </div>
        </div>
    )
}
