import Image from 'next/image';
import {
	IconStarFilled,
	IconStarHalfFilled,
	IconStar,
} from '@tabler/icons-react';
import { useEffect } from 'react';

type OpinionsProps = {
	data: {
		name: string;
		avatar: string;
		review: string;
		rate: number;
	};
	currentIndex: number;
};

const OpinionCard = ({ data, currentIndex }: OpinionsProps) => {
	let rating: number = data.rate;
	let stars: JSX.Element[] = [];
	let i;

	const getStars = () => {
		for (i = rating; i >= 1; i--) {
			stars.push(
				<IconStarFilled
					className='text-yellow-400 w-4 h-4'
					key={Math.random()}
				/>
			);
		}
		if (i == 0.5) {
			stars.push(
				<IconStarHalfFilled
					className='text-yellow-400 w-4 h-4'
					key={Math.random()}
				/>
			);
		}
		for (let x = 5 - rating; x >= 1; x--) {
			stars.push(
				<IconStar className='text-gray-500 w-4 h-4' key={Math.random()} />
			);
		}

		return stars;
	};

	getStars();

	return (
		<div
			className='bg-zinc-800  p-6  rounded-sm w-full flex-shrink-0 '
			style={{ transform: `translate(${-100 * currentIndex}%)` }}>
			<div className='flex flex-row justify-between items-center'>
				<p className='font-bold text-xl'>{data.name}</p>
				<Image
					className='rounded-lg w-14 h-12'
					width={128}
					height={128}
					src={data.avatar}
					alt={data.name}
				/>
			</div>
			<div className='mt-4'>
				<p>{data.review}</p>
				<span className='flex mt-2'>{stars.map((star) => star)}</span>
			</div>
		</div>
	);
};

export default OpinionCard;
