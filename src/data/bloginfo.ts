
export interface Blog {
  title: string;
  subtitle: string;
  content: string;
  img: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    title: "La Psicología en el Ajedrez",
    subtitle: "Cómo manejar la presión en partidas importantes.",
    img: "/chessblog3.jpg",
    date: "2023-10-02",
    content: `
      <div>
        <h3 className="text-5xl"><strong>La Importancia de la Estrategia</strong></h3>
        <p>Uno de los aspectos más fascinantes del ajedrez es la estrategia. Cada jugador debe anticipar las jugadas del oponente y desarrollar un plan a largo plazo. Grandes maestros como Garry Kasparov y Magnus Carlsen han demostrado cómo una buena estrategia puede llevar al éxito incluso en posiciones aparentemente desfavorables.</p>
      </div>
      <div>
        <h3><strong>La Paciencia como Virtud</strong></h3>
        <p>A diferencia de otros juegos, donde la rapidez puede ser clave, en el ajedrez la paciencia es esencial. Analizar cuidadosamente cada posición y esperar el momento adecuado para atacar o defender puede marcar la diferencia entre la victoria y la derrota.</p>
      </div>
      <div>
        <h3><strong>Creatividad en el Tablero</strong></h3>
        <p>Muchos creen que el ajedrez es un juego rígido, pero en realidad es un arte. Existen combinaciones espectaculares, sacrificios inesperados y maniobras sorprendentes que muestran el lado más creativo del juego. Grandes partidas han pasado a la historia por su belleza y originalidad.</p>
      </div>
      <div>
        <h3><strong>Beneficios del Ajedrez</strong></h3>
        <p>Además de ser un juego emocionante, el ajedrez ofrece múltiples beneficios. Mejora la concentración, desarrolla el pensamiento crítico y fomenta la toma de decisiones bajo presión. Por esta razón, muchas escuelas han incorporado el ajedrez como parte de su programa educativo.</p>
      </div>
    `,
  },
  {
    title: "El Rol del Ajedrez en la Educación",
    subtitle: "Cómo el ajedrez potencia el aprendizaje en niños y jóvenes.",
    img: "/chessblog2.jpg",
    date: "2023-10-03",
    content: `
      <div>
        <h3><strong>Fomento del Pensamiento Crítico</strong></h3>
        <p>El ajedrez enseña a los estudiantes a pensar antes de actuar. Les muestra cómo evaluar las consecuencias de sus decisiones, una habilidad clave en el proceso de aprendizaje.</p>
      </div>
      <div>
        <h3><strong>Mejora de la Concentración</strong></h3>
        <p>Durante una partida de ajedrez, la atención total es necesaria. Los estudiantes que practican ajedrez desarrollan una mayor capacidad de concentración, lo cual se traduce en mejores resultados académicos.</p>
      </div>
      <div>
        <h3><strong>Inclusión y Equidad</strong></h3>
        <p>El ajedrez es un lenguaje universal. No importa el idioma, nivel socioeconómico o género: todos pueden competir en igualdad de condiciones, fomentando la inclusión en el aula.</p>
      </div>
      <div>
        <h3><strong>Estímulo Emocional</strong></h3>
        <p>Aprender a ganar con humildad y perder con dignidad es una de las lecciones más valiosas del ajedrez. Esto contribuye al desarrollo emocional saludable de los estudiantes.</p>
      </div>
      `
  },
  {
    title: "Grandes Rivalidades en la Historia del Ajedrez",
    subtitle: "Duelo de mentes que marcaron época.",
    img: "/chessblog1.jpg",
    date: "2023-10-03",
    content: `
    <div>
        <h3><strong>Kasparov vs Karpov</strong></h3>
        <p>Una de las rivalidades más emblemáticas. Disputaron cinco campeonatos mundiales consecutivos entre 1984 y 1990. Kasparov representaba la agresividad y modernidad, mientras que Karpov el juego posicional clásico.</p>
    </div>
        <div>
        <h3><strong>Fischer vs Spassky</strong></h3>
        <p>El “Match del Siglo” en 1972 entre Bobby Fischer (EE.UU.) y Boris Spassky (URSS) fue más que una partida: simbolizó la tensión de la Guerra Fría. Fischer ganó, rompiendo décadas de dominio soviético.</p>
    </div>
        <div>
        <h3><strong>Carlsen vs Nepomniachtchi</strong></h3>
        <p>En la era moderna, el duelo entre Magnus Carlsen y Ian Nepomniachtchi destaca por su intensidad técnica y mental. Carlsen defendió con éxito su título mundial en 2021 en un match de alto nivel.</p>
    </div>
        `
  },
  // {
  //   title: "Errores Comunes de Principiantes",
  //   subtitle: "Aprendé qué evitar cuando recién empezás.",
  //   img: "/chessblog3.jpg",
  //   date: "2023-10-03",
  //   content: `
  //   <div>
  //       <h3><strong>Descuidar el Centro</strong></h3>
  //       <p>Uno de los errores más comunes es no controlar el centro del tablero. Las casillas centrales (e4, d4, e5, d5) ofrecen mayor movilidad a tus piezas.</p>
  //   </div>
  //   <div>
  //       <h3><strong>Mover demasiados peones</strong></h3>
  //       <p>Muchos principiantes abren demasiados peones sin desarrollar piezas. Esto puede debilitar su posición y dejar al rey vulnerable.</p>
  //   </div>
  //   <div>
  //       <h3><strong>Olvidarse del Rey</strong></h3>
  //       <p>No enrocarse a tiempo es un error grave. El rey debe estar seguro, preferentemente enrocado en el flanco.</p>
  //   </div>
  //   <div>
  //       <h3><strong>No pensar en la respuesta del rival</strong></h3>
  //       <p>El ajedrez no es solo lo que vos hacés, sino cómo puede responder tu oponente. Anticipar sus jugadas es clave para mejorar.</p>
  //   </div>
  //       `
  // }
];
