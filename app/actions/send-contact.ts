"use server"

import { Resend } from "resend"

type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContact(_prevState: ContactState, formData: FormData): Promise<ContactState> {
  const nombre = String(formData.get("nombre") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const mensaje = String(formData.get("mensaje") ?? "").trim()

  if (!nombre || !email || !mensaje) {
    return { status: "error", message: "Por favor completá todos los campos." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Ingresá un email válido." }
  }

  const apiKey = process.env.msg_RESEND_API_KEY
  const domain = process.env.msg_RESEND_EMAIL_DOMAIN

  if (!apiKey || !domain) {
    return {
      status: "error",
      message: "El servicio de correo no está configurado. Intentá más tarde.",
    }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: `Conzeta Web <no-reply@${domain}>`,
      to: "consulta@conzeta.com.ar",
      replyTo: email,
      subject: `Nueva consulta de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">Nueva consulta desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(mensaje)}</p>
        </div>
      `,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { status: "error", message: "No pudimos enviar tu consulta. Intentá nuevamente." }
    }

    return { status: "success", message: "¡Gracias! Tu consulta fue enviada correctamente." }
  } catch (err) {
    console.log("[v0] send-contact exception:", err)
    return { status: "error", message: "Ocurrió un error inesperado. Intentá nuevamente." }
  }
}
