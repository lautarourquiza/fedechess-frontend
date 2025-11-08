'use client'
import React, {useState} from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

export const SeeMore = () => {

const [isClicked, SetisClicked] = useState(false) 

  return (
    <div>
        
        {isClicked 
            
            ? <>
                <h1 className='text-lg font-semibold mx-auto w-fit'>Seguir Leyendo</h1>
                <RiArrowDownSLine className="text-7xl font-extrabold  text-center mx-auto" onClick={()=>SetisClicked(!isClicked)}/>
              </> 
        
            :<>
                <p className="text-black leading-relaxed p-10 md:p-0 text-base">Pero, como algunos de mis mejores amigos eran del ámbito ajedrecístico, por lo que, a pesar de no jugar de manera informal y mucho menos competitiva, siempre seguí <strong>ligado al juego</strong> de una u otra manera. De cualquier forma, uno nunca deja totalmente al ajedrez, por lo que, luego de muchos años sin jugar ni estudiar, y ejerciendo la práctica docente de otra disciplina en escuelas secundarias, me volví a vincular al juego, como docente, alrededor del año 2005. Había pasado mucho tiempo desde mi época adolescente de jugador y estaba desactualizado, por lo que me dediqué, en principio, a estudiar cuestiones de orden pedagógico y relativas a la enseñanza del juego ciencia.
                    Pero..... a mediados del 2009 ingresé como docente en mi querida <strong>Escuela Municipal de ajedrez &quot;Roberto Grau&quot; de Morón</strong> y, a instancias de colegas y alumnos, volví a jugar de manera competitiva torneos por equipos representando a esa institución, pero nada más. Entonces...... el bichito del ajedrez me empezó a picar de nuevo y, a mediados del 2011 decidí volver a competir!! Tenía casi 40 años, estaba muy desactualizado y totalmente fuera de forma. Además, la práctica del juego había cambiado muchísimo (imaginen que yo había jugado con relojes analógicos y suspendía las partidas...). No tenía <strong>ELO FIDE</strong> y el juego clásico que yo había aprendido y estudiado se había transformado de forma drástica con la introducción de computadoras, bases de datos y módulos de análisis (que, como sospecharán no sabía manejar adecuadamente). En ese contexto, las perspectivas de progreso eran poco alentadoras, pero yo confiaba ciegamente en la formación que había recibido en mi adolescencia y, sobre todo en mis condiciones. Ingresé al listado de <strong>ELO</strong> con 1989, puntuación más que respetable para muchos pero que me supo a poco, ya que, internamente sentía que estaba para mucho más. A partir de allí estuve un par de años jugando cuando mis obligaciones laborales y familiares me lo permitían, pero, pude leer un montón de material sobre entrenamiento (Dvoretsky, Michailchisin, Aagard, etc) y empecé a aplicar sus recomendaciones conmigo mismo (En alguna entrada de esta página contaré, específicamente, en qué consistió ese trabajo).
                    Al final del año 2015 ese trabajo rindió sus frutos y <strong>superé la barrera de los 2200 ELO FIDE</strong> que era el piso que yo me había propuesto alcanzar desde mi vuelta al ajedrez. Pero seguía compitiendo de forma irregular y espaciada según me lo permitiera el trabajo y la familia, por lo que, subía y bajaba de ranking y no conseguía progresar hacia el nuevo objetivo propuesto, los <strong>2300 puntos de ELO</strong> y el ansiado título de MF.
                    A comienzos del año 2019 jugué los 2 peores torneos de mi vida y bajé 70 puntos de ELO, por lo que me propuse jugar todos los torneos importantes que pudiera y entrenarme de forma sistemática e intensiva. <strong>Ese cambio de mentalidad cambió radicalmente mi desempeño</strong>, gané varios torneos, clasifiqué a un ITT (torneo cerrado con norma de MI en el que salí en 4º puesto) y competí de igual a igual con todos mis rivales, muchos de ellos, <strong>los mejores de mi país</strong>.
                    A comienzos del 2020 y luego de seguir entrenando de forma autodidacta la ya interminable pandemia del Covid interrumpe la actividad ajedrecística competitiva y me deja en el pico más alto de mi <strong>ELO FIDE, 2288</strong> (<a className="underline text-blue-500 font-bold" href="https://ratings.fide.com/profile/134651" target="_blank">Perfil de FIDE</a>). ¿Podré llegar a los anhelados <strong>2300</strong> y obtener el título de Maestro Fide? Lamentablemente no llegué, pero <strong>sigo compitiendo y entrenando, más enfocado en mi faceta de profesor y entrenador online, pero compitiendo con esfuerzo y dedicación cuando puedo hacerlo.</strong>
                </p>
                <RiArrowUpSLine className="text-7xl font-extrabold  text-center mx-auto" onClick={()=>SetisClicked(!isClicked)}/>
                <h1 className='text-lg font-semibold mx-auto w-fit'>Ver Menos</h1>
                
            </>   
        }
    </div>
  )
}
