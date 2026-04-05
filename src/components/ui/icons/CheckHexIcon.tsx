// src/components/ui/icons/CheckHexIcon.tsx
import { cn } from '@/lib/utils'

export function CheckHexIcon({ className, ...props }: React.ComponentProps<'svg'>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			className={cn('w-4 h-4', className)}
			{...props}
		>
			<path
				fillRule='evenodd'
				d='M12.293 3.293a1 1 0 0 1 1.414 0L17.707 7.293a1 1 0 0 1 0 1.414L12.414 14l5.293 5.293a1 1 0 0 1-1.414 1.414L11 15.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L9.586 14 4.293 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0L11 6.586l1.293-1.293ZM12 8.586 10.414 7l-1.414 1.414L10.586 10l-1.586 1.586 1.414 1.414L12 11.414l1.586 1.586 1.414-1.414L13.414 10l1.586-1.586-1.414-1.414L12 8.586Z'
				clipRule='evenodd'
			/>
		</svg>
	)
}
