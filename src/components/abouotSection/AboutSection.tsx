import { AboutImage } from './AboutImage'
import { AboutBenefits } from './AboutBenefits'

export function About() {
	return (
		<section id='o-nas' className='py-20 md:py-32 bg-background relative z-10 overflow-hidden'>
			{/* Subtelny miedziany separator */}
			<div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-accent/70' />

			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto'>
					<AboutImage />
					<AboutBenefits />
				</div>
			</div>
			{/* Subtelny akcent miedziany na dole sekcji (opcjonalny) */}
			<div className='w-full h-px mt-12 bg-gradient-to-r from-border/40 via-accent/20 to-transparent' />
		</section>
	)
}
