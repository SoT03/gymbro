import Image from 'next/image';

type OfferProps = {
	data: {
		img: string;
		title: string;
		desc: string;
	};
};

const Offer = ({ data }: OfferProps) => {
	return (
		<div className='bg-zinc-800  relative flex flex-col my-10 rounded-sm shadow-lg shadow-black'>
			<div className='relative '>
				<Image width={640} height={427} src={data.img} alt='XD' />
			</div>
			<div className='p-6 '>
				<h2 className='mb-4 text-xl font-semibold'>{data.title}</h2>
				<p className='text-left'>{data.desc}</p>
			</div>
		</div>
	);
};

export default Offer;
