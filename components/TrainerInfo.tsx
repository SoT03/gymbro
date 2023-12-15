type trainerProps = {
	data: {
		name: string;
		desc: string;
		icon: string;
	};
};

const TrainerInfo = ({ data }: trainerProps) => {
	return (
		<div>
			<h3>{data.name}</h3>
			<p>{data.desc}</p>
			<div>{data.icon} Years of Experiance</div>
		</div>
	);
};

export default TrainerInfo;
