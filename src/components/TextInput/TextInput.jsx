import React, { useEffect, useState } from 'react';

import './text-input.scss';

const TextInput = ({ placeHolder, type, onInputChange, id }) => {
	const [userInput, setUserInput] = useState('');

	const handleInputChange = (e) => {
		const inputValue = e.target.value;

		setUserInput(inputValue);
		onInputChange(e, inputValue);
	};

	useEffect(() => {}, [userInput]);

	const getInputType = (type) => {
		switch (type) {
			case 'password':
				return 'password';
			case 'email':
				return 'email';
			default:
				return 'text';
		}
	};

	return (
		<div className='input-container relative'>
			<input
				className='border-b-1 w-full leading-reg border-grey focus:border-dark'
				id={id}
				type={type === 'password' ? 'password' : 'text'}
				placeholder={placeHolder}
				onInput={(e) => handleInputChange(e)}
			/>
		</div>
	);
};

export default TextInput;
