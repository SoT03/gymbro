import Link from 'next/link';
import { useWindowSize } from '../../../hooks/useWindowWidth';

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
	currentIndex: number;
};

const SliderItem = ({ itemData, currentIndex }: SliderItem) => {
	const size = useWindowSize();

	return (
		<div
			className='flex flex-col items-center justify-center w-full flex-shrink-0  h-full bg-gray-800  bg-no-repeat text-center  text-white bg-center px-10 md:bg-cover md:px-20 transition-transform duration-700'
			style={{
				backgroundImage:
					size.width < 768
						? `url(${itemData.url_mobile})`
						: `url(${itemData.url})`,
				transform: `translate(${-100 * currentIndex}%)`,
			}}>
			<div className='wrapper'>
				<h2 className='z-10 text-2xl mb-2 font-bold uppercase md:text-4xl lg:text-7xl'>
					{itemData.title}
				</h2>
				<p className='z-10 mb-2 md:text-lg md:my-8 lg:my-12 lg:text-3xl'>
					{itemData.desc}
				</p>
				<Link
					href={itemData.btn.url}
					className='btn  bg-gradient-to-r text-white from-orange-500 to-orange-600 hover:from-white hover:text-orange-500   hover:to-white transition-colors duration-300 mt-2  md:text-lg  md:w-1/4 lg:text-3xl lg:py-4'>
					{itemData.btn.text}
				</Link>
			</div>
			<div className='bg-shadow' />
		</div>
	);
};

export default SliderItem;

// background-color: #f42b03;
// background-image: linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%);
