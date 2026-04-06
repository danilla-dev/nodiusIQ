'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { FieldGroup } from '@/components/ui/field'
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact'
import { sendContactEmail } from '@/actions/sendEmail'
import { ContactInput, ContactTextArea } from './ContactFields'

export function ContactForm() {
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: { name: '', tel: '', email: '', message: '' },
	})

	async function onSubmit(data: ContactFormValues) {
		const result = await sendContactEmail(data)
		if (result.error) return toast.error(result.error)

		toast.success('Wysłano pomyślnie!')
		form.reset()
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup className='space-y-1 gap-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
					<ContactInput control={form.control} name='name' label='Imię' placeholder='Jan Kowalski' />
					<ContactInput control={form.control} name='tel' label='Telefon' type='tel' placeholder='+48...' />
				</div>

				<ContactInput control={form.control} name='email' label='Email' type='email' placeholder='email@domena.pl' />

				<ContactTextArea
					control={form.control}
					name='message'
					label='Wiadomość'
					placeholder='Opisz projekt...'
					maxChars={500}
				/>

				<Button
					type='submit'
					disabled={form.formState.isSubmitting}
					className='w-full h-16 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest shadow-[0_20px_40px_-15px_rgba(0,174,239,0.3)] transition-all hover:-translate-y-1 mt-4'
				>
					{form.formState.isSubmitting ? (
						<span className='flex items-center gap-2'>
							<span className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
							Wysyłanie...
						</span>
					) : (
						'Zamów darmową wycenę'
					)}
				</Button>
			</FieldGroup>
		</form>
	)
}
