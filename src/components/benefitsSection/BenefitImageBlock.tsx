import Image from 'next/image'

interface BenefitImageBlockProps {
	src: string
	alt: string
}

export function BenefitImageBlock({ src, alt }: BenefitImageBlockProps) {
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
