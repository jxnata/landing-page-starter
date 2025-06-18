import { Book, MessageCircle, Users } from 'lucide-react'

export const FAQ = () => {
	const faqs = [
		{
			question: 'Write your first frequently asked question here?',
			answer: 'Provide a clear, helpful answer to the first question. Address common concerns or objections your potential customers might have.',
		},
		{
			question: 'What about your second most common question?',
			answer: 'Answer the second FAQ with specific details. Include relevant information that helps users make informed decisions.',
		},
		{
			question: 'How do you handle this common concern?',
			answer: 'Address this concern directly and provide reassurance. Use this space to build trust and credibility.',
		},
		{
			question: 'What about pricing or payment questions?',
			answer: 'Answer pricing-related questions clearly. Include information about billing, refunds, or plan changes.',
		},
		{
			question: 'How does your support process work?',
			answer: 'Explain your customer support process and availability. Set clear expectations for response times and available channels.',
		},
		{
			question: 'What about security and privacy?',
			answer: 'Address data security and privacy concerns. Mention certifications, compliance standards, and data protection measures.',
		},
		{
			question: 'Can users integrate with other tools?',
			answer: 'Explain integration capabilities and any limitations. Provide information about APIs or third-party connections.',
		},
		{
			question: 'What are your terms for long-term commitments?',
			answer: 'Clarify contract terms, cancellation policies, and any commitments. Be transparent about your terms and conditions.',
		},
	]

	return (
		<section id='faq' className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>FAQ Section Headline</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						This is your FAQ section description. Encourage users to find answers and mention how to get
						additional help.
					</p>
				</div>

				<div className='space-y-8'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300'
						>
							<h3 className='text-lg font-semibold text-gray-900 mb-3'>{faq.question}</h3>
							<p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
						</div>
					))}
				</div>

				{/* Contact Support */}
				<div className='text-center mt-16'>
					<div className='bg-blue-600 rounded-2xl p-8 sm:p-12 text-white'>
						<h3 className='text-2xl font-bold mb-4'>Additional Help Headline</h3>
						<p className='text-blue-100 mb-6 text-lg'>
							This is your help section description. Encourage users to reach out for personalized
							assistance.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Primary Support CTA
							</button>
							<button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Secondary Support CTA
							</button>
						</div>
					</div>
				</div>

				{/* Help Resources */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
					<div className='text-center p-6'>
						<div className='bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
							<Book className='w-8 h-8 text-blue-600' />
						</div>
						<h4 className='font-semibold text-gray-900 mb-2'>Resource Type #1</h4>
						<p className='text-gray-600 text-sm'>Description of your first help resource or channel</p>
					</div>
					<div className='text-center p-6'>
						<div className='bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
							<MessageCircle className='w-8 h-8 text-green-600' />
						</div>
						<h4 className='font-semibold text-gray-900 mb-2'>Resource Type #2</h4>
						<p className='text-gray-600 text-sm'>Description of your second help resource or channel</p>
					</div>
					<div className='text-center p-6'>
						<div className='bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
							<Users className='w-8 h-8 text-purple-600' />
						</div>
						<h4 className='font-semibold text-gray-900 mb-2'>Resource Type #3</h4>
						<p className='text-gray-600 text-sm'>Description of your third help resource or channel</p>
					</div>
				</div>
			</div>
		</section>
	)
}
