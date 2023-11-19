import Slider from './util/Slider';

const Header = () => {
	const images = [
		{
			title: 'h1',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			url: '/static/img/header/improve_big.jpg',
		},
		{
			title: 'h2',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.123',
			url: '/static/img/header/togheter_big.jpg',
		},
		{
			title: 'h3',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.69696',
			url: '/static/img/header/workhard_big.jpg',
		},
	];

	return (
		<header className='h-screen bg-pink-400'>
			<Slider imageUrls={images} />
		</header>
	);
};

export default Header;
