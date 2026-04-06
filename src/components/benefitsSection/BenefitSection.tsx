'use client'

import { motion } from 'framer-motion'
import { benefits } from '@/constants/benefits'
import { BenefitTextBlock } from './BenefitTextBlock'
import { BenefitImageBlock } from './BenefitImageBlock'

export function ZigzagBenefits() {
	return (
		<section className='py-20 md:py-32 bg-background relative z-10 overflow-hidden'>
			<div className='absolute inset-0 z-0 pointer-events-none'>
				{/* Gradienty głębi */}
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.1),transparent_50%)]' />
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background' />

				{/* Inteligentna siatka (Nodus Grid) */}
				<div
					className='absolute inset-0 opacity-[0.1] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20-20M0 40l20-20' stroke='%2300AEEF' fill='none' fill-rule='evenodd' opacity='.5'/%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				{/* NOWY NAGŁÓWEK SEKCJI - Styl Premium Tech */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className='text-center mb-20 md:mb-28 space-y-4 max-w-3xl mx-auto'
				>
					{/* Badge / Tag nad nagłówkiem */}
					<span className='px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase'>
						Dlaczego warto?
					</span>

					<h2 className='text-4xl md:text-5xl lg:text-6xl mt-4 font-black tracking-tighter text-foreground uppercase leading-[0.95]'>
						Korzyści z <br />
						<span className='text-transparent pr-3 bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
							Inteligentnego Domu
						</span>
					</h2>

					{/* Subtelniejszy opis pod nagłówkiem zamiast (NODIUSIQ) */}
					<div className='w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 opacity-30' />
				</motion.div>

				{/* ZAWARTOŚĆ ZIGZAG */}
				<div className='space-y-24 md:space-y-40'>
					{benefits.map((benefit, index) => {
						const isReversed = index % 2 === 1

						return (
							<motion.div
								key={benefit.id}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-150px' }}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
									isReversed ? 'md:flex-row-reverse' : ''
								}`}
							>
								{/* Blok Zdjęcia z delikatną poświatą */}
								<div className='w-full md:w-1/2 relative group'>
									<div className='absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none' />
									<BenefitImageBlock src={benefit.imageSrc} alt={benefit.imageAlt} />
								</div>

								{/* Blok Tekstu */}
								<div className='w-full md:w-1/2'>
									<BenefitTextBlock
										title={benefit.title}
										description={benefit.description}
										buttonText={benefit.buttonText}
										align={isReversed ? 'left' : 'right'}
									/>
								</div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
