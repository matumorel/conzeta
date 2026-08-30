import { ArrowUpRight, FileText } from 'lucide-react'

const REPORTS = [
  { period: 'Q1 2026', title: 'Lorem ipsum dolor sit amet consectetur' },
  { period: 'Q4 2025', title: 'Sed do eiusmod tempor incididunt ut labore' },
  { period: 'Q3 2025', title: 'Ut enim ad minim veniam quis nostrud' },
  { period: 'Q2 2025', title: 'Duis aute irure dolor in reprehenderit' },
]

export function ReportsSection() {
  return (
    <section id="informes" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-5 lg:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            03 / Publicaciones
          </p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
            Informes
          </h2>
          <p className="leading-relaxed text-pretty text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <ul className="mt-14 border-t border-border">
          {REPORTS.map((report) => (
            <li key={report.period}>
              <a
                href="#contacto"
                className="group flex flex-col gap-3 border-b border-border py-6 transition-colors hover:bg-card sm:flex-row sm:items-center sm:gap-8 sm:px-2"
              >
                <span className="flex items-center gap-3 text-sm text-muted-foreground sm:w-32 sm:shrink-0">
                  <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
                  {report.period}
                </span>
                <span className="flex-1 text-lg leading-snug text-pretty text-foreground">
                  {report.title}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                  Solicitar
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
