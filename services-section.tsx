import { Globe, MessageSquare, Network, Settings2 } from 'lucide-react'

const SERVICES = [
  {
    icon: MessageSquare,
    title: 'En comunicación',
    description:
      'Diagnosticamos y planificamos para conectar identidad, oferta, experiencias y circuitos para que todo se exprese de manera coherente y organizada.',
  },
  {
    icon: Globe,
    title: 'Comercio internacional',
    description:
      'Leemos la relación entre propósito, capacidad productiva, producto, mercado, regulaciones, costos, logística y compradores.',
  },
  {
    icon: Network,
    title: 'Desarrollo comercial regional',
    description:
      'Optimizamos y conectamos capacidades, oportunidades, actores y vínculos posibles.',
  },
  {
    icon: Settings2,
    title: 'En gestión',
    description:
      'Mapeamos procesos, roles, circuitos de información, herramientas e indicadores. Detectamos fricciones y traducimos necesidades en mejoras concretas.',
  },
]

export function ServicesSection() {
  return (
    <section id="que-hacemos" className="scroll-mt-20 border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-5 lg:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            02 / Servicios
          </p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            Qué hacemos
          </h2>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            Sumamos las miradas que cada desafío necesita para leer el sistema completo, construir criterio y articular la acción.
            Acompañamos a empresas que quieren exportar, expandirse u ordenar la estructura que su crecimiento necesita.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="group rounded-lg border border-border p-6 transition-colors hover:border-primary"
            >
              <service.icon
                className="h-5 w-5 text-primary transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg leading-snug text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
