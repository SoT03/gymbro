import Image from 'next/image';
import {
	IconBrandFacebookFilled,
	IconBrandYoutubeFilled,
	IconBrandTwitterFilled,
	IconBrandTiktokFilled,
} from '@tabler/icons-react';
import Link from 'next/link';

const socialClasses = 'w-6 h-6  m-1 md:h-4';
const socials = [
	<IconBrandFacebookFilled className={socialClasses} />,
	<IconBrandYoutubeFilled className={socialClasses} />,
	<IconBrandTwitterFilled className={socialClasses} />,
	<IconBrandTiktokFilled className={socialClasses} />,
];

const Socials = () => {
	return (
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
			<div className='flex mt-2 '>
				{socials.map((social) => (
					<Link
						href='/'
						key={Math.random()}
						className='border-zinc-500 border-[1px] mx-2 p-1 rounded-sm cursor-pointer hover:bg-orange-400 duration-300 transition-colors'>
						{social}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Socials;
