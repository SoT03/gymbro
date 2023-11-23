import { useState } from 'react';
import {
	IconChevronRight,
	IconChevronLeft,
	IconPointFilled,
} from '@tabler/icons-react';
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
	const [imgIndex, setImgIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = imgIndex === 0;
		const newIndex = isFirstSlide ? imageUrls.length - 1 : imgIndex - 1;
		setImgIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = imgIndex === imageUrls.length - 1;
		const newIndex = isLastSlide ? 0 : imgIndex + 1;
		setImgIndex(newIndex);
	};

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
			<div className='absolute flex gap-2 bottom-4 text-white z-10 left-1/2 -translate-x-1/2 md:bottom-8 xl:bottom-1/2 xl:w-full xl:justify-between xl:px-8'>
				<button>
					<IconChevronLeft
						className='h-8 w-8 md:w-12 md:h-12 '
						onClick={prevSlide}
					/>
				</button>
				<button>
					<IconChevronRight
						className='h-8 w-8 md:w-12 md:h-12'
						onClick={nextSlide}
					/>
				</button>
			</div>
			<div className='absolute flex flex-row left-1/2 -translate-x-1/2  bottom-16'>
				{imageUrls.map((slide, slideIndex) => (
					<div key={slideIndex}>
						<IconPointFilled
							onClick={() => setImgIndex(slideIndex)}
							className={`h-10 w-10   cursor-pointer  rounded-full ${
								slideIndex === imgIndex ? 'text-orange-400' : 'text-white'
							}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
