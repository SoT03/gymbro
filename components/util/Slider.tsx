import { useState } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
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

	return (
		<div className='relative h-full z-0 '>
			<SliderItem itemData={imageUrls[imgIndex]} />
			<div className='absolute bottom-4 text-white z-10 left-1/2 -translate-x-1/2 md:bottom-8'>
				<button className='mr-10 '>
					<IconChevronLeft className='h-8 w-8 md:w-12 md:h-12' />
				</button>
				<button>
					<IconChevronRight className='h-8 w-8 md:w-12 md:h-12' />
				</button>
			</div>
		</div>
	);
};

export default Slider;
