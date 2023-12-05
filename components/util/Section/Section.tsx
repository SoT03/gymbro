type SectionProps = {
	children: React.ReactNode;
	classes: string[];
};

const Section = ({ children, classes }: SectionProps) => {
	return (
		<section className={`text-white py-6 ${classes?.map((style) => style)}`}>
			<div className='wrapper'>{children}</div>
		</section>
	);
};

export default Section;
