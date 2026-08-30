"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { sendContact } from "@/app/actions/send-contact"

const initialState = { status: "idle" as const, message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Enviar consulta"}
    </button>
  )
}

export function ContactSection() {
  const [state, formAction] = useActionState(sendContact, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <section id="contacto" className="scroll-mt-20 bg-card">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">04 / Contacto</p>
          <h2 className="text-3xl leading-tight tracking-tight text-balance sm:text-4xl">Hablemos de tu empresa</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl leading-tight text-pretty text-[#663399]">¿Un consejo? Consultá</h3>
            <p className="leading-relaxed text-pretty text-[#ac83ff]">
              No tenés que pensar en todo. Pero todos podemos pensar en tu marca.
            </p>
          </div>

          <ul className="mt-4 flex flex-col gap-4 border-t border-border pt-8">
            {[
              { icon: Mail, label: "consulta@conzeta.com.ar" },
              { icon: Phone, label: "+54 9 342 5 993599" },
              { icon: MapPin, label: "Santa Fe de la Vera Cruz, Santa Fe, Argentina" },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-sm text-foreground">
                <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <form ref={formRef} action={formAction} className="flex flex-col gap-5 rounded-lg border border-border p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-sm text-foreground">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Nombre de la empresa o persona fisica"
              className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-foreground">
              Email corporativo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="nombre@empresa.com"
              className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="text-sm text-foreground">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              placeholder="Estoy interesado en los servicios para..."
              className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
          </div>

          <SubmitButton />

          {state.status !== "idle" && (
            <p
              role="status"
              aria-live="polite"
              className={
                state.status === "success"
                  ? "text-sm text-primary"
                  : "text-sm text-destructive"
              }
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
