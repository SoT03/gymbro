import { useRef, useState, useEffect } from 'react';
import { IconPointFilled } from '@tabler/icons-react';
import SliderItem from './SliderItem';

export type ImageSliderProps = {
	imageUrls: {
		title: string;
		desc: string;
		url: string;
		url_mobile: string;
		btn: {
			text: string;
			url: string;
		};
	}[];
};

const Slider = ({ imageUrls }: ImageSliderProps) => {
	const timerRef = useRef();
	const [imgIndex, setImgIndex] = useState(0);

	// const prevSlide = () => {
	// 	const isFirstSlide = imgIndex === 0;
	// 	const newIndex = isFirstSlide ? imageUrls.length - 1 : imgIndex - 1;
	// 	setImgIndex(newIndex);
	// };

	const nextSlide = () => {
		const isLastSlide = imgIndex === imageUrls.length - 1;
		const newIndex = isLastSlide ? 0 : imgIndex + 1;
		setImgIndex(newIndex);
	};

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			nextSlide();
		}, 5000);

		return () => clearTimeout(timerRef.current);
	});

	return (
		<div className=' relative h-full z-0 overflow-hidden'>
			<div className='flex w-full h-full'>
				{imageUrls.map((slide) => (
					<SliderItem
						itemData={slide}
						key={slide.url}
						currentIndex={imgIndex}
					/>
				))}
			</div>
			<div className='hidden xl:flex absolute  flex-row left-1/2 -translate-x-1/2  bottom-16'>
				{imageUrls.map((slide, slideIndex) => (
					<div key={slideIndex}>
						<IconPointFilled
							onClick={() => setImgIndex(slideIndex)}
							className={`h-10 w-10  cursor-pointer  rounded-full   ${
								slideIndex === imgIndex ? 'text-orange-400' : 'text-white'
							} hover:scale-110 hover:transition-transform duration-300 hover:shadow-sm hover:shadow-slate-200`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
