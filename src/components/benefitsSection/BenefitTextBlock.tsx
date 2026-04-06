import { CheckHexIcon } from '@/components/ui/icons/CheckHexIcon'
import { Button } from '@/components/ui/button'

interface BenefitTextBlockProps {
	title: string
	description: string[]
	buttonText: string
	align: 'left' | 'right'
}

export function BenefitTextBlock({ title, description, buttonText, align }: BenefitTextBlockProps) {
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
