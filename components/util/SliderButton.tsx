type ButtonProps = {
	isDisabled: boolean;
	icon: JSX.Element;
};

const SliderButton = ({ isDisabled, icon }: ButtonProps) => {
	return (
		<button
			className='bg-slate-200 rounded-full cursor-pointer hover:bg-orange-400 transition-colors duration-300'
			disabled={isDisabled}>
			{icon}
		</button>
	);
};

export default SliderButton;
