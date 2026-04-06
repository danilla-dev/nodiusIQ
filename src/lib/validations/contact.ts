import * as z from 'zod'

export const contactFormSchema = z.object({
	name: z.string().min(2, 'Imię jest wymagane'),
	tel: z.string().min(9, 'Podaj poprawny numer telefonu'),
	email: z.string().email('Podaj poprawny adres email'),
	message: z.string().min(5, 'Wiadomość jest zbyt krótka'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
