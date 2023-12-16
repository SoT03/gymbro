type trainerProps = {
	data: {
		name: string;
		desc: string;
		profession: string;
		options?: string[];
	};
	isActive: boolean;
};

const TrainerInfo = ({ data, isActive }: trainerProps) => {
	return (
		<div className={`my-4  ${isActive ? '' : 'hidden'}`}>
			<h3 className='ml-2 text-xl font-semibold'>{data.name}</h3>
			<h4 className='ml-6 text-amber-400 text-lg font-semibold '>
				{data.profession}
			</h4>
			<p className='mt-4'>{data.desc}</p>
			<ul>
				{data.options &&
					data.options.map((option) => (
						<li className='ml-6 list-disc' key={option}>
							{option}
						</li>
					))}
			</ul>
		</div>
	);
};

export default TrainerInfo;
