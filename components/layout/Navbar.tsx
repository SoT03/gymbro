import Image from 'next/image';
import Link from 'next/link';

import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
const navLinks: { name: string; link: string }[] = [
	{ name: 'Home', link: '/' },
	{ name: 'Pricing', link: '/#pricing' },
	{ name: 'Offer', link: '/offer' },
	{ name: 'Schedule', link: '/schedule' },
	{ name: 'Galerry', link: '/gallery' },
	{ name: 'News', link: '/#news' },
];
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}

		window.addEventListener('scroll', handleScroll);
	}, []);

	const navMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full text-lg  text-gray-100 bg-gray-800 md:bg-transparent   lg:text-xl z-10 ${
				scrollY > 120 ? 'md:backdrop-blur-sm' : ''
			}
			`}>
			<div className='py-0 px-4 md:flex md:items-center md:justify-between md:px-14 lg:px-36  '>
				<Link href={'/'} className='flex items-center'>
					<Image
						height={80}
						width={80}
						src='/static/img/logo.png'
						alt='Gymbro logo'
						className='w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20'
					/>{' '}
					<p className=' font-bold lg:text-2xl'>
						Gym<span className='text-orange-400'>Bro</span>
					</p>
				</Link>

				<div
					className='absolute p-2 top-0.5 right-4 md:hidden z-30'
					onClick={navMenuHandler}>
					<IconMenu2 className={!isOpen ? 'nav-icon' : 'hidden'} />
					<IconX className={isOpen ? 'nav-icon' : 'hidden'} />
				</div>

				<ul
					className={`absolute bg-gray-800 w-full left-0 -top-96 text-center py-2    transition-all duration-500   ${
						isOpen ? 'opacity-100   top-10' : 'opacity-0'
					} md:flex md:items-center  md:w-auto md:opacity-100  md:static md:bg-transparent`}>
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link
								href={link.link}
								className='block py-2 my-2 cursor-pointer md:mx-4 z-100 hover:text-orange-400 transition-colors duration-300'>
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
