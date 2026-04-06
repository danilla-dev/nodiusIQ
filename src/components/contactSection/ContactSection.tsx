'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from './ContactForm'

export function Contact() {
	return (
		<section id='kontakt' className='py-20 md:py-32 bg-background relative overflow-hidden'>
			{/* TŁO: Poświata za formularzem */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] pointer-events-none z-0' />

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div className='max-w-3xl mx-auto text-center space-y-12'>
					{/* NAGŁÓWEK SEKCJI */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='space-y-4'
					>
						<span className='px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase'>
							Kontakt
						</span>
						<h2 className='text-4xl md:text-5xl lg:text-6xl mt-4 font-black tracking-tighter text-foreground uppercase leading-[0.95]'>
							Zrealizujmy <br />
							<span className='inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
								Twój plan
							</span>
						</h2>
					</motion.div>

					{/* KARTA FORMULARZA */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<Card className='border-border/40 bg-card/50 backdrop-blur-xl text-left shadow-2xl rounded-3xl overflow-hidden'>
							<div className='h-1.5 w-full bg-gradient-to-r from-primary via-primary/50 to-[#A88566]' />
							<CardContent className='p-6 py-4 md:p-10 md:py-6'>
								<ContactForm />
							</CardContent>
						</Card>
					</motion.div>

					{/* DANE KONTAKTOWE */}
					<div className='flex flex-col md:flex-row items-center justify-center gap-10 text-muted-foreground pt-4'>
						<ContactLink
							href='mailto:kontakt@nodusiq.pl'
							icon={<Mail className='w-5 h-5 text-primary' />}
							label='kontakt@nodusiq.pl'
						/>
						<ContactLink
							href='tel:+48512689242'
							icon={<Phone className='w-5 h-5 text-primary' />}
							label='512 689 242'
						/>
					</div>
				</div>
			</div>

			{/* Wzór siatki na dole */}
			<div className="absolute bottom-0 left-0 w-full h-64 bg-[url('/nodus-pattern.svg')] opacity-[0.03] pointer-events-none" />
		</section>
	)
}

const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
	<a
		href={href}
		className='group flex items-center gap-3 hover:text-primary transition-all duration-300 text-lg font-medium'
	>
		<div className='p-2 rounded-lg bg-secondary/10 group-hover:bg-primary/10 border border-border/40 group-hover:border-primary/30 transition-all'>
			{icon}
		</div>
		{label}
	</a>
)
