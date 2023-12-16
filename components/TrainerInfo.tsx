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
		<div className={isActive ? '' : 'hidden'}>
			<h3>{data.name}</h3>
			<h4>{data.profession}</h4>
			<p>{data.desc}</p>
			<ul>{data.options && data.options.map((option) => <li>option</li>)}</ul>
		</div>
	);
};

export default TrainerInfo;
