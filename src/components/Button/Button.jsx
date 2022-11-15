import React from 'react';

const Button = ({ type, size, content, onClick }) => {
	const classes = {
		primary: ' text-white bg-gradient-to-l from-brand to-brand-2',
	};

	const handleClick = () => {
		onClick();
	};

	return (
		<button
			onClick={() => handleClick()}
			className={`button font-bold rounded-sm ${classes[type]} ${
				size === 'sm' ? 'w-30' : 'w-40'
			} h-10 my-8 lg:${size === 'sm' ? 'w-72' : 'w-72'}`}
		>
			{content}
		</button>
	);
};

export default Button;
