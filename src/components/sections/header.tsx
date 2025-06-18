import { BarChart3, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'Features', href: '#features' },
		{ name: 'About', href: '#about' },
		{ name: 'Testimonials', href: '#testimonials' },
		{ name: 'Pricing', href: '#pricing' },
		{ name: 'FAQ', href: '#faq' },
	]

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setIsMenuOpen(false)
	}

	return (
		<header className='bg-white shadow-sm sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<div className='flex items-center'>
						<div className='bg-blue-600 rounded-lg p-2 mr-3'>
							<BarChart3 className='w-6 h-6 text-white' />
						</div>
						<h1 className='text-xl font-bold text-gray-900'>FlowSpace Pro</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						{navLinks.map((link) => (
							<button
								key={link.name}
								onClick={() => scrollToSection(link.href)}
								className='text-gray-600 hover:text-blue-600 cursor-pointer font-medium transition-colors duration-200'
							>
								{link.name}
							</button>
						))}
					</nav>

					{/* CTA Button */}
					<div className='hidden md:flex items-center space-x-4'>
						<button
							onClick={() => scrollToSection('#pricing')}
							className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200'
						>
							Sign In
						</button>
						<Button size='sm'>Start Free Trial</Button>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600'
						>
							{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200'>
							{navLinks.map((link) => (
								<button
									key={link.name}
									onClick={() => scrollToSection(link.href)}
									className='block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200 rounded-md'
								>
									{link.name}
								</button>
							))}
							<div className='pt-2 border-t border-gray-200 mt-3'>
								<button
									onClick={() => scrollToSection('#pricing')}
									className='block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200 rounded-md'
								>
									Sign In
								</button>
								<div className='px-3 py-2'>
									<Button size='sm' className='w-full'>
										Start Free Trial
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}
