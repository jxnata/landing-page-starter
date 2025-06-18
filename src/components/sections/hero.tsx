import { BarChart3, Check } from 'lucide-react'
import { Button } from '../button'

export const Hero = () => {
	return (
		<section id='home' className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center'>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
						Put your headline here with <span className='text-blue-600'>highlighted text</span>
					</h1>
					<p className='text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
						This is your hero description paragraph. It should explain your main value proposition in 1-2
						sentences. Keep it clear, compelling and focused on the primary benefit you offer to your
						customers.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
						<Button size='lg' className='w-full sm:w-auto'>
							Primary CTA Button
						</Button>
						<Button variant='outline' size='lg' className='w-full sm:w-auto'>
							Secondary CTA Button
						</Button>
					</div>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500'>
						<div className='flex items-center'>
							<Check className='w-5 h-5 text-green-500 mr-2' />
							Trust signal #1
						</div>
						<div className='flex items-center'>
							<Check className='w-5 h-5 text-green-500 mr-2' />
							Trust signal #2
						</div>
						<div className='flex items-center'>
							<Check className='w-5 h-5 text-green-500 mr-2' />
							Trust signal #3
						</div>
					</div>
				</div>

				{/* Hero Image/Dashboard Preview */}
				<div className='mt-16 relative'>
					<div className='bg-white rounded-lg shadow-2xl p-8 mx-auto max-w-4xl'>
						<div className='bg-gray-100 rounded-lg h-64 sm:h-80 md:h-96 flex items-center justify-center'>
							<div className='text-center'>
								<div className='bg-blue-100 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center'>
									<BarChart3 className='w-8 h-8 text-blue-600' />
								</div>
								<h3 className='text-lg font-semibold text-gray-600 mb-2'>Hero Visual Placeholder</h3>
								<p className='text-gray-500'>
									Replace this area with your main product image, screenshot, or hero visual
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
