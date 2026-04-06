'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import { faqs } from '@/constants/Faq'

export function Faq() {
	return (
		<section id='faq' className='py-20 md:py-32 bg-background relative overflow-hidden'>
			{/* TŁO: Subtelna poświata dla głębi */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] pointer-events-none z-0' />

			<div className='container mx-auto px-4 md:px-6 max-w-3xl relative z-10'>
				{/* NAGŁÓWEK SEKCJI - Spójny z resztą strony */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='text-center mb-16 space-y-4'
				>
					<span className='px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase'>
						Masz pytania?
					</span>

					<h2 className='text-4xl md:text-5xl mt-4 font-black tracking-tighter text-foreground uppercase leading-[0.95]'>
						Częste <br />
						<span className='inline-block pr-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
							Pytania (FAQ)
						</span>
					</h2>

					<div className='w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 opacity-30' />
				</motion.div>

				{/* AKORDEON */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
				>
					<Accordion type='single' collapsible className='space-y-4'>
						{faqs.map(faq => (
							<AccordionItem
								key={faq.id}
								value={faq.id}
								className='group border border-border/40 rounded-2xl px-6 bg-card/10 backdrop-blur-md transition-all duration-500 data-[state=open]:border-primary/40 data-[state=open]:bg-card/30 data-[state=open]:shadow-[0_10px_30px_-15px_rgba(0,174,239,0.2)] hover:border-primary/30 overflow-hidden'
							>
								{/* Linia akcentująca przy otwarciu (jak w formularzu) */}
								<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#A88566] opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-500' />

								<AccordionTrigger className='hover:no-underline py-6 text-base md:text-lg font-bold tracking-tight text-foreground/90 group-hover:text-primary group-data-[state=open]:text-primary transition-all text-left uppercase decoration-transparent'>
									{faq.question}
								</AccordionTrigger>

								<AccordionContent className='text-muted-foreground text-sm md:text-base leading-relaxed pb-8 pt-2'>
									<div className='pl-4 border-l-2 border-primary/20'>{faq.answer}</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>

			{/* Dekoracja w tle - NAPRAWIONA (overflow-hidden na sekcji ją przytnie) */}
			<div className="absolute bottom-0 left-0 w-full h-64 bg-[url('/nodus-pattern.svg')] opacity-[0.03] pointer-events-none z-0" />
		</section>
	)
}
