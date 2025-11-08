'use client'
import clsx from 'clsx';
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const Acordeon = () => {

    const [Selected, setSelected] = useState<string | undefined>(undefined);

    const items = [
        {
            title: 'Principiante',
            data: (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="text-left text-white text-sm list-disc w-9/12 mx-auto">
                        <li>Movimientos de las piezas. Visualización de amenazas y capturas. Cualidades de las piezas.</li>
                        <li>Mates sencillos con pocas piezas.</li>
                        <li>Realización de la ventaja material.</li>
                        <li>Valor relativo de las piezas.</li>
                        <li>Estrategia general de las aperturas.</li>
                        <li>Control del centro. Tipos de centros.</li>
                        <li>La estructura de peones y su importancia.</li>
                        <li>Columnas abiertas. Séptima y octava fila.</li>
                        <li>Modelos de jaque mates típicos y recurrentes.</li>
                        <li>Motivos tácticos básicos.</li>
                        <li>Ataques al rey en el centro; ataques a reyes en el mismo flanco; ataques con enroques opuestos.</li>
                        <li>Iniciativa y tipos de ataque. Transformación de ventajas simples. Abandono de la iniciativa.</li>
                        <li>Conceptos básicos de finales; Iniciativa. Actividad de piezas. Maniobras para mejorar las piezas propias y alejar a las del adversario de la acción. El rey como pieza valiosa. Coordinación de piezas. Rey y peón versus rey. Regla del cuadrado, oposición. Finales sencillos de peones. Damas versus peones.</li>
                        <li>Iniciación en los criterios de evaluación de una posición.</li>
                        <li>Iniciación al estudio de partidas propias.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <Link className="bg-white text-black px-12 text-lg font-bold py-2 my-6 hover:bg-blue-700 transition" href="/contacto">Tomar Clases</Link>
                    </div>
                </motion.div>
            )
        },
        {
            title: 'Intermedio',
            data: (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="text-left text-white text-sm list-disc w-9/12 mx-auto">
                        <li>Métodos y entrenamiento de la técnica para calcular jugadas.</li>
                        <li>Resolución de táctica y combinaciones y estudios compuestos.</li>
                        <li>Juego activo y compensación por el material, El desbalance dinámico.</li>
                        <li>Estrategia: Mayoría de peones. Cadenas de peones. Bloqueo.</li>
                        <li>Estructura de peones: Peones centrales (estructuras más usuales en relación con las aperturas y medio juego) - Peón aislado. Peones colgantes. Ventaja de pequeño centro. Par de peones centrales. Estructura Carlsbad. Centro cerrado.</li>
                        <li>Finales: Finales de torres: Philidor, Lucena. Lado corto y lado largo. Torres contra peones. Torres versus piezas menores.</li>
                        <li>Finales de alfiles: alfil contra peones. Alfiles del mismo color. Alfiles de diferente color.</li>
                        <li>Finales de caballos: Caballos versus peones. Caballo contra alfil.</li>
                        <li>Finales de damas: Dama versus peones. Dama contra torres.</li>
                        <li>Estudio de partidas propias. Posiciones críticas.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <Link className="bg-white text-black px-12 text-lg font-bold py-2 my-6 hover:bg-blue-700 transition" href="/contacto">Tomar Clases</Link>
                    </div>
                </motion.div>
            )
        },
        {
            title: 'Avanzado',
            data: (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="text-left text-white text-sm list-disc w-9/12 mx-auto">
                        <li>Criterios de selección de jugadas. Las jugadas candidatas. Exámenes preliminares y finales.</li>
                        <li>Definición y clasificación de las posiciones y situaciones críticas durante una partida y en torneos.</li>
                        <li>Comentario de partidas propias. Modelos de análisis y partidas ejemplares.</li>
                        <li>Entrenamiento avanzado en la técnica del cálculo. El árbol de variantes. Evaluación.</li>
                        <li>Pensamiento táctico. Motivos, ideas y relación con objetivos.</li>
                        <li>Evaluación estratégica superior; criterios: seguridad del rey, espacio, dinámica de las piezas e interrelación. Estructuras de peones complejas y relaciones con esquemas de aperturas y medio juegos. Patrones o procedimientos típicos de medio juego.</li>
                        <li>Finales: Finales de peones, piezas menores y torres. Sistematización de métodos y procedimientos específicos de singularización.</li>
                        <li>Aperturas: esquemas típicos y básicos de aperturas. Repertorio sólido de apertura. Repertorio agresivo de aperturas. Mantenimiento.</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <Link className="bg-white text-black px-12 text-lg font-bold py-2 my-6 hover:bg-blue-700 transition" href="/contacto">Tomar Clases</Link>
                    </div>
                </motion.div>
            )
        }
    ];

    const HandleSelect = (selection: string) => {
        setSelected(Selected === selection ? '' : selection);
    }

    return (
        <div className='h-fit w-full md:w-10/12 mx-auto flex flex-col gap-2 bg-white'>
            {items.map(item => (
                <div
                    key={item.title}
                    className={clsx(
                        'w-full h-fit text-xl text-center cursor-pointer transition-all duration-300',
                        Selected === item.title ? 'bg-black text-white' : 'bg-white text-black'
                    )}
                >
                    <div onClick={() => HandleSelect(item.title)} className={clsx('py-5', Selected === item.title ? 'border-b-2 border-gray-800 mb-5' : '')}>
                        <div className='w-6/12 mx-auto flex flex-row justify-between'>
                            <h1 className='text-2xl'>{item.title}</h1>
                            <span className={clsx('text-3xl transition-transform duration-500', Selected === item.title ? 'transform rotate-180' : '')}>▿</span>
                        </div>

                    </div>

                    <AnimatePresence>
                        {Selected === item.title && item.data}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
