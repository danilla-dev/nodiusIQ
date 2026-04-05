'use client'

import { motion } from 'framer-motion'
import { Home, PlugZap, Hammer } from 'lucide-react'

// Definiujemy listę usług, żeby kod był czystszy i łatwiejszy do edycji
const services = [
	{
		id: 1,
		title: 'Smart Home',
		description: 'Shelly/Sonoff. Oświetlenie, Rolety, Ogrzewanie.\n\nOszczędność & Komfort.',
		icon: Home,
	},
	{
		id: 2,
		title: 'Instalacje Elektryczne',
		description: 'Wymiana gniazdek, naprawa włączników, oświetlenie.\n\nCzysto.',
		icon: PlugZap, // PlugZap świetnie pasuje do elektryki
	},
	{
		id: 3,
		title: 'Prace Montażowe',
		description: 'Montaż TV, zawieszanie lamp, składanie mebli.\n\nPrecyzja.',
		icon: Hammer,
	},
]

// Konfiguracja animacji Framer Motion
const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Kafelki pojawiają się po kolei co 0.2s
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Services() {
	return (
		<section id='uslugi' className='py-20 md:py-32 bg-background relative z-10'>
			<div className='container mx-auto px-4 md:px-6'>
				{/* NAGŁÓWEK SEKCJI */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight text-foreground'>W czym możemy Ci pomóc?</h2>
				</motion.div>

				{/* GRID Z KAFELKAMI */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: '-50px' }}
					className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
				>
					{services.map(service => (
						<motion.div
							key={service.id}
							variants={itemVariants}
							className='group relative bg-card text-card-foreground rounded-2xl p-8 flex flex-col items-center text-center border border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] overflow-hidden'
						>
							{/* Ikona w błękitnym kolorze */}
							<div className='mb-6 p-4 rounded-full bg-background/50 border border-border/50 group-hover:border-primary/30 transition-colors'>
								<service.icon className='h-10 w-10 text-primary' strokeWidth={1.5} />
							</div>

							{/* Tytuł */}
							<h3 className='text-xl font-semibold mb-4 text-foreground'>{service.title}</h3>

							{/* Opis (z obsługą znaków nowej linii \n) */}
							<p className='text-muted-foreground whitespace-pre-line text-sm md:text-base leading-relaxed'>
								{service.description}
							</p>

							{/* Miedziany detal na dole kafelka (akcent z Twojego logo) */}
							<div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300' />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
