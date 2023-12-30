import Info from './FooterInfo';
import Socials from './FooterSocials';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='bg-black text-white py-2'>
			<div className='mb-4 flex flex-col gap-4'>
				<Socials />
				<Info />
			</div>
			<div className='text-center uppercase'>
				<p>GymBro {year} &copy; </p>
			</div>
		</footer>
	);
};

export default Footer;
