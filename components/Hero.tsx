import { useWindowSize } from '@/hooks/useWindowWidth';
import Section from './util/Section/Section';

const Hero = () => {
	const size = useWindowSize();

	return (
		<Section
			classes={['relative z-0 bg-fixed bg-center md:bg-cover']}
			style={{
				backgroundImage: `url(/static/img/hero/hero_${
					size.width > 768 ? 'big' : 'small'
				}.jpg)`,
			}}
			shadow={true}>
			<div className='relative z-20 text-center font-bold uppercase border-4 mx-6 my-2 p-2 md:py-8 md:text-xl lg:text-2xl'>
				become a better version of yourself
			</div>
		</Section>
	);
};

export default Hero;
