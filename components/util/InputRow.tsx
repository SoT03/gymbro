type InputRowProps = {
	type?: string;
	data: {
		id: string;
		labelText: string;
	};
};

const InputRow = ({ type = 'text', data }: InputRowProps) => {
	return (
		<div>
			<label htmlFor={data.id}>{data.labelText}</label>
			<input type={type} id={data.id} />
		</div>
	);
};

export default InputRow;
