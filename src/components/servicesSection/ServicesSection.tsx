'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/constants/services'
import { serviceContainerVariants } from '@/lib/animations'
import { ServiceCard } from './ServiceCard'

export function Services() {
	return (
		<section id='uslugi' className='py-20 md:py-32 relative z-10 '>
			{/* --- WARSTWA TŁA SEKCJI (Inżynieryjny sznyt w nagłówku) --- */}

			<div className='container relative z-10 mx-auto px-4 md:px-6'>
				{/* NAGŁÓWEK SEKCJI - Ulepszony styl z gradientem */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='text-center mb-20 md:mb-24 space-y-4 max-w-3xl mx-auto'
				>
					{/* Subtelny badge nad nagłówkiem (spójność z Hero) */}
					<span className='px-4 py-1.5  rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase'>
						Nasza Ekspertyza
					</span>

					<h2 className='text-4xl md:text-5xl lg:text-6xl mt-4 font-black tracking-tighter text-foreground uppercase leading-[0.95]'>
						W czym możemy <br />
						<span className='text-transparent pr-3 bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
							Ci pomóc?
						</span>
					</h2>
				</motion.div>

				{/* GRID Z KAFELKAMI - Z radialnym gradientem tła */}
				<div className='relative'>
					{/* Delikatny radialny blask za siatką (efekt głębi) */}
					<div className='absolute inset-[-100px]  pointer-events-none z-0' />

					<motion.div
						variants={serviceContainerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, margin: '-50px' }}
						className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'
					>
						{SERVICES.map(service => (
							<ServiceCard key={service.id} service={service} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}
