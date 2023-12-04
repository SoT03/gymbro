type SectionProps = {
	children: React.ReactNode;
	title: string;
	heading: string;
	bgColor: 'bg-zinc-900' | 'bg-zinc-800';
};

const Section = ({ children, title, heading, bgColor }: SectionProps) => {
	return (
		<section className={`text-white ${bgColor}`}>
			<div className='wrapper'>
				<div className='p-8 relative'>
					<div className='text-center'>
						<p className='text-orange-300  uppercase text-xs '>{heading}</p>
						<h2 className='text-3xl mb-4 font-bold'>{title}</h2>
					</div>
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-1/12 lg:mx-auto' />
					{children}
				</div>
			</div>
		</section>
	);
};

export default Section;
