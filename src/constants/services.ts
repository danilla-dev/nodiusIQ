import { Home, PlugZap, Shield, LucideIcon } from 'lucide-react'

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
		title: 'Smart Home (Retrofit)',
		description:
			'Inteligentne sterowanie oświetleniem, roletami i temperaturą oparte o moduły Shelly i system Home Assistant. Nowoczesna automatyzacja bez kucia ścian i drogich remontów.',
		highlight: 'Komfort & Oszczędność.',
		icon: Home,
	},
	{
		id: 2,
		title: 'Instalacje Elektryczne',
		description:
			'Przeróbki instalacji deweloperskich, przenoszenie punktów oraz profesjonalne podłączanie płyt indukcyjnych i AGD z wpisem do karty gwarancyjnej. Pełne uprawnienia SEP.',
		highlight: 'Bezpieczeństwo z certyfikatem SEP.',
		icon: PlugZap,
	},
	{
		id: 3,
		title: 'Systemy Bezpieczeństwa',
		description:
			'Projektowanie i montaż nowoczesnych systemów alarmowych (Satel, Ajax) oraz monitoringu wizyjnego IP (Hikvision, Dahua) z inteligentnym wykrywaniem ludzi i pojazdów AI.',
		highlight: 'Pełna kontrola w smartfonie.',
		icon: Shield,
	},
]
