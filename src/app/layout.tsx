import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/Navbar'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	// To co widać na pasku zakładek
	title: {
		default: 'NodiusIQ | Inteligentne Instalacje Smart Home',
		template: '%s | NodiusIQ',
	},
	description:
		'Eksperckie instalacje Smart Home (Shelly, Sonoff) oraz profesjonalne usługi elektryczne. Zaufaj inteligencji w Twoim domu.',
	keywords: ['Smart Home', 'Shelly', 'Sonoff', 'elektryk', 'inteligentny dom', 'NodiusIQ'],
	authors: [{ name: 'NodiusIQ Team' }],

	openGraph: {
		title: 'NodiusIQ - Inteligentne Instalacje',
		description: 'Nowoczesna elektryka i automatyka budynkowa.',
		url: 'https://nodusiq.pl',
		siteName: 'NodiusIQ',
		images: [
			{
				url: '/og-image.png', // Musisz dodać taki obrazek do folderu /public (1200x630px)
				width: 1200,
				height: 630,
				alt: 'NodiusIQ Smart Home Solutions',
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
	'@type': 'Electrician', // Specyficzny typ dla elektryka
	name: 'NodiusIQ - Inteligentne Instalacje',
	image: 'https://nodusiq.pl/og-image.png',
	'@id': 'https://nodusiq.pl',
	url: 'https://nodusiq.pl',
	telephone: '+48123456789',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Strobanda',
		addressLocality: 'Toruń',
		postalCode: '87-100',
		addressCountry: 'PL',
	},
	areaServed: [
		{
			'@type': 'City',
			name: 'Toruń',
		},
		{
			'@type': 'City',
			name: 'Bydgoszcz',
		},
		{
			'@type': 'City',
			name: 'Ciechocinek',
		},
	],
	priceRange: '$$',
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 53.01379, // Koordynaty Torunia
		longitude: 18.59844,
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		opens: '08:00',
		closes: '18:00',
	},
}

// W komponencie React:

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={cn('h-full', 'antialiased', geistSans.variable, geistMono.variable, 'font-sans', inter.variable)}
		>
			<Navbar />
			<body className='min-h-full flex flex-col overflow-x-hidden w-full relative'>
				{children}
				<Toaster />
			</body>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
		</html>
	)
}
