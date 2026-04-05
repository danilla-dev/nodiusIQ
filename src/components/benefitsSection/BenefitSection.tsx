'use client'

import Image from 'next/image'
import { CheckHexIcon } from '@/components/ui/icons/CheckHexIcon' // Zobacz poniżej
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Dane korzyści - wyciągnięte do tablicy dla łatwiejszej edycji
const benefits = [
	{
		id: 1,
		title: 'OSZCZĘDNOŚĆ ENERGII.',
		description: [
			'Inteligentne sterowanie ogrzewaniem.',
			'Optymalizacja zużycia energii.',
			'Zarządzanie fotowoltaiką.',
			'Monitorowanie zużycia.',
			'Planuj sceny.',
		],
		buttonText: 'DOWIEDZ SIĘ WIĘCEJ.',
		imageSrc: '/luxury-living-room.png', // Placeholders
		imageAlt: 'Luksusowy salon NodiusIQ z inteligentnym oświetleniem',
	},
	{
		id: 2,
		title: 'KOMFORT I WYGODA.',
		description: [
			'Automatyzacja codziennych czynności.',
			'Zarządzanie oświetleniem z aplikacji.',
			'Sceny świetlne i ogrzewania.',
			'Pełny dostęp z aplikacji.',
			'Opisywanie montów sceny.',
		],
		buttonText: 'POZNAJ SCENY.',
		imageSrc: '/luxury-bedroom.png', // Placeholders
		imageAlt: 'Luksusowa sypialnia ze sterowaniem NodiusIQ',
	},
	{
		id: 3,
		title: 'BEZPIECZEŃSTWO.',
		description: ['Zdalny dostęp do kamer i czujników.', 'Symulacja obecności.', 'Zintegrowane systemy alarmowe.'],
		buttonText: 'ZWIĘKSZ BEZPIECZEŃSTWO.',
		imageSrc: '/luxury-entrance.png', // Placeholders
		imageAlt: 'Luksusowe wejście do domu NodiusIQ w nocy ze smart lock',
	},
]

// Reużywalny komponent dla bloku tekstu (prawa lub lewa strona)
function BenefitTextBlock({
	title,
	description,
	buttonText,
	align,
}: {
	title: string
	description: string[]
	buttonText: string
	align: 'left' | 'right'
}) {
	const isRightAligned = align === 'right'
	return (
		<div
			className={`flex flex-col space-y-6 ${isRightAligned ? 'items-start text-left' : 'items-end text-right md:text-left md:items-start'}`}
		>
			<h3 className='text-2xl md:text-3xl font-bold tracking-tight text-foreground technical-font'>{title}</h3>
			<ul className='space-y-3'>
				{description.map((item, index) => (
					<li key={index} className='flex items-center gap-3'>
						<CheckHexIcon className='w-4 h-4 text-primary flex-shrink-0' />
						<span className='text-sm md:text-base text-muted-foreground'>{item}</span>
					</li>
				))}
			</ul>
			<Button
				asChild
				className='rounded-full px-10 h-14 text-base font-bold shadow-[0_0_20px_0_rgba(0,174,239,0.2)] hover:shadow-[0_0_25px_0_rgba(0,174,239,0.4)] transition-all'
			>
				<a href='#kontakt'>{buttonText}</a>
			</Button>
		</div>
	)
}

// Reużywalny komponent dla zdjęcia (lewa lub prawa strona)
function BenefitImageBlock({ src, alt }: { src: string; alt: string }) {
	return (
		<div className='relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/40 hover:border-border/80 shadow-[0_4px_30px_rgba(0,174,239,0.15)] group transition-all duration-300'>
			<Image
				src={src}
				alt={alt}
				fill
				className='object-cover transition-all duration-500 group-hover:scale-105'
				sizes='(max-width: 768px) 100vw, 50vw'
			/>
			{/* Subtelna poświata przy najechaniu (glow) */}
			<div className='absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
			{/* Delikatne podświetlenie miedzianą/złotą linią */}
			<div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent' />
		</div>
	)
}

export function ZigzagBenefits() {
	return (
		<section className='py-16 md:py-24 bg-background relative z-10 overflow-hidden technical-pattern-bg'>
			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				{/* NAGŁÓWEK SEKCJI - technical-style z miedzianą linią */}
				<div className='text-center mb-16 space-y-3 max-w-2xl mx-auto border-t border-accent/70 pt-8 mt-12'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground uppercase technical-font'>
						KORZYŚCI Z INTELIGENTNEGO DOMU
					</h2>
					<p className='text-sm font-light tracking-widest text-muted-foreground uppercase'>(NODIUSIQ SMART HOME)</p>
				</div>

				{/* Alternating rows */}
				<div className='space-y-16 md:space-y-24'>
					{benefits.map((benefit, index) => {
						const isReversed = index % 2 === 1 // Co drugi wiersz jest odwrócony

						return (
							<motion.div
								key={benefit.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6 }}
								className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
							>
								{/* Zdjęcie */}
								<div className='w-full md:w-1/2'>
									<BenefitImageBlock src={benefit.imageSrc} alt={benefit.imageAlt} />
								</div>

								{/* Tekst - dostosowanie wyrównania dla mobilnych i desktop */}
								<div className='w-full md:w-1/2'>
									<BenefitTextBlock
										title={benefit.title}
										description={benefit.description}
										buttonText={benefit.buttonText}
										align={isReversed ? 'left' : 'right'} // Zgodnie z mockupem
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
