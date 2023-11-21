import { useEffect, useState } from 'react';

type SliderItem = {
	itemData: {
		title: string;
		desc: string;
		url: string;
		url_mobile: string;
	};
};

const SliderItem = ({ itemData }: SliderItem) => {
	const width = useWindowWidth();

	return (
		<div
			className='flex flex-col items-center justify-center h-full  bg-left  bg-no-repeat text-lg  text-white'
			style={{
				backgroundImage:
					width <= 768 ? `url(${itemData.url_mobile})` : `url(${itemData.url})`,
			}}>
			<div className='bg-shadow' />
			<h2 className='z-10'>{itemData.title}</h2>
			<p className='z-10'>{itemData.desc}</p>
		</div>
	);
};

function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowWidth;
}

export default SliderItem;
