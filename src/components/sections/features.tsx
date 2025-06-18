import { BarChart3, Shield, Smartphone, Users, Workflow, Zap } from 'lucide-react'

export const Features = () => {
	const features = [
		{
			icon: <Zap className='w-8 h-8' />,
			title: 'Feature Title #1',
			description:
				'Write a compelling description of your first key feature. Focus on the benefit it provides to your users.',
		},
		{
			icon: <Users className='w-8 h-8' />,
			title: 'Feature Title #2',
			description:
				'Describe your second main feature here. Explain how it solves a specific problem for your target audience.',
		},
		{
			icon: <BarChart3 className='w-8 h-8' />,
			title: 'Feature Title #3',
			description:
				'Highlight your third key feature. Use clear, benefit-focused language that resonates with your users.',
		},
		{
			icon: <Smartphone className='w-8 h-8' />,
			title: 'Feature Title #4',
			description:
				'Present your fourth feature with a focus on value proposition. Keep it concise but impactful.',
		},
		{
			icon: <Shield className='w-8 h-8' />,
			title: 'Feature Title #5',
			description:
				"Describe your fifth feature here. Make sure to connect it to your users' needs and pain points.",
		},
		{
			icon: <Workflow className='w-8 h-8' />,
			title: 'Feature Title #6',
			description: 'Explain your sixth feature. Focus on the outcome and benefit rather than technical details.',
		},
	]

	return (
		<section id='features' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Features Section Headline</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						This is your features section description. Explain the overall value of your feature set and how
						it addresses your users' needs.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300'
						>
							<div className='bg-blue-100 rounded-lg p-3 w-fit mb-6 text-blue-600'>{feature.icon}</div>
							<h3 className='text-xl font-semibold text-gray-900 mb-3'>{feature.title}</h3>
							<p className='text-gray-600 leading-relaxed'>{feature.description}</p>
						</div>
					))}
				</div>

				<div className='text-center mt-16'>
					<div className='bg-blue-50 rounded-2xl p-8 sm:p-12'>
						<h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Call-to-Action Headline</h3>
						<p className='text-lg text-gray-600 mb-6 max-w-2xl mx-auto'>
							This is your features CTA description. Encourage users to take the next step after learning
							about your features.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Primary CTA Button
							</button>
							<button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Secondary CTA Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
