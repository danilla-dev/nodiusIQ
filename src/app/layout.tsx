import type { Metadata } from 'next'
import { Geist, Geist_Mono, Sora, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/Navbar'
import { Toaster } from '@/components/ui/sonner'

// 1. Ładujemy tylko rodzinę Geist
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const spaceGroteskHeading = Space_Grotesk({
	variable: '--font-heading',
	subsets: ['latin'],
	weight: ['700'], // Ładujemy tylko grube warianty pod nagłówki, żeby nie obciążać strony
})

export const metadata: Metadata = {
	title: {
		default: 'NodiusIQ | Elektryk, Smart Home, Alarmy i Kamery Toruń',
		template: '%s | NodiusIQ Toruń',
	},
	description:
		'Profesjonalne usługi elektryczne (SEP), montaż monitoringu wizyjnego IP, systemów alarmowych oraz bezinwazyjnego Smart Home Shelly, Sonoff, Aqara, Zamel w Toruniu i okolicach. Szybkie terminy, podbicie gwarancji AGD.',
	keywords: [
		'elektryk Toruń',
		'smart home Toruń',
		'montaż kamer Toruń',
		'systemy alarmowe Toruń',
		'podłączenie płyty indukcyjnej Toruń',
		'pomiary elektryczne', // zostawiamy pod przyszłość
		'instalacje elektryczne kujawsko-pomorskie',
		'Shelly',
		'Sonoff',
		'Aqara',
		'Zamel',
		'NodiusIQ',
	],
	authors: [{ name: 'NodiusIQ' }],

	// Deklaracja dla robotów indeksujących - upewnia Google, że ma pozycjonować stronę
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},

	openGraph: {
		title: 'NodiusIQ | Nowoczesna Elektryka i Smart Home Toruń',
		description:
			'Instalacje elektryczne z uprawnieniami SEP, monitoring CCTV, alarmy oraz automatyka domowa Shelly, Sonoff, Aqara, Zamel. Sprawdź wolne terminy.',
		url: 'https://nodiusiq.pl',
		siteName: 'NodiusIQ - Inteligentne Instalacje',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'NodiusIQ Usługi Elektryczne i Teletechniczne Toruń',
			},
		],
		locale: 'pl_PL',
		type: 'website',
	},

	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Electrician',
	name: 'NodiusIQ - Inteligentne Instalacje, Elektryka, CCTV',
	image: 'https://nodiusiq.pl/og-image.png',
	'@id': 'https://nodiusiq.pl',
	url: 'https://nodiusiq.pl',
	telephone: '+48123456789', // TUTAJ WPISZ SWÓJ REALNY NUMER
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Strobanda', // Jeśli to ulica na Jarze, to idealny punkt startowy marketingu
		addressLocality: 'Toruń',
		postalCode: '87-100',
		addressCountry: 'PL',
	},
	areaServed: [
		{ '@type': 'City', name: 'Toruń' },
		{ '@type': 'City', name: 'Bydgoszcz' },
		{ '@type': 'City', name: 'Ciechocinek' },
		{ '@type': 'City', name: 'Chełmża' },
		{ '@type': 'State', name: 'Kujawsko-Pomorskie' },
	],
	priceRange: '$$',
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 53.0537, // Skorygowane bliżej północnej części Torunia / Jaru
		longitude: 18.6014,
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		opens: '08:00',
		closes: '20:00', // Wydłużyłem godziny, skoro i tak latasz po etacie, a klienci szukają ratunku wieczorami
	},
}

// W komponencie React:

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pl' className={cn('h-full', 'antialiased', 'dark', spaceGroteskHeading.variable)}>
			<Navbar />
			{/* 3. W body wymuszamy klasę wygenerowaną przez Next.js dla Geist Sans */}
			<body
				className={cn(
					'min-h-full flex flex-col overflow-x-hidden w-full relative',
					geistSans.className, // To natychmiast ustawi Geist jako domyślny font na całej stronie
				)}
			>
				{children}
				<Toaster />
			</body>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
		</html>
	)
}
