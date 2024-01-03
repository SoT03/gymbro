type sectionProps = {
	children: React.ReactNode;
	title: string;
};

const PricingSection = ({ children, title }: sectionProps) => {
	return (
		<section className='px-8 lg:mt-12'>
			<div className='wrapper md:mt-6'>
				<h2 className='text-center text-orange-400 uppercase pt-6 text-xl font-semibold md:text-2xl'>
					Gym areas
				</h2>
				<div className='text-white md:flex flex-wrap items-center justify-center md:p-4'>
					{children}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
