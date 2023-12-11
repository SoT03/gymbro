import Slider from './util/Slider/Slider';

const Header = () => {
	const images = [
		{
			title: 'Prove yourself',
			desc: 'Start workoing out and show yuorself what are you capable of. Buy gym membership and have access to everything you need.',
			url: '/static/img/header/improve_big.jpg',
			url_mobile: '/static/img/header/improve_small.jpg',
			btn: {
				text: 'Check prices',
				url: '/',
			},
		},
		{
			title: 'Join our fitness community',
			desc: 'Become a member of our gym and fitness community. Meet, chat and talk woith great people and have fun while improving yourself !',
			url: '/static/img/header/togheter_big.jpg',
			url_mobile: '/static/img/header/togheter_small.jpg',
			btn: {
				text: 'Join us',
				url: '/',
			},
		},
		{
			title: 'Train with the best',
			desc: 'Our personal trainers are well known around the country. They transformed thousands of bodies throughout their careers.',
			url: '/static/img/header/workhard_big.jpg',
			url_mobile: '/static/img/header/workhard_small.jpg',
			btn: {
				text: 'Check out',
				url: '/',
			},
		},
	];

	return (
		<header className='h-96 md:h-screen overflow-hidden'>
			<Slider imageUrls={images} />
		</header>
	);
};

export default Header;
