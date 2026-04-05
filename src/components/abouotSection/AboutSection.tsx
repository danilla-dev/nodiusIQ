'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

// Lista korzyści wyciągnięta do tablicy dla łatwiejszej edycji
const benefits = ['Doświadczenie w Toruniu', 'Minimalna interwencja', 'Terminowość & Czystość', 'Pełna integracja OZE']

// Animacje dla listy
const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export function About() {
	return (
		<section id='o-nas' className='py-20 md:py-32 bg-background relative z-10 overflow-hidden'>
			{/* Subtelny miedziany separator na górze sekcji (nawiązanie do layoutu) */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-accent/70' />

			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto'>
					{/* LEWA STRONA: Zdjęcie z pracy */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
						className='relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-border/40'
					>
						{/* Tło z delikatnym blaskiem za zdjęciem */}
						<div className='absolute inset-0 bg-primary/5 z-10 pointer-events-none' />

						{/* PAMIĘTAJ: Wrzuć zdjęcie do folderu public/ i zmień nazwę w 'src'
              Jeśli używasz zewnętrznego linku, musisz go dodać do next.config.js 
            */}
						<Image
							src='/about-image.jpg' // Podmień na nazwę swojego pliku
							alt='Instalator NodiusIQ podczas pracy'
							fill
							className='object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500'
							sizes='(max-width: 768px) 100vw, 50vw'
						/>

						{/* Dekoracyjna ramka w stylu "Tech" */}
						<div className='absolute inset-0 border border-primary/20 rounded-2xl z-20 pointer-events-none' />
					</motion.div>

					{/* PRAWA STRONA: Tekst i lista */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
						className='flex flex-col space-y-8'
					>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground'>
							Dlaczego NodiusIQ?
						</h2>

						<motion.ul
							variants={containerVariants}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true }}
							className='space-y-4'
						>
							{benefits.map((benefit, index) => (
								<motion.li
									key={index}
									variants={itemVariants}
									className='flex items-center gap-4 text-lg md:text-xl text-foreground/90 font-medium'
								>
									<div className='flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30'>
										<Check className='w-5 h-5 text-primary' strokeWidth={3} />
									</div>
									{benefit}
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
