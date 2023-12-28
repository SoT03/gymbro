import Image from 'next/image';
import {
	IconBrandFacebookFilled,
	IconBrandYoutubeFilled,
	IconBrandTwitterFilled,
	IconBrandTiktokFilled,
} from '@tabler/icons-react';

const socials = [
	<IconBrandFacebookFilled />,
	<IconBrandYoutubeFilled />,
	<IconBrandTwitterFilled />,
	<IconBrandTiktokFilled />,
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-black text-white py-2'>
			<div className='mb-4'>
				<div className='flex flex-col items-center '>
					<h2 className='flex items-center'>
						<Image
							height={80}
							width={80}
							src='/static/img/logo.png'
							alt='Gymbro logo'
							className='w-24 h-24 '
						/>{' '}
						<p className=' font-bold text-2xl'>
							Gym<span className='text-orange-400'>Bro</span>
						</p>
					</h2>
					<p className='font-semibold text-lg'>Social Media</p>
					<div className='flex mt-2'>
						{socials.map((social) => (
							<div
								key={Math.random()}
								className='border-zinc-500 border-[1px] mx-1 p-1 rounded-sm'>
								{social}
							</div>
						))}
					</div>
				</div>
				<div></div>
			</div>
			<div className='text-center uppercase'>
				<p>GymBro {year} &copy; </p>
			</div>
		</footer>
	);
};

export default Footer;