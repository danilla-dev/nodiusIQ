'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Network, Menu, X } from 'lucide-react'

import Image from 'next/image'

export function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-20 items-center justify-between px-4 md:px-6'>
				{/* LOGO SEKCJA */}
				<Link href='/' className='flex items-center gap-3 transition-opacity hover:opacity-80'>
					{/* Zastępcza ikona węzła (Nodus) - możesz tu wstawić swojego SVG */}
					{/* <Network className='h-8 w-8 text-primary' /> */}
					<Image src='/logo.png' alt='Nodus Logo' width={32} height={32} />
					<div className='flex flex-col'>
						<span className='text-xl font-bold tracking-tight text-foreground'>
							Nodius<span className='font-light'>IQ</span>
						</span>
						<span className='text-[10px] font-medium tracking-widest text-muted-foreground uppercase'>
							Inteligentne Instalacje
						</span>
					</div>
				</Link>

				{/* NAWIGACJA DESKTOP */}
				<nav className='hidden md:flex items-center gap-8'>
					<Link href='#uslugi' className='text-sm font-medium text-foreground/80 transition-colors hover:text-primary'>
						Usługi
					</Link>
					<Link href='#o-nas' className='text-sm font-medium text-foreground/80 transition-colors hover:text-primary'>
						O nas
					</Link>
					<Link href='#kontakt' className='text-sm font-medium text-foreground/80 transition-colors hover:text-primary'>
						Kontakt
					</Link>
				</nav>

				{/* PRZYCISK CTA DESKTOP */}
				<div className='hidden md:flex'>
					<Button
						asChild
						className='rounded-full px-8 font-semibold shadow-[0_0_15px_0_rgba(0,174,239,0.2)] hover:shadow-[0_0_20px_0_rgba(0,174,239,0.4)] transition-all'
					>
						<Link href='#kontakt'>DARMOWA WYCENA</Link>
					</Button>
				</div>

				{/* HAMBURGER MENU (MOBILE) */}
				<button className='md:hidden p-2 text-foreground' onClick={toggleMobileMenu} aria-label='Toggle menu'>
					{isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
				</button>
			</div>

			{/* MENU MOBILNE (ROZWIJANE) */}
			{isMobileMenuOpen && (
				<div className='md:hidden border-t border-border/40 bg-background/95 backdrop-blur'>
					<nav className='container mx-auto flex flex-col space-y-4 p-4'>
						<Link
							href='#uslugi'
							className='text-base font-medium text-foreground/80 hover:text-primary px-2'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Usługi
						</Link>
						<Link
							href='#o-nas'
							className='text-base font-medium text-foreground/80 hover:text-primary px-2'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							O nas
						</Link>
						<Link
							href='#kontakt'
							className='text-base font-medium text-foreground/80 hover:text-primary px-2'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Kontakt
						</Link>
						<div className='pt-4 border-t border-border/40'>
							<Button asChild className='w-full rounded-full font-semibold'>
								<Link href='#kontakt' onClick={() => setIsMobileMenuOpen(false)}>
									DARMOWA WYCENA
								</Link>
							</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	)
}
