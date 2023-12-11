type InputRowProps = {
	type?: string;
	data: {
		id: string;
		labelText: string;
		measure?: string;
	};
};

const InputRow = ({ type = 'text', data }: InputRowProps) => {
	return (
		<div className='relative flex flex-col my-4'>
			<label htmlFor={data.id} className='font-semibold mb-2'>
				{data.labelText}
			</label>
			<input
				type={type}
				id={data.id}
				placeholder={`Enter ${data.labelText}`}
				className='px-4 py-2 bg-transparent border border-zinc-400 rounded-sm placeholder:zinc-400'
			/>
			<span className='absolute right-4 bottom-2.5 text-orange-400 font-semibold uppercase'>
				{data.measure}
			</span>
		</div>
	);
};

export default InputRow;
