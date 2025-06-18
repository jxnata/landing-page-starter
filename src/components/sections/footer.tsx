import { BarChart3, Facebook, Github, Heart, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
					{/* Company Info */}
					<div className='md:col-span-2'>
						<div className='flex items-center mb-4'>
							<div className='bg-blue-600 rounded-lg p-2 mr-3'>
								<BarChart3 className='w-6 h-6 text-white' />
							</div>
							<h3 className='text-2xl font-bold'>FlowSpace Pro</h3>
						</div>
						<p className='text-gray-300 mb-6 max-w-md'>
							Transform your productivity with intelligent task management, team collaboration, and
							powerful analytics in one seamless platform.
						</p>
						<div className='flex space-x-4'>
							{/* Social Media Icons */}
							<a
								href='#'
								className='bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200'
							>
								<Twitter className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200'
							>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200'
							>
								<Linkedin className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200'
							>
								<Github className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Product</h4>
						<ul className='space-y-2'>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Features
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Pricing
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Integrations
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									API
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Security
								</a>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Company</h4>
						<ul className='space-y-2'>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									About
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Blog
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Careers
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Contact
								</a>
							</li>
							<li>
								<a href='#' className='text-gray-300 hover:text-white transition-colors duration-200'>
									Press
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className='bg-gray-800 rounded-2xl p-8 mb-12'>
					<div className='text-center md:text-left md:flex md:items-center md:justify-between'>
						<div className='mb-4 md:mb-0'>
							<h4 className='text-xl font-semibold mb-2'>Stay Updated</h4>
							<p className='text-gray-300'>Get the latest product updates and productivity tips.</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-3'>
							<input
								type='email'
								placeholder='Enter your email'
								className='bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 flex-1 min-w-0 sm:min-w-64'
							/>
							<button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap'>
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-gray-800 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 md:mb-0'>
							<p className='text-gray-400 text-sm'>© 2024 FlowSpace Pro. All rights reserved.</p>
							<div className='flex space-x-6 text-sm'>
								<a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
									Privacy Policy
								</a>
								<a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
									Terms of Service
								</a>
								<a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>
									Cookie Policy
								</a>
							</div>
						</div>
						<div className='flex items-center space-x-2 text-gray-400 text-sm'>
							<span>Made with</span>
							<Heart className='w-4 h-4 text-red-500' />
							<span>by the FlowSpace team</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
