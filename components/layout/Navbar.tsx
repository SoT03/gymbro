import Image from 'next/image';
import Link from 'next/link';

import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
const navLinks: { name: string; link: string }[] = [
	{ name: 'Home', link: '/' },
	{ name: 'Offer', link: '/' },
	{ name: 'Schedule', link: '/' },
	{ name: 'Galerry', link: '/' },
	{ name: 'News', link: '/' },
];
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 left-0 w-full text-lg text-gray-100 bg-gray-800'>
			<div className='py-1 px-4 '>
				<Link href={'/'} className='flex items-center'>
					<Image
						height={52}
						width={52}
						src='/static/img/logo.png'
						alt='Gymbro logo'
					/>{' '}
					<p className=' font-bold'>
						Gym<span className='text-orange-400'>Bro</span>
					</p>
				</Link>

				<div className='absolute p-2 top-1 right-4' onClick={navMenuHandler}>
					<IconMenu2 className={!isOpen ? 'nav-icon' : 'hidden'} />
					<IconX className={isOpen ? 'nav-icon' : 'hidden'} />
				</div>

				<ul className={isOpen ? 'text-center py-3' : 'hidden'}>
					{navLinks.map((link) => (
						<li>
							<Link
								key={link.name}
								href={link.link}
								className='block py-3 mt-1 cursor-pointer'>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
