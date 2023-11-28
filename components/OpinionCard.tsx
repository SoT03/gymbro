import Image from 'next/image';

type OpinionsProps = {
	data: {
		name: string;
		avatar: string;
		review: string;
		rate: number;
	};
};

const OpinionCard = ({ data }: OpinionsProps) => {
	return (
		<div className='bg-zinc-800  p-6  rounded-sm'>
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
				<span>⭐⭐⭐⭐</span>
			</div>
		</div>
	);
};

export default OpinionCard;
