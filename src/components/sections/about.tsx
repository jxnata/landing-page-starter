import { Check } from 'lucide-react'

export const About = () => {
	const stats = [
		{ number: 'Stat #1', label: 'Metric Label' },
		{ number: 'Stat #2', label: 'Metric Label' },
		{ number: 'Stat #3', label: 'Metric Label' },
		{ number: 'Stat #4', label: 'Metric Label' },
	]

	return (
		<section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
			<div className='max-w-7xl mx-auto'>
				{/* About Content */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>About Section Headline</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto mb-12'>
						This is your about section description. Tell your story, explain your mission, and build
						credibility with your audience. Share what makes your company unique.
					</p>
				</div>

				{/* Stats */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
					{stats.map((stat, index) => (
						<div key={index} className='text-center'>
							<div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
							<div className='text-gray-600 font-medium'>{stat.label}</div>
						</div>
					))}
				</div>

				{/* Trust Indicators */}
				<div className='bg-white rounded-2xl p-8 sm:p-12'>
					<h3 className='text-2xl font-bold text-gray-900 text-center mb-8'>Social Proof Headline</h3>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60'>
						{/* Company logos placeholder */}
						<div className='text-center'>
							<div className='bg-gray-200 rounded-lg h-12 flex items-center justify-center mb-2'>
								<span className='text-gray-500 font-semibold'>Logo #1</span>
							</div>
						</div>
						<div className='text-center'>
							<div className='bg-gray-200 rounded-lg h-12 flex items-center justify-center mb-2'>
								<span className='text-gray-500 font-semibold'>Logo #2</span>
							</div>
						</div>
						<div className='text-center'>
							<div className='bg-gray-200 rounded-lg h-12 flex items-center justify-center mb-2'>
								<span className='text-gray-500 font-semibold'>Logo #3</span>
							</div>
						</div>
						<div className='text-center'>
							<div className='bg-gray-200 rounded-lg h-12 flex items-center justify-center mb-2'>
								<span className='text-gray-500 font-semibold'>Logo #4</span>
							</div>
						</div>
					</div>

					<div className='text-center mt-12'>
						<div className='flex items-center justify-center space-x-8 text-sm text-gray-600'>
							<div className='flex items-center'>
								<Check className='w-5 h-5 text-green-500 mr-2' />
								Certification #1
							</div>
							<div className='flex items-center'>
								<Check className='w-5 h-5 text-green-500 mr-2' />
								Certification #2
							</div>
							<div className='flex items-center'>
								<Check className='w-5 h-5 text-green-500 mr-2' />
								Certification #3
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
