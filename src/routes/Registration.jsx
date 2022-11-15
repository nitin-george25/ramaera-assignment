import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';
import TextInput from '../components/TextInput/TextInput';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import { Link } from 'react-router-dom';

const Registration = () => {
	const [registrationInput, setRegistrationInput] = useState({
		firstName: '',
		lastName: '',
		email: '',
		referralId: '',
		password: '',
	});
	const [isFormValid, setIsFormValid] = useState(false);

	const { t, i18n } = useTranslation();

	const handleLanguageSelect = (language) => {
		i18n.changeLanguage(language);
	};

	const handleInputChange = (e, input) => {
		const inputKey = e.target.getAttribute('id');

		let newRegistrationInput = { ...registrationInput };

		newRegistrationInput[inputKey] = input;

		console.log('input changed', e, inputKey, newRegistrationInput);
		setRegistrationInput(newRegistrationInput);
	};

	useEffect(() => {
		let isValid = true;

		Object.keys(registrationInput).map((inputType) => {
			if (registrationInput[inputType] === '' && inputType !== 'referralId') {
				console.log('checking', registrationInput[inputType], inputType);
				isValid = false;
			}
		});

		console.log('', isValid);
		setIsFormValid(isValid);
	}, [registrationInput]);

	return (
		<div className='registration-page flex flex-col h-screen bg-primary lg:flex-row'>
			<CompanyCard />
			<div className='registration-form-container flex-grow flex-auto ma max-lg:rounded-t-lg lg:rounded-l-lg bg-white relative'>
				<div className='language-select absolute right-10 top-5 flex gap-2 items-center cursor-pointer'>
					<Dropdown
						items={[
							{ key: 'en', text: 'English (UK)' },
							{ key: 'hi', text: 'Hindi (IN)' },
						]}
						onSelect={handleLanguageSelect}
					/>
				</div>
				<div className='form-header mt-24 ml-10 md:mt-28 md:ml-20'>
					<h3 className='form-heading text-dark font-bold text-lg lg:text-3xl lg:leading-xl w-fit'>
						{t('register')}
					</h3>
					<p className='form-info leading-reg text-light-grey max-w-xs md:max-w-sm lg:max-w-md'>
						{t('register-info')}
					</p>
				</div>
				<form
					className='registration-form flex flex-col gap-8 md:gap-12 w-3/5 mx-auto mt-10 md:mt-20'
					onSubmit={(e) => e.preventDefault()}
				>
					{[
						{ text: 'First Name', key: 'firstName' },
						{ text: 'Last name', key: 'lastName' },
						{ text: 'Email', key: 'email' },
						{ text: 'Referral-ID', key: 'referralId' },
						{ text: 'Password', key: 'password' },
					].map((item, index) => (
						<TextInput
							key={`${item.key}-${index}`}
							id={item.key}
							type={item.key}
							placeHolder={item.text}
							onInputChange={handleInputChange}
						/>
					))}

					<Link className='self-center' to={isFormValid ? '/welcome' : '#'}>
						<Button type={'primary'} content={t('button')} onClick={() => {}} />
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Registration;
