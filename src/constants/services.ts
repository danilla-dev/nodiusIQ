import { Home, PlugZap, Hammer, LucideIcon } from 'lucide-react'

export interface Service {
	id: number
	title: string
	// Rozbijamy opis, aby łatwiej formatować "highlight"
	description: string
	highlight: string
	icon: LucideIcon
}

export const SERVICES: Service[] = [
	{
		id: 1,
		title: 'Smart Home',
		description: 'Shelly/Sonoff. Oświetlenie, Rolety, Ogrzewanie.',
		highlight: 'Oszczędność & Komfort.',
		icon: Home,
	},
	{
		id: 2,
		title: 'Instalacje Elektryczne',
		description: 'Wymiana gniazdek, naprawa włączników, oświetlenie.',
		highlight: 'Czysto i Bezpiecznie.',
		icon: PlugZap,
	},
	{
		id: 3,
		title: 'Prace Montażowe',
		description: 'Montaż TV, zawieszanie lamp, składanie mebli.',
		highlight: 'Precyzja w każdym calu.',
		icon: Hammer,
	},
]
