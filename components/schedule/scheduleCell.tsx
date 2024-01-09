type cellData = {
	time: number;
	data: { day: string; name: string; duration: number; trainer: string };
};

const ScheduleCell = ({ data, time }: cellData) => {
	let color = 'bg-zinc-900';

	switch (data.name) {
		case 'BJJ':
			color = 'bg-emerald-400';
			break;
		case 'Fitness':
			color = 'bg-fuchsia-500';
			break;
		case 'PchysioMobility':
			color = 'bg-rose-600';
			break;
		case 'Perfect ABS':
			color = 'bg-sky-500';
			break;
	}

	return (
		<td rowSpan={data.duration} className={`${color} `}>
			{data.name && (
				<div>
					<h3>{data.name}</h3>
					<p>{data.trainer}</p>
					<p>
						{time}:00 - {time + data.duration}:00
					</p>
				</div>
			)}
		</td>
	);
};

export default ScheduleCell;
