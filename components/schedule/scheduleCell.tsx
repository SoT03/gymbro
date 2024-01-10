type cellData = {
	time: number;
	data: { day: string; name?: string; duration?: number; trainer?: string };
};

const ScheduleCell = ({ data, time }: cellData) => {
	let color = 'bg-zinc-900';

	switch (data.name) {
		case 'BJJ':
			color = 'emerald-400';
			break;
		case 'Fitness':
			color = 'fuchsia-500';
			break;
		case 'PchysioMobility':
			color = 'rose-600';
			break;
		case 'Perfect ABS':
			color = 'sky-500';
			break;
	}

	const height = 'h-[' + 100 * data.duration! + 'px]';

	return (
		<td rowSpan={data.duration} className={`border-2 border-amber-400 `}>
			{data.name && (
				<div
					className={`px-2 py-4 mx-4 my-4 ${height} ${
						'bg-' + color
					} border-4 rounded-md  ${'border-' + color}   bg-opacity-60 `}>
					<h3>{data.name}</h3>
					<p>{data.trainer}</p>
					<p>
						{time}:00 - {time + data.duration!}:00
					</p>
				</div>
			)}
		</td>
	);
};

export default ScheduleCell;
