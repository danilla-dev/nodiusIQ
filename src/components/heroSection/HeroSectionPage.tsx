'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
	return (
		<section className='relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20'>
			{/* TŁO: Gradient i siatka (Nodus Grid) */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background' />

				{/* Subtelna siatka geometryczna w tle - symulacja Twojego wzoru */}
				<div
					className='absolute inset-0 opacity-[0.15]'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, var(--secondary) 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='container relative z-10 px-4 md:px-6'>
				<div className='flex flex-col items-center text-center space-y-8'>
					{/* Animowany Headline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='space-y-4'
					>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground uppercase'>
							Zaufaj <span className='text-primary italic'>Inteligencji.</span>
						</h1>
						<p className='mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl font-light'>
							Twój dom staje się Smart. Bez kucia ścian. <br className='hidden md:inline' />
							Toruń i okolice. (Shelly / Sonoff)
						</p>
					</motion.div>

					{/* Przyciski CTA */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className='flex flex-col sm:flex-row gap-4'
					>
						<Button
							asChild
							size='lg'
							className='rounded-full bg-primary text-primary-foreground font-bold px-10 h-14 text-base shadow-[0_0_20px_0_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_0_rgba(0,174,239,0.5)] transition-all'
						>
							<Link href='#uslugi'>POZNAJ ROZWIĄZANIA</Link>
						</Button>

						<Button
							asChild
							variant='outline'
							size='lg'
							className='rounded-full border-border/60 font-semibold px-10 h-14 text-base hover:bg-secondary/10 transition-all'
						>
							<Link href='#kontakt'>DARMOWA WYCENA</Link>
						</Button>
					</motion.div>

					{/* Graficzny element dekoracyjny - "Nodus Points" */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6, duration: 1 }}
						className='absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 pointer-events-none opacity-20'
					>
						{/* Tutaj możesz wstawić swój SVG z siatką kropkową widoczną na layoutcie */}
						<div className='w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-3xl opacity-30' />
					</motion.div>
				</div>
			</div>
		</section>
	)
}
