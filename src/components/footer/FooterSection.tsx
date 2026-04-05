import { Mail, Phone, MessageSquareHeart } from 'lucide-react'

export function Footer() {
	return (
		<footer className='py-10 border-t border-border/40 bg-background'>
			<div className='container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground'>
				<div className='flex items-center gap-2'>
					<span className='font-bold text-foreground italic'>NodiusIQ</span>
				</div>

				<p>© 2026 NodiusIQ - Inteligentne Instalacje</p>

				<div className='flex items-center gap-4'>
					<a href='#' className='hover:text-primary flex items-center gap-1 transition-colors'>
						<MessageSquareHeart className='w-4 h-4' /> direct to @nodusiq
					</a>
				</div>
			</div>
		</footer>
	)
}
