import Image from 'next/image';
import { IconMessage, IconThumbUpFilled } from '@tabler/icons-react';
import { useState } from 'react';

type NewsCardProps = {
	data: {
		title: string;
		desc: string;
		likes: number;
		comments: number;
		img: string;
	};
	index: boolean;
};

const NewsCard = ({ data, index }: NewsCardProps) => {
	const [likes, setLikes] = useState(data.likes);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		if (!isLiked) {
			setIsLiked(!isLiked);
			setLikes((prev) => prev + 1);
		} else {
			setIsLiked(!isLiked);
			setLikes((prev) => prev - 1);
		}
	};

	return (
		<div
			className={`bg-zinc-900 relative grid grid-rows-[3fr,5fr]   my-10 rounded-sm shadow-lg shadow-black sm:grid-rows-none sm:grid-cols-[2fr,3fr] md:my-14 ${
				index ? 'lg:grid-cols-[2fr,1fr]' : 'lg:grid-cols-[1fr,2fr]'
			}`}>
			<div
				className={`relative bg-slate-100 md:h-72  ${index ? 'order-1' : ''}`}>
				<Image
					className=''
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src={data.img}
					alt='XD'
				/>
			</div>
			<div className='p-6 md:px-10 relative'>
				<h2 className='mb-4 text-xl font-semibold'>{data.title}</h2>
				<p className='text-left mb-4 '>{data.desc}</p>
				<span className='text-amber-200 '>Read more...</span>
				<div className='flex justify-end gap-8 w-full md:absolute md:bottom-4 md:w-3/4 lg:bottom-6 lg:w-10/12'>
					<span className='flex gap-1 md:gap-2'>
						<p>{likes}</p>
						<IconThumbUpFilled
							className={`cursor-pointer ${isLiked ? 'text-orange-400' : ''}`}
							onClick={likeHandler}
						/>
					</span>
					<span className='flex gap-1 md:gap-2'>
						<p>{data.comments}</p>
						<IconMessage />
					</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
