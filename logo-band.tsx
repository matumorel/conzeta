import Image from 'next/image'

export function LogoBand() {
  return (
    <section
      aria-label="ConZeta Consultora"
      className="border-y border-border bg-brand-violet text-ink-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 py-20 text-center lg:px-8 lg:py-28">
        <Image
          src="/conzeta-logo-completo.png"
          alt="ConZeta Consultora"
          width={1732}
          height={584}
          className="h-auto w-full max-w-md"
        />
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-xl text-balance text-sm uppercase tracking-[0.2em] text-ink-foreground/60">
            Insumos para decidir. Arquitectura para avanzar.
          </p>
        </div>
      </div>
    </section>
  )
}
