import Image from 'next/image';
import Link from 'next/link';

import { IconMenu2 } from '@tabler/icons-vue';

const Navbar = () => {
	const navLinks: { name: string; link: string }[] = [
		{ name: 'Home', link: '/' },
		{ name: 'Offer', link: '/' },
		{ name: 'Schedule', link: '/' },
		{ name: 'Galerry', link: '/' },
		{ name: 'News', link: '/' },
		{ name: 'Home', link: '/' },
	];

	return (
		<nav className='bg-blue-300 fixed top-0 left-0 w-full text-lg'>
			<div className='py-1 px-4 '>
				<Link href={'/'} className='flex items-center'>
					<Image
						height={52}
						width={52}
						src='/static/img/logo.png'
						alt='Gymbro logo'
					/>{' '}
					<span>GymBro</span>
				</Link>

				<div></div>

				<ul className='flex flex-col text-center '>
					{navLinks.map((link) => (
						<Link href={link.link} className='py-3 mt-1 cursor-pointer hidden'>
							{link.name}
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
