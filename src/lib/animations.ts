import { Variants } from 'framer-motion'

// About Section Animations
export const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
}

export const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export const containerVariantsForm: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15, delayChildren: 0.3 },
	},
}

export const itemVariantsForm: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

// Ulepszone staggerChildren dla płynniejszego efektu
export const serviceContainerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.18,
			delayChildren: 0.2,
		},
	},
}

// Ulepszone itemVariants (dodano lekkie skalowanie dla dynamiki)
export const serviceItemVariants: Variants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1], // Customowe cubic-bezier dla efektu "premium"
		},
	},
}
