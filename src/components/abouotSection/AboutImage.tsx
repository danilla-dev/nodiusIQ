'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutImage() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
			className='relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-border/40'
		>
			{/* Tło z delikatnym blaskiem */}
			<div className='absolute inset-0 bg-primary/5 z-10 pointer-events-none' />

			<Image
				src='/about-image.jpg'
				alt='Instalator NodiusIQ podczas pracy'
				fill
				className='object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500'
				sizes='(max-width: 768px) 100vw, 50vw'
			/>

			{/* Dekoracyjna ramka */}
			<div className='absolute inset-0 border border-primary/20 rounded-2xl z-20 pointer-events-none' />
		</motion.div>
	)
}
