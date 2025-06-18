import { BarChart3, Shield, Smartphone, Users, Workflow, Zap } from 'lucide-react'

export const Features = () => {
	const features = [
		{
			icon: <Zap className='w-8 h-8' />,
			title: 'Lightning Fast Performance',
			description:
				'Experience blazing-fast task management with our optimized algorithms. Never wait for your productivity tools again.',
		},
		{
			icon: <Users className='w-8 h-8' />,
			title: 'Team Collaboration',
			description:
				'Work seamlessly with your team. Share projects, assign tasks, and track progress in real-time collaboration.',
		},
		{
			icon: <BarChart3 className='w-8 h-8' />,
			title: 'Advanced Analytics',
			description:
				'Get deep insights into your productivity patterns. Track time, analyze performance, and optimize your workflow.',
		},
		{
			icon: <Smartphone className='w-8 h-8' />,
			title: 'Mobile Optimized',
			description:
				'Access your tasks anywhere, anytime. Our mobile-first design ensures perfect experience on all devices.',
		},
		{
			icon: <Shield className='w-8 h-8' />,
			title: 'Enterprise Security',
			description:
				'Your data is protected with enterprise-grade security. SSL encryption, 2FA, and regular security audits.',
		},
		{
			icon: <Workflow className='w-8 h-8' />,
			title: 'Smart Automation',
			description:
				'Automate repetitive tasks with smart workflows. Set triggers, create rules, and let FlowSpace do the work.',
		},
	]

	return (
		<section id='features' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
						Everything You Need to Stay Productive
					</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Powerful features designed to streamline your workflow and boost your team's productivity
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
						<h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
							Ready to 10x Your Productivity?
						</h3>
						<p className='text-lg text-gray-600 mb-6 max-w-2xl mx-auto'>
							Join over 50,000 professionals who have transformed their workflow with FlowSpace Pro
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Start Your Free Trial
							</button>
							<button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Schedule Demo
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
