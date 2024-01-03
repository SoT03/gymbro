import Image from 'next/image';

type OfferProps = {
	data: {
		img: string;
		title: string;
		desc: string;
	};
	index: number;
};

const Offer = ({ data, index }: OfferProps) => {
	let check = index % 2;
	return (
		<div
			className={`relative text-white pb-10 md:pb-0 md:grid md:grid-cols-2  ${
				check ? 'bg-zinc-800' : 'bg-zinc-900'
			}`}>
			<div
				className={`relative bg-slate-100 h-[240px] md:h-full ${
					check ? 'md:order-2' : ''
				} `}>
				<Image
					className=''
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src={data.img}
					alt='XD'
				/>
				{check ? (
					<div className='z-0 shadow-block--left' />
				) : (
					<div className=' shadow-block--right' />
				)}
			</div>
			<div className='z-10  p-6 md:px-10'>
				<h2 className='mb-4 text-xl font-semibold'>{data.title}</h2>
				<p className='text-left'>{data.desc}</p>
			</div>
		</div>
	);
};

export default Offer;
