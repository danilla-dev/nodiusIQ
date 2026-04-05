import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar/Navbar'
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
				url: '/og-image.jpg', // Musisz dodać taki obrazek do folderu /public (1200x630px)
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
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}
