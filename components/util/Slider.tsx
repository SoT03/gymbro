import { useState } from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import SliderItem from './SliderItem';

export type ImageSliderProps = {
	imageUrls: {
		title: string;
		desc: string;
		url: string;
		url_mobile: string;
	}[];
};

const Slider = ({ imageUrls }: ImageSliderProps) => {
	const [imgIndex, setImgIndex] = useState(0);

	return (
		<div className='relative h-full z-0 bg-pink-100'>
			<SliderItem itemData={imageUrls[imgIndex]} />
			<button className='absolute left-0 top-1/2'>
				<IconChevronLeft />
			</button>
			<button>
				<IconChevronRight className='absolute right-0 top-1/2' />
			</button>
		</div>
	);
};

export default Slider;
