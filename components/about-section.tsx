export function AboutSection() {
  return (
    <section id="quienes-somos" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">01 / Nosotros</p>
          <h2 className="mt-5 text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            Nuestra perspectiva
          </h2>

          <div className="mt-20 lg:mt-40">
            <ul className="flex flex-col items-start gap-2 text-left text-lg leading-relaxed">
              <li style={{ color: '#ac83ff' }}>Con otras miradas</li>
              <li style={{ color: '#ac83ff' }}>Con datos</li>
              <li style={{ color: '#ac83ff' }}>Con otras experiencias</li>
              <li style={{ color: '#ac83ff' }}>Con tu equipo</li>
              <li className="mt-2 text-xl" style={{ color: '#663399' }}>
                ConZeta
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-lg leading-relaxed text-pretty text-foreground">
            Leemos el sistema desde la comunicación.
            <br />
            <br />
            Construimos en conjunto la forma de transformarlo.
          </p>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            Así componemos la mesa de trabajo que cada desafío necesita: articulamos con los equipos internos e integramos las disciplinas y profesionales que pueden aportar valor a la lectura y a la intervención.
          </p>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {[
              { t: 'Lectura sistémica', d: 'Miramos negocio, marca, personas, procesos, vínculos y resultados.' },
              { t: 'Consejo plural', d: 'Integramos distintas disciplinas alrededor de una misma pregunta.' },
              {
                t: 'Criterio compartido',
                d: 'Convertimos información dispersa en prioridades para decidir.',
              },
              { t: 'Acción articulada', d: 'Traducimos la lectura en responsabilidades, herramientas y próximos pasos.' },
            ].map((item) => (
              <div key={item.t} className="bg-card p-6">
                <h3 className="text-base text-foreground">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
