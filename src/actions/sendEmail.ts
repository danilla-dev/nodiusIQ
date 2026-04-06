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
        <div style="font-family: sans-serif; background: #05070A; color: #fff; padding: 20px;">
          <h2 style="color: #00AEEF;">Nowa wiadomość z formularza NodiusIQ</h2>
          <p><strong>Imię:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${tel}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="border-top: 1px solid #333; pt: 10px;"><strong>Wiadomość:</strong></p>
          <p>${message}</p>
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
