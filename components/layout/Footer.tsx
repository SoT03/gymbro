import Info from './FooterInfo';
import Socials from './FooterSocials';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className=' w-full bottom-0 bg-black text-white py-2 md:py-3'>
			<div className='wrapper'>
				<div className='mb-4 flex flex-col gap-4 md:flex-row md:p-8 md:items-center md:justify-around'>
					<Socials />
					<Info />
				</div>
			</div>
			<div className='text-center uppercase'>
				<p className='border-t-2 pt-2'>GymBro {year} &copy; </p>
			</div>
		</footer>
	);
};

export default Footer;
