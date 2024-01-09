type cellData = {
	time: number;
	data: { day: string; name: string; duration: number; trainer: string };
};

const ScheduleCell = ({ data, time }: cellData) => {
	return (
		<td colSpan={data.duration}>
			<h3>{data.name}</h3>
			<p>{data.trainer}</p>
			<p>
				{time}:00 - {time + data.duration}:00
			</p>
		</td>
	);
};

export default ScheduleCell;
