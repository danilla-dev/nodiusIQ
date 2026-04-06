'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { benefits } from '@/constants/about'
import { containerVariants, itemVariants } from '@/lib/animations'

export function AboutBenefits() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			className='flex flex-col space-y-10'
		>
			{/* NAGŁÓWEK - Spójny z Hero i Services */}
			<div className='space-y-3'>
				<span className='px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase w-fit'>
					Nasz Etos
				</span>

				<h2 className='text-4xl md:text-5xl mt-4 font-black tracking-tighter text-foreground uppercase leading-[0.95]'>
					Dlaczego <br />
					<span className='inline-block pr-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
						NodiusIQ?
					</span>
				</h2>
			</div>

			{/* LISTA KORZYŚCI - Podkręcony styl */}
			<motion.ul
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='space-y-5'
			>
				{benefits.map((benefit, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
						className='group flex items-start gap-4 text-lg md:text-xl text-foreground/90 font-medium leading-tight'
					>
						{/* Ikona Check z poświatą on hover */}
						<div className='mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-background border border-border/60 group-hover:border-primary/50 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-300 shadow-sm'>
							<Check
								className='w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300'
								strokeWidth={3}
							/>
						</div>

						{/* Tekst korzyści */}
						<span className='group-hover:text-foreground transition-colors duration-300'>{benefit}</span>
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	)
}
