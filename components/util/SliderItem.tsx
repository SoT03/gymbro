import Link from 'next/link';
import { useEffect, useState } from 'react';

type SliderItem = {
	itemData: {
		title: string;
		desc: string;
		url: string;
		url_mobile: string;
		btn: {
			text: string;
			url: string;
		};
	};
};

const SliderItem = ({ itemData }: SliderItem) => {
	const width = useWindowWidth();

	return (
		<div
			className='flex flex-col items-center justify-center h-full  bg-left bg-gray-800  bg-no-repeat text-center  text-white sm:bg-center px-10'
			style={{
				backgroundImage:
					width < 768 ? `url(${itemData.url_mobile})` : `url(${itemData.url})`,
			}}>
			<div className='bg-shadow' />
			<h2 className='z-10'>{itemData.title}</h2>
			<p className='z-10'>{itemData.desc}</p>
			<Link href={itemData.btn.url}>{itemData.btn.text}</Link>
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
