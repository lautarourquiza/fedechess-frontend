'use client'
import { clsx } from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react'

export const ClassSelector = () => {

    const [Selected, setSelected] = useState<string | undefined>(undefined);

    const items = [
        {
            title: 'Principiante',
            data: (
                <>
                    <ul className="text-left text-sm list-disc w-9/12 mx-auto">
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

                </>
            )
        },
        {
            title: 'Intermedio',
            data: (
                <>
                    <ul className="text-left text-sm list-disc w-9/12 mx-auto">
                        <li>Métodos y entrenamiento de la técnica para calcular jugadas.</li>
                        <li>Resolución de táctica y combinaciones y estudios compuestos.</li>
                        <li>Juego activo y compensación por el material, El desbalance dinámico.</li>
                        <li>Estrategia: Mayoría de peones. Cadenas de peones. Bloqueo.</li>
                        <li>Estructura de peones: Peones centrales - Peón aislado. Peones colgantes. Estructura Carlsbad.</li>
                        <li>Finales: Finales de torres: Philidor, Lucena. Lado corto y lado largo. Torres contra peones.</li>
                        <li>Finales de alfiles: alfil contra peones. Alfiles del mismo color. Alfiles de diferente color.</li>
                        <li>Finales de caballos: Caballos versus peones. Caballo contra alfil.</li>
                        <li>Finales de damas: Dama versus peones. Dama contra torres.</li>
                        <li>Estudio de partidas propias. Posiciones críticas.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Avanzado',
            data: (
                <>
                    <ul className="text-left text-sm list-disc w-9/12 mx-auto">
                        <li>Criterios de selección de jugadas. Las jugadas candidatas.</li>
                        <li>Definición y clasificación de posiciones críticas.</li>
                        <li>Comentario de partidas propias. Modelos de análisis y partidas ejemplares.</li>
                        <li>Entrenamiento avanzado en la técnica del cálculo. El árbol de variantes.</li>
                        <li>Pensamiento táctico. Motivos, ideas y relación con objetivos.</li>
                        <li>Evaluación estratégica superior; criterios: seguridad del rey, espacio, dinámica de las piezas.</li>
                        <li>Finales: Finales de peones, piezas menores y torres. Métodos específicos.</li>
                        <li>Aperturas: esquemas típicos y repertorio sólido y agresivo de aperturas.</li>
                    </ul>
                </>
            )
        }
    ];

    const HandleSelect = (selection: string) => {
        setSelected(Selected === selection ? '' : selection);
    }

    return (
        <div className='grid grid-cols-3 gap-5 h-full'>
            {items.map(item => (
                <div
                    onMouseEnter={() => HandleSelect(item.title)}
                    onMouseLeave={() => HandleSelect('')}
                    key={item.title}
                    className={clsx(
                        'hover:scale-105 flex flex-col justify-between h-full text-xl text-center transition-all duration-300',
                        Selected === item.title ? 'bg-black text-white' : 'bg-white text-black'
                    )}
                >
                    <h1 className='text-2xl py-4'>{item.title}</h1>
                    <div className="flex flex-col flex-grow">{item.data}</div>
                    <div className="flex justify-center mt-auto mb-6">
                        <Link className={clsx("px-12 text-lg font-bold py-2 hover:bg-blue-700 transition mt-5", Selected === item.title ? 'bg-white text-black' : 'bg-black text-white')} href="/contacto">Tomar Clases</Link>
                    </div>
                </div>
            ))}

        </div>
    )
}