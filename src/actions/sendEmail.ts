'use server'

import { Resend } from 'resend'
import { z } from 'zod'

// Ponownie używamy schematu do walidacji po stronie serwera (bezpieczeństwo!)
const formSchema = z.object({
	name: z.string().min(2),
	tel: z.string().min(9),
	message: z.string().min(5),
	email: z.string().email(), // Jeśli chcesz dodać pole email do formularza
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
	// 1. Walidacja danych
	const validatedFields = formSchema.safeParse(formData)

	if (!validatedFields.success) {
		return { error: 'Niepoprawne dane formularza.' }
	}

	const { name, tel, message, email } = validatedFields.data

	try {
		const { data, error } = await resend.emails.send({
			from: 'NodiusIQ <kontakt@nodiusiq.pl>', // Musi być zweryfikowana domena w Resend
			to: email, // Gdzie ma przyjść powiadomienie
			subject: `Nowe zapytanie od: ${name}`,
			replyTo: 'kontakt@nodusiq.pl',
			html: `
  <div style="background-color: #05070A; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #0F1216; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      
      <div style="height: 4px; background: linear-gradient(to right, #B87333, #E2A76F, #B87333);"></div>

      <div style="padding: 30px; text-align: center; border-bottom: 1px solid #1E293B;">
        <h1 style="margin: 0; color: #00AEEF; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">
          Nodius<span style="font-weight: 800;">IQ</span>
        </h1>
        <p style="margin: 5px 0 0; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nowe zapytanie ofertowe</p>
      </div>

      <div style="padding: 30px;">
        <p style="color: #94A3B8; font-size: 14px; margin-bottom: 25px;">Otrzymano nową wiadomość z formularza kontaktowego:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #00AEEF; font-size: 13px; text-transform: uppercase; font-weight: bold; width: 100px;">Klient:</td>
            <td style="padding: 10px 0; color: #FFFFFF; font-size: 16px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #00AEEF; font-size: 13px; text-transform: uppercase; font-weight: bold;">Telefon:</td>
            <td style="padding: 10px 0; color: #FFFFFF; font-size: 16px;">
              <a href="tel:${tel}" style="color: #FFFFFF; text-decoration: none;">${tel}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #00AEEF; font-size: 13px; text-transform: uppercase; font-weight: bold;">E-mail:</td>
            <td style="padding: 10px 0; color: #FFFFFF; font-size: 16px;">
              <a href="mailto:${email}" style="color: #FFFFFF; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="margin-top: 30px; padding: 20px; background-color: #05070A; border-radius: 12px; border-left: 3px solid #00AEEF;">
          <p style="margin: 0 0 10px; color: #00AEEF; font-size: 12px; text-transform: uppercase; font-weight: bold;">Wiadomość:</p>
          <p style="margin: 0; color: #CBD5E1; line-height: 1.6; font-size: 15px;">
            ${message}
          </p>
        </div>
      </div>

      <div style="padding: 20px; text-align: center; background-color: #05070A; border-top: 1px solid #1E293B;">
        <p style="margin: 0; color: #475569; font-size: 11px;">
          &copy; 2026 NodiusIQ - Inteligentne Instalacje.<br>
          Wiadomość wygenerowana automatycznie przez system Smart Form.
        </p>
      </div>
    </div>
  </div>
`,
		})

		if (error) {
			return { error: 'Błąd serwera wysyłki. Spróbuj później.' }
		}

		return { success: true }
	} catch (err) {
		return { error: 'Wystąpił nieoczekiwany błąd.' }
	}
}
