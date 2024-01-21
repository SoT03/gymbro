import ScheduleCell from './scheduleCell';

type timeProps = {
	data: {
		time: number;
		events: {
			day: string;
			name?: string;
			duration?: number;
			trainer?: string;
		}[];
	};
};

const ScheduleRow = ({ data }: timeProps) => {
	return (
		<tr className=''>
			<td className='px-4'>{data.time.toString()}:00</td>
			{data.events.map((event) => (
				<ScheduleCell time={data.time} data={event} key={event.day} />
			))}
		</tr>
	);
};

export default ScheduleRow;
