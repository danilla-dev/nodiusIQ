'use client'

import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'

import { containerVariantsForm, itemVariantsForm } from '@/lib/animations'
import Link from 'next/link'

export function Hero() {
	return (
		<section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background'>
			{/* --- WARSTWA TŁA --- */}
			<div className='absolute inset-0 z-0 pointer-events-none'>
				{/* Gradienty głębi */}
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.1),transparent_50%)]' />
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background' />

				{/* Inteligentna siatka (Nodus Grid) */}
				<div
					className='absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20-20M0 40l20-20' stroke='%2300AEEF' fill='none' fill-rule='evenodd' opacity='.5'/%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			{/* --- WARSTWA TREŚCI --- */}
			<div className='container relative z-10 px-4 md:px-6 mt-[-10vh]'>
				<motion.div
					variants={containerVariantsForm}
					initial='hidden'
					animate='visible'
					className='flex flex-col items-center text-center'
				>
					{/* Badge / Nadtytuł */}
					<motion.span
						variants={itemVariantsForm}
						className='px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6'
					>
						Smart Home Solution
					</motion.span>

					{/* Headline */}
					<motion.div variants={itemVariantsForm} className='space-y-4 max-w-4xl'>
						<h1 className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.9]'>
							Zaufaj <br />
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-[#A88566] italic'>
								Inteligencji.
							</span>
						</h1>
						<p className='mx-auto max-w-[600px] text-muted-foreground text-lg md:text-xl font-light leading-relaxed mt-6'>
							Twój dom staje się Smart. <span className='text-foreground font-medium'>Bez kucia ścian.</span>
							<br />
							Profesjonalne instalacje Shelly & Sonoff w Toruniu.
						</p>
					</motion.div>

					{/* Przyciski CTA */}
					<motion.div variants={itemVariantsForm} className='flex flex-col sm:flex-row gap-4 mt-12'>
						<Button
							asChild
							size='lg'
							className='rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 h-16 text-base uppercase tracking-wider shadow-[0_20px_40px_-15px_rgba(0,174,239,0.35)] transition-all hover:-translate-y-1'
						>
							<Link href='#uslugi'>Poznaj rozwiązania</Link>
						</Button>

						<Button
							asChild
							variant='outline'
							size='lg'
							className='rounded-xl border-border/40 bg-background/50 backdrop-blur-md font-bold px-12 h-16 text-base uppercase tracking-wider hover:bg-secondary/10 transition-all hover:-translate-y-1'
						>
							<Link href='#kontakt'>Darmowa wycena</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Dekoracyjny element dolny (Nodus Points) */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.4 }}
				transition={{ delay: 1, duration: 2 }}
				className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20'
			/>
		</section>
	)
}
