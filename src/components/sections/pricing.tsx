export const Pricing = () => {
	const plans = [
		{
			name: 'Starter',
			price: '$9',
			period: '/month',
			description: 'Perfect for individuals and small teams getting started',
			features: [
				'Up to 5 team members',
				'10 projects',
				'Basic task management',
				'Mobile app access',
				'Email support',
				'1GB storage',
			],
			cta: 'Start Free Trial',
			popular: false,
		},
		{
			name: 'Professional',
			price: '$29',
			period: '/month',
			description: 'Ideal for growing teams that need advanced features',
			features: [
				'Up to 25 team members',
				'Unlimited projects',
				'Advanced analytics',
				'Team collaboration tools',
				'Priority support',
				'10GB storage',
				'Custom workflows',
				'Time tracking',
			],
			cta: 'Start Free Trial',
			popular: true,
		},
		{
			name: 'Enterprise',
			price: '$99',
			period: '/month',
			description: 'For large organizations with complex needs',
			features: [
				'Unlimited team members',
				'Unlimited projects',
				'Advanced security',
				'Custom integrations',
				'Dedicated support',
				'Unlimited storage',
				'Advanced reporting',
				'SSO & SAML',
				'API access',
			],
			cta: 'Contact Sales',
			popular: false,
		},
	]

	return (
		<section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Simple, Transparent Pricing</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Choose the perfect plan for your team. All plans include a 14-day free trial.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`rounded-2xl p-8 ${
								plan.popular
									? 'bg-blue-600 text-white ring-4 ring-blue-200 scale-105'
									: 'bg-gray-50 text-gray-900 hover:shadow-lg'
							} transition-all duration-300 relative`}
						>
							{plan.popular && (
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
									<span className='bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold'>
										Most Popular
									</span>
								</div>
							)}

							<div className='text-center mb-8'>
								<h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
								<p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
									{plan.description}
								</p>
								<div className='flex items-baseline justify-center'>
									<span className='text-4xl font-bold'>{plan.price}</span>
									<span
										className={`text-lg ml-1 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}
									>
										{plan.period}
									</span>
								</div>
							</div>

							<ul className='space-y-3 mb-8'>
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className='flex items-center'>
										<svg
											className={`w-5 h-5 mr-3 ${
												plan.popular ? 'text-blue-200' : 'text-green-500'
											}`}
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'
											/>
										</svg>
										<span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
											{feature}
										</span>
									</li>
								))}
							</ul>

							<button
								className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
									plan.popular
										? 'bg-white text-blue-600 hover:bg-gray-100'
										: 'bg-blue-600 text-white hover:bg-blue-700'
								}`}
							>
								{plan.cta}
							</button>
						</div>
					))}
				</div>

				{/* Money Back Guarantee */}
				<div className='text-center mt-12'>
					<div className='inline-flex items-center bg-green-50 rounded-full px-6 py-3'>
						<svg
							className='w-6 h-6 text-green-500 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<span className='text-green-800 font-semibold'>30-day money-back guarantee</span>
					</div>
				</div>
			</div>
		</section>
	)
}
