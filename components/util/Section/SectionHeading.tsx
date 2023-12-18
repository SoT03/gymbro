const SectionHeading = ({ text }: { text: string }) => {
	return (
		<p className='text-orange-300  uppercase text-xs xl:text-base font-semibold'>
			{text}
		</p>
	);
};

export default SectionHeading;
