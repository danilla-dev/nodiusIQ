'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquareHeart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Schemat walidacji Zod
const formSchema = z.object({
	name: z.string().min(2, 'Imię jest wymagane'),
	tel: z.string().min(9, 'Podaj poprawny numer telefonu'),
	message: z.string().min(5, 'Wiadomość jest zbyt krótka'),
})

export function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			tel: '',
			message: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Tutaj w przyszłości podepniesz Resend lub Server Action
		console.log(values)
		alert('Wiadomość wysłana! Odezwiemy się niebawem.')
		reset()
	}

	return (
		<section id='kontakt' className='py-20 md:py-32 bg-background relative overflow-hidden'>
			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div className='max-w-3xl mx-auto text-center space-y-12'>
					<div className='space-y-4'>
						<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>Zrealizujmy Twój plan.</h2>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='niq-card p-6 md:p-10 border-primary/20 bg-card/50 backdrop-blur-sm'
					>
						<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='space-y-2 text-left'>
									<Input
										placeholder='Imię'
										{...register('name')}
										className={`bg-background/50 border-border/60 h-12 ${errors.name ? 'border-destructive' : ''}`}
									/>
									{errors.name && <p className='text-sm font-medium text-destructive'>{errors.name.message}</p>}
								</div>
								<div className='space-y-2 text-left'>
									<Input
										placeholder='Telefon'
										type='tel'
										{...register('tel')}
										className={`bg-background/50 border-border/60 h-12 ${errors.tel ? 'border-destructive' : ''}`}
									/>
									{errors.tel && <p className='text-sm font-medium text-destructive'>{errors.tel.message}</p>}
								</div>
							</div>
							<div className='space-y-2 text-left'>
								<Textarea
									placeholder='Wiadomość'
									{...register('message')}
									className={`bg-background/50 border-border/60 min-h-[150px] resize-none ${errors.message ? 'border-destructive' : ''}`}
								/>
								{errors.message && <p className='text-sm font-medium text-destructive'>{errors.message.message}</p>}
							</div>
							<Button
								type='submit'
								disabled={isSubmitting}
								className='w-full h-14 text-base font-bold rounded-xl uppercase tracking-wider shadow-[0_0_20px_rgba(0,174,239,0.2)]'
							>
								{isSubmitting ? 'Wysyłanie...' : 'Zamów darmową wycenę'}
							</Button>
						</form>
					</motion.div>

					{/* Dane kontaktowe i Sociale */}
					<div className='flex flex-col md:flex-row items-center justify-center gap-8 pt-8 text-muted-foreground'>
						<a
							href='mailto:kontakt@nodusiq.pl'
							className='flex items-center gap-2 hover:text-primary transition-colors'
						>
							<Mail className='w-5 h-5' /> kontakt@nodusiq.pl
						</a>
						<a href='tel:+48123456789' className='flex items-center gap-2 hover:text-primary transition-colors'>
							<Phone className='w-5 h-5' /> +48 123 456 789
						</a>
					</div>
				</div>
			</div>

			{/* Dekoracja Nodus w tle (nawiązanie do layoutu) */}
			<div className="absolute bottom-0 left-0 w-full h-64 bg-[url('/nodus-pattern.svg')] opacity-10 pointer-events-none" />
		</section>
	)
}
