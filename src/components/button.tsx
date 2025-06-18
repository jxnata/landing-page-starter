import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	className?: string
	onClick?: () => void
	disabled?: boolean
}

export const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	onClick,
	disabled = false,
}: ButtonProps) => {
	const baseClasses =
		'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

	const variantClasses = {
		primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
		secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
		outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
	}

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	}

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
