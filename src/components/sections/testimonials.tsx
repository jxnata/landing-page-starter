export const Testimonials = () => {
	const testimonials = [
		{
			name: 'Sarah Johnson',
			role: 'Product Manager at TechCorp',
			image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
			quote: "FlowSpace Pro transformed how our team collaborates. We've increased our productivity by 40% since switching.",
		},
		{
			name: 'Michael Chen',
			role: 'CEO at StartupXYZ',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			quote: "The analytics dashboard gives us insights we never had before. It's like having a productivity consultant built-in.",
		},
		{
			name: 'Emily Rodriguez',
			role: 'Team Lead at DesignStudio',
			image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
			quote: 'Simple, elegant, and powerful. FlowSpace Pro is everything we needed in a project management tool.',
		},
	]

	return (
		<section id='testimonials' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>What Our Users Say</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Don't just take our word for it. See what thousands of satisfied customers have to say about
						FlowSpace Pro.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
						>
							<div className='flex items-center mb-6'>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className='w-12 h-12 rounded-full object-cover mr-4'
								/>
								<div>
									<h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
									<p className='text-gray-600 text-sm'>{testimonial.role}</p>
								</div>
							</div>
							<blockquote className='text-gray-700 leading-relaxed mb-4'>
								"{testimonial.quote}"
							</blockquote>
							<div className='flex text-yellow-400'>
								{[...Array(5)].map((_, i) => (
									<svg key={i} className='w-5 h-5 fill-current' viewBox='0 0 20 20'>
										<path d='M9.049 2.927C9.3 2.006 10.7 2.006 10.951 2.927l1.07 4.106a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.07 4.106c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.668 2.676c-.784.57-1.838-.197-1.539-1.118l1.07-4.106a1 1 0 00-.364-1.118L2.13 8.533c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z' />
									</svg>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Additional testimonials section */}
				<div className='text-center mt-16'>
					<div className='bg-blue-50 rounded-2xl p-8 sm:p-12'>
						<div className='flex items-center justify-center mb-6'>
							<div className='flex -space-x-2'>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
									alt='User'
								/>
								<div className='w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center'>
									<span className='text-white text-sm font-semibold'>+12k</span>
								</div>
							</div>
						</div>
						<h3 className='text-2xl font-bold text-gray-900 mb-2'>Join 50,000+ Happy Users</h3>
						<p className='text-gray-600 mb-6'>
							Be part of the growing community of professionals who have transformed their productivity.
						</p>
						<div className='flex items-center justify-center space-x-1 text-yellow-400 mb-4'>
							{[...Array(5)].map((_, i) => (
								<svg key={i} className='w-6 h-6 fill-current' viewBox='0 0 20 20'>
									<path d='M9.049 2.927C9.3 2.006 10.7 2.006 10.951 2.927l1.07 4.106a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.07 4.106c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.668 2.676c-.784.57-1.838-.197-1.539-1.118l1.07-4.106a1 1 0 00-.364-1.118L2.13 8.533c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z' />
								</svg>
							))}
						</div>
						<p className='text-gray-600'>
							<strong>4.9/5</strong> average rating from 12,000+ reviews
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
