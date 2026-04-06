'use client'

import { motion } from 'framer-motion'
import { serviceItemVariants } from '@/lib/animations'
import { Service } from '@/constants/services'

interface ServiceCardProps {
	service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
	return (
		<motion.div
			variants={serviceItemVariants}
			className='group relative bg-card/60 backdrop-blur-sm text-card-foreground rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-border/40 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,174,239,0.3)] overflow-hidden h-full'
		>
			{/* Tło karty - subtelny gradient hover */}
			<div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0' />

			{/* Kontener Ikony - ulepszony styl */}
			<div className='relative z-10 mb-8 p-5 rounded-2xl bg-background/50 border border-border/50 group-hover:border-primary/40 group-hover:bg-background/80 transition-all duration-500 group-hover:-translate-y-1'>
				<service.icon className='h-12 w-12 text-primary' strokeWidth={1.2} />

				{/* Delikatna poświata za ikoną on hover */}
				<div className='absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-[-1]' />
			</div>

			{/* Tytuł - tracking-tight */}
			<h3 className='relative z-10 text-2xl font-bold mb-4 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300'>
				{service.title}
			</h3>

			{/* Opis */}
			<p className='relative z-10 text-muted-foreground text-sm md:text-base leading-relaxed mb-1'>
				{service.description}
			</p>

			{/* Highlight - wyboldowany i w kolorze foreground, z text-gradient on hover */}
			<p className='relative z-10 text-foreground font-semibold text-sm md:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#A88566] transition-all duration-500'>
				{service.highlight}
			</p>

			{/* Miedziany detal na dole - ulepszony gradient */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-500' />
		</motion.div>
	)
}
