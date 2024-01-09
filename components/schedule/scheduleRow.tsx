import ScheduleCell from './scheduleCell';

type timeProps = {
	data: {
		time: number;
		events: { day: string; name: string; duration: number; trainer: string }[];
	};
};

const ScheduleRow = ({ data }: timeProps) => {
	return (
		<tr>
			<td>{data.time.toString()}:00</td>
			<ScheduleCell data={data.events[0]} time={data.time} />
			<ScheduleCell data={data.events[1]} time={data.time} />
		</tr>
	);
};

export default ScheduleRow;
