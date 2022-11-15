import React from 'react';
import logo from '../../assets/logo.png';

const CompanyCard = () => {
	return (
		<div className='company-card-container flex items-center justify-center h-48 md:justify-start lg:h-full lg:flex-col'>
			<img src={logo} className='logo m-0 h-40 w-auto' alt='logo' />
			<div className='header lg:self-start'>
				<h3 className='text-white font-md text-lg leading-1 lg:leading-lg w-fit'>
					Registration
				</h3>
				<h3 className='text-white font-bold text-lg leading-10 lg:leading-lg w-fit'>
					Become a partner
				</h3>
				<p className='info-text font-serif leading-5 lg:leading-6 max-sm:text-2xs text-sm text-white max-sm:max-w-xs lg:mt-4'>
					RAMAERA is the future of upcoming Industrialisation in India, aiming
					presence in all kind of manufacturing sectors
				</p>
			</div>
		</div>
	);
};

export default CompanyCard;
