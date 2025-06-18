import { About } from '../components/sections/about'
import { FAQ } from '../components/sections/faq'
import { Features } from '../components/sections/features'
import { Footer } from '../components/sections/footer'
import { Header } from '../components/sections/header'
import { Hero } from '../components/sections/hero'
import { Pricing } from '../components/sections/pricing'
import { Testimonials } from '../components/sections/testimonials'

function Home() {
	return (
		<div className='min-h-screen'>
			<Header />
			<Hero />
			<Features />
			<About />
			<Testimonials />
			<Pricing />
			<FAQ />
			<Footer />
		</div>
	)
}

export default Home
