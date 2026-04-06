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
		description: 'Inteligentne sterowanie oświetleniem, roletami i ogrzewaniem. Dopasujemy system do Twoich potrzeb.',
		highlight: 'Oszczędność & Komfort.',
		icon: Home,
	},
	{
		id: 2,
		title: 'Instalacje Elektryczne',
		description:
			'Wymiana gniazdek, naprawa włączników, oświetlenie. Usługi elektryczne i nowoczesne instalacje w domach i mieszkaniach na terenie Torunia.',
		highlight: 'Czysto i Bezpiecznie.',
		icon: PlugZap,
	},
	{
		id: 3,
		title: 'Prace Montażowe',
		description: 'Profesjonalny montaż urządzeń RTV/AGD oraz oświetlenia. Szybko, czysto i solidnie.',
		highlight: 'Precyzja w każdym calu.',
		icon: Hammer,
	},
]
