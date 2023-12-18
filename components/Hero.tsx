import Section from './util/Section/Section';

const Hero = () => {
	return (
		<Section
			classes={['relative z-0']}
			style={{
				backgroundImage: 'url(/static/img/hero/hero_small.jpg)',
				
			}}
			shadow={true}>
			<div className='relative z-20 text-center border-4 mx-6 my-2 p-2 '>
				become a better version of yourself
			</div>
		</Section>
	);
};

export default Hero;
