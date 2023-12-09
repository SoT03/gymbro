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
		<div className='bg-zinc-800 relative grid grid-rows-[3fr,5fr]   my-10 rounded-sm shadow-lg shadow-black sm:grid-rows-none sm:grid-cols-[2fr,3fr] lg:grid-cols-[1fr,2fr] md:my-14'>
			<div className='relative bg-slate-100 md:h-72 '>
				<Image
					className=''
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src={data.img}
					alt='XD'
				/>
			</div>
			<div className='p-6 md:px-10'>
				<h2 className='mb-4 text-xl font-semibold'>{data.title}</h2>
				<p className='text-left'>{data.desc}</p>
			</div>
		</div>
	);
};

export default Offer;
