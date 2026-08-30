import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-card">
            <Image
              src="/conzeta-mark.png"
              alt=""
              width={120}
              height={120}
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="text-sm text-foreground">ConZeta Consultora</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ConZeta. Santa Fe, Santa Fe, Argentina
        </p>
      </div>
    </footer>
  )
}
