import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import logo from '../assets/logo.png';
import mail from '../assets/icon-park_email-down.png';
import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';

const Welcome = () => {
	return (
		<div className='welcome-page h-screen bg-primary'>
			<header className='welcome-header block relative'>
				<img src={logo} className='logo-sm m-0 h-40 w-auto' alt='logo' />
				<div className='welcome-header absolute left-36 top-14 pb-12 border-b-2 w-5/6'>
					<h1 className='text-lg font-md text-white'>Ramaera Industries</h1>
				</div>
				<div className='language-select absolute right-20 top-16 flex gap-2 items-center cursor-pointer'>
					<FontAwesomeIcon
						className='mr-4 text-white'
						icon={faBell}
						size={'xl'}
					/>
					<Dropdown
						items={[
							{ key: 'en', text: 'English (UK)' },
							{ key: 'hi', text: 'Hindi (IN)' },
						]}
						type='light'
						onSelect={() => {}}
					/>
				</div>
			</header>
			<main className='welcome-main mt-16 mx-auto w-fit'>
				<h3 className='text-white text-lg mx-auto'>
					Welcome to Ramaera, Please enter the Code sent to your registered mail
					ID
				</h3>
				<div className='divider w-x h-1 bg-light-grey mx-auto mt-2'></div>
				<img
					src={mail}
					className='mail-icon-lg h-78 w-auto mx-auto mt-20'
					alt='logo'
				/>
				<div className='mx-auto w-fit'>
					<Button
						type={'primary'}
						size='sm'
						content={'Open'}
						onClick={() => {}}
					/>
				</div>
			</main>
		</div>
	);
};

export default Welcome;
