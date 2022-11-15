import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ items, type, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(items[0]);

	const toggleDropdown = () => {
		console.log('clicked!', isOpen);
		setIsOpen(!isOpen);
	};

	const handleSelect = (item) => {
		setIsOpen(false);
		setSelectedItem(item);
		onSelect(item.key);
	};

	return (
		<div className='dropdown-container flex gap-2 items-center cursor-pointer relative'>
			<p
				className={`selected-dropdown-input text-sm${
					type === 'light' ? ' text-white' : ''
				}`}
			>
				{selectedItem.text}
			</p>
			<FontAwesomeIcon
				className={type === 'light' ? 'text-white' : ''}
				icon={faCaretDown}
				onClick={() => toggleDropdown()}
			/>
			{isOpen && (
				<ul className='dropdown-options absolute top-7 border-1 right-0'>
					{items.map((item) => (
						<li
							className={`font-light text-xs px-4 py-1 whitespace-nowrap hover:bg-light-grey border-b-1 last:border-0${
								type === 'light' ? ' text-white hover:text-dark' : ''
							}`}
							onClick={() => handleSelect(item)}
						>
							{item.text}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
