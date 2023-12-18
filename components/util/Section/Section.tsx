type SectionProps = {
	children: React.ReactNode;
	classes?: string[];
	style?: {};
	shadow?: boolean;
};

const Section = ({ children, classes, style, shadow }: SectionProps) => {
	return (
		<section
			className={`text-white py-6 ${classes?.map((style) => style)}`}
			style={style}>
			<div className='wrapper'>{children}</div>
			{shadow && <div className='bg-shadow'></div>}
		</section>
	);
};

export default Section;
