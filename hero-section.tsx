import { ArrowDownRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="scroll-mt-20 border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
          CONSULTORA ESTRATÉGICA Y COMERCIAL
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Distintas <span style={{ color: '#33cc99' }}>miradas,</span> una misma{' '}
          <span style={{ color: '#ac83ff' }}>direcci&oacute;n.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
          Ordenamos lo disperso, conectamos lo que estaba suelto y acompa&ntilde;amos cada decisi&oacute;n
          con m&eacute;todo y criterio.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contactar al equipo
          </a>
          <a
            href="#que-hacemos"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Ver servicios
            <ArrowDownRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {[
            { k: 'Hay recursos. Falta sistema.', v: 'Personas, piezas, contactos y herramientas existen, pero no trabajan en una misma dirección.' },
            { k: 'La oportunidad está. Hay que verla.', v: 'Nuevos mercados, alianzas y vínculos aparecen cuando miramos más allá de la operación cotidiana.' },
            { k: 'El crecimiento necesita criterio.', v: 'Ordenamos información y perspectivas para convertirlas en decisiones y próximos pasos.' },
          ].map((item) => (
            <div key={item.k} className="flex flex-col gap-2">
              <dt className="text-sm text-foreground">{item.k}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
