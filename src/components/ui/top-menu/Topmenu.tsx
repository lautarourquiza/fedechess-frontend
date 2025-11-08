'use client'

import Image from "next/image"
import Link from "next/link"
import MenuIcon from "./menu-icon/MenuIcon"
import { useState } from "react";
import { usePathname } from "next/navigation";

export const TopMenu = () => {
  const pathname = usePathname(); // Obtiene la ruta actual
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { title: 'Home', href: '/' },
    { title: 'Clases', href: '/clases' },
    { title: 'Blog', href: '/blog' },
    { title: 'About Me', href: '/about' }
  ];

  return (
    <header className="relative z-50">
      {isOpen && (
        <div className="fixed inset-0 bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <nav className="flex flex-col items-center gap-6 mt-10 text-4xl text-center h-[60vh] my-auto justify-between">
            {routes.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className={`transition-transform duration-300 ${
                  pathname === route.href ? "font-bold" : "hover:-translate-y-1"
                }`}
              >
                {route.title}
              </Link>
            ))}
            <Link href={"/contacto"} className="w-2/3 text-3xl shadow-sm py-5 font-bold bg-black text-white h-fit mx-auto hover:shadow-white hover:shadow-sm shadow-slate-300 transition-shadow ease-in duration-300">Contacto</Link>
          </nav>
        </div>
      )}

      <div className="flex flex-row-reverse md:flex-row justify-between items-center h-[18vh] px-6">
        <Link href="/">
          <Image alt="App Logo" src="/fede-chess-logo.png" width={100} height={100} className="h-[8vh] w-auto" />
        </Link>

        <div className="md:hidden">
          <MenuIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        <nav className="hidden md:flex gap-6 text-lg text-white">
          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className={`transition-transform duration-300 ${
                pathname === route.href ? "font-bold underline" : "hover:-translate-y-1"
              }`}
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <Link href={"/contacto"} className="hidden md:block shadow-sm py-2 px-6 font-bold bg-slate-50 text-black h-fit my-auto mr-2 hover:shadow-white hover:shadow-sm shadow-slate-300 transition-shadow ease-in duration-300">Contacto</Link>
      </div>
    </header>
  );
};
