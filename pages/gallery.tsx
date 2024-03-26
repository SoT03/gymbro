import Image from 'next/image';
import { useState } from 'react';

const altData = [
	'treadmills photo',
	'Girl working out on press machine',
	'Man doing barbell snatch',
	'Photo of dumbells',
	'People doing yoga',
	'Man doing pull ups with chain around neck',
	'Woman doing push ups',
	'Woman working out with her trainer',
	'Photo of treadmills',
	'Man picking up tractor tire',
];

const GalleryPage = () => {
	const [activeImg, setActiveImg] = useState(-1);

	return (
		<main className='relative min-h-screen  bg-zinc-800 text-white overflow-hidden py-20   md:py-32 lg:py-40'>
			<div className='wrapper flex flex-col items-center gap-8 md:gap-12 md:flex-wrap md:justify-center lg:flex-row  xl:justify-start'>
				{altData.map((alt, index) => (
					<Image
						key={index}
						src={`/static/img/gallery/${index}.jpg`}
						alt={alt}
						height={405}
						width={270}
						className='w-3/4 shadow-sm shadow-amber-300 lg:max-w-[360px]'
						onClick={() => setActiveImg(index)}
					/>
				))}
			</div>
			{activeImg != -1 && (
				<div
					className='fixed top-0 w-full h-screen bg-black bg-opacity-60 flex items-center justify-center z-50 show-animation'
					onClick={() => setActiveImg(-1)}>
					<Image
						src={`/static/img/gallery/${activeImg}.jpg`}
						height={1275}
						width={850}
						alt={altData[activeImg]}
					/>
				</div>
			)}
		</main>
	);
};

export default GalleryPage;
