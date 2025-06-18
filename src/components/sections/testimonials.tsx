export const Testimonials = () => {
	const testimonials = [
		{
			name: 'Customer Name #1',
			role: 'Job Title at Company',
			image: 'https://placehold.co/100x100/png',
			quote: 'Replace this with your first customer testimonial. Make it specific and focus on the results or benefits they experienced.',
		},
		{
			name: 'Customer Name #2',
			role: 'Job Title at Company',
			image: 'https://placehold.co/100x100/png',
			quote: 'Add your second testimonial here. Include specific metrics or outcomes when possible to make it more credible.',
		},
		{
			name: 'Customer Name #3',
			role: 'Job Title at Company',
			image: 'https://placehold.co/100x100/png',
			quote: 'Your third testimonial should complement the first two. Choose testimonials that address different aspects of your product.',
		},
	]

	return (
		<section id='testimonials' className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Testimonials Section Headline</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						This is your testimonials section description. Introduce the social proof and explain why these
						testimonials matter.
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
									src='https://placehold.co/80x80/png'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://placehold.co/80x80/png'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://placehold.co/80x80/png'
									alt='User'
								/>
								<img
									className='w-10 h-10 rounded-full border-2 border-white object-cover'
									src='https://placehold.co/80x80/png'
									alt='User'
								/>
								<div className='w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center'>
									<span className='text-white text-sm font-semibold'>+Your#</span>
								</div>
							</div>
						</div>
						<h3 className='text-2xl font-bold text-gray-900 mb-2'>Social Proof Headline</h3>
						<p className='text-gray-600 mb-6'>
							Add a description about your user community. This reinforces trust and shows scale.
						</p>
						<div className='flex items-center justify-center space-x-1 text-yellow-400 mb-4'>
							{[...Array(5)].map((_, i) => (
								<svg key={i} className='w-6 h-6 fill-current' viewBox='0 0 20 20'>
									<path d='M9.049 2.927C9.3 2.006 10.7 2.006 10.951 2.927l1.07 4.106a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.07 4.106c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.668 2.676c-.784.57-1.838-.197-1.539-1.118l1.07-4.106a1 1 0 00-.364-1.118L2.13 8.533c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z' />
								</svg>
							))}
						</div>
						<p className='text-gray-600'>
							<strong>Your Rating</strong> average rating from review sources
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
