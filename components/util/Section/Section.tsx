type SectionProps = {
	children: React.ReactNode;
	classes?: string[];
	style?: {};
};

const Section = ({ children, classes, style }: SectionProps) => {
	return (
		<section
			className={`text-white py-6 ${classes?.map((style) => style)}`}
			style={style}>
			<div className='wrapper'>{children}</div>
		</section>
	);
};

export default Section;
