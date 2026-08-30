import { ArrowDownRight } from 'lucide-react'

const DECISION_POINTS = [
  'Analistas para entender la oportunidad.',
  'Más criterio para decidir.',
  'Un sistema para avanzar.',
]

export function ExportSection() {
  return (
    <section
      id="quiero-exportar"
      className="scroll-mt-20 overflow-hidden border-b border-border bg-card"
    >
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full border border-accent/30 sm:h-80 sm:w-80 lg:-right-10 lg:top-16"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-4 top-40 h-px w-52 rotate-[-32deg] bg-primary/60 sm:w-72 lg:right-12 lg:top-52"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            03 / comercio internacional
          </p>
          <h2 className="mt-7 max-w-3xl text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            ¿Pensás en exportar? Bien: pensar es el primer paso.
            <span className="mt-2 block text-brand-violet">Podemos guiar el recorrido.</span>
          </h2>
          <p className="mt-8 max-w-xl border-l-2 border-primary pl-5 text-xl leading-snug text-pretty sm:text-2xl">
            Convertimos la intención de exportar en un plan viable.
          </p>
        </div>

        <div className="relative self-end lg:pt-20">
          <ArrowDownRight
            className="mb-7 h-9 w-9 text-accent"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Cruzamos capacidad productiva, demanda, competencia, costos, requisitos y logística
            para que la empresa pueda decidir antes de invertir.
          </p>

          <div className="mt-9 border-t border-border pt-7">
            {DECISION_POINTS.map((point) => (
              <p
                key={point}
                className="border-b border-border py-3 text-lg font-normal leading-snug text-brand-violet last:border-b-0"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
