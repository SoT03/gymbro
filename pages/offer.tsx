import { useWindowSize } from '@/hooks/useWindowWidth';

const OfferPage = () => {
	const size = useWindowSize();

	return (
		<>
			<header
				className='h-[50vh] relative bg-center flex flex-col items-center justify-center text-white px-12 text-center md:h-[40vh]'
				style={{
					backgroundImage: `url(/static/img/offers/dumbells_${
						size.width >= 768 ? 'big' : 'small'
					}.jpg)`,
				}}>
				<div className='bg-shadow'></div>
				<h1 className='z-10 uppercase font-semibold text-2xl mb-2'>
					Our Offer
				</h1>
				<p className='z-10  text-lg'>Here is all inforamations that you need</p>
			</header>
		</>
	);
};

export default OfferPage;
