import { Book, MessageCircle, Users } from 'lucide-react'

export const FAQ = () => {
	const faqs = [
		{
			question: 'Can I change plans anytime?',
			answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any charges.",
		},
		{
			question: 'What payment methods do you accept?',
			answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.',
		},
		{
			question: 'Is there a setup fee?',
			answer: 'No setup fees ever. You only pay for your monthly or annual subscription. Get started immediately after signup.',
		},
		{
			question: 'Can I cancel anytime?',
			answer: 'Yes, you can cancel your subscription at any time with no penalties. No long-term contracts required.',
		},
		{
			question: 'Do you offer customer support?',
			answer: 'Absolutely! We provide 24/7 email support for all plans, with priority support and phone support for Professional and Enterprise plans.',
		},
		{
			question: 'Is my data secure?',
			answer: 'Yes, we use enterprise-grade security with SSL encryption, regular backups, and SOC 2 certification. Your data is always protected.',
		},
		{
			question: 'Can I import data from other tools?',
			answer: 'Yes, we support imports from most popular productivity and project management tools. Our team can help with migration.',
		},
		{
			question: 'Do you offer discounts for annual plans?',
			answer: "Yes, save up to 20% when you choose annual billing. Plus, you'll get additional features and priority support.",
		},
	]

	return (
		<section id='faq' className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Frequently Asked Questions</h2>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
						Got questions? We've got answers. If you don't find what you're looking for, feel free to
						contact our support team.
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
						<h3 className='text-2xl font-bold mb-4'>Still Have Questions?</h3>
						<p className='text-blue-100 mb-6 text-lg'>
							Our friendly support team is here to help you get started
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Contact Support
							</button>
							<button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200'>
								Schedule Demo
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
						<h4 className='font-semibold text-gray-900 mb-2'>Documentation</h4>
						<p className='text-gray-600 text-sm'>Comprehensive guides and tutorials</p>
					</div>
					<div className='text-center p-6'>
						<div className='bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
							<MessageCircle className='w-8 h-8 text-green-600' />
						</div>
						<h4 className='font-semibold text-gray-900 mb-2'>Live Chat</h4>
						<p className='text-gray-600 text-sm'>Get instant help from our team</p>
					</div>
					<div className='text-center p-6'>
						<div className='bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center'>
							<Users className='w-8 h-8 text-purple-600' />
						</div>
						<h4 className='font-semibold text-gray-900 mb-2'>Community</h4>
						<p className='text-gray-600 text-sm'>Connect with other users</p>
					</div>
				</div>
			</div>
		</section>
	)
}
