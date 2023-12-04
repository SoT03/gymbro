type SectionProps = {
	children: React.ReactNode;
	classes: string[];
};

const Section = ({ children, classes }: SectionProps) => {
	return (
		<section className={`text-white ${classes.map((style) => style)}`}>
			<div className='wrapper'>{children}</div>
		</section>
	);
};

export default Section;

{
	/* <div className='p-8 relative'>
	<div className='text-center'>
		<p className='text-orange-300  uppercase text-xs '>{heading}</p>
		<h2 className='text-3xl mb-4 font-bold'>{title}</h2>
	</div>
	<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-1/12 lg:mx-auto' />
	{children}
</div>; */
}
