import Slider from './util/Slider';

const Header = () => {
	const images = [
		{
			title: 'h1',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			url: '/static/img/header/improve_big.jpg',
			url_mobile: '/static/img/header/improve_small.jpg',
		},
		{
			title: 'Join our fitness community',
			desc: 'Become a member of our gym and fitness community. Meet great people and have fun while improving yourself !',
			url: '/static/img/header/togheter_big.jpg',
			url_mobile: '/static/img/header/togheter_small.jpg',
		},
		{
			title: 'h3',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.69696',
			url: '/static/img/header/workhard_big.jpg',
			url_mobile: '/static/img/header/workhard_small.jpg',
		},
	];

	return (
		<header className='h-96 max-h md:h-screen bg-pink-400'>
			<Slider imageUrls={images} />
		</header>
	);
};

export default Header;
