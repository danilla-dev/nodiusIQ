import { Hero } from '@/components/heroSection/HeroSectionPage'
import { Services } from '@/components/servicesSection/ServicesSection'
import { About } from '@/components/abouotSection/AboutSection'
import { Contact } from '@/components/contactSection/ContactSection'
import { Footer } from '@/components/footer/FooterSection'
import { ZigzagBenefits } from '@/components/benefitsSection/BenefitSection'
import { Faq } from '@/components/FAQSection/FaqSection'
const HomePage = () => {
	return (
		<>
			<Hero />
			<Services />
			<ZigzagBenefits />
			<About />
			<Faq />
			<Contact />
			<Footer />
		</>
	)
}

export default HomePage
