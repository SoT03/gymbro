import ScheduleRow from '@/components/schedule/scheduleRow';

const scheduleData = [
	{
		time: 17,
		events: [{ day: 'Mon',name:'BJJ', duration: 2, trainer: 'John Morrison' }],
	},
];

const SchedulePage = () => {
	return (
		<main className='h-screen  bg-zinc-800 text-white '>
			<div className='wrapper'>
				<h1 className='uppercase font-bold '>group sessions Schedule</h1>

				<div className=''>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Monday</th>
								<th>Tuesday</th>
								<th>Wednesday</th>
								<th>Thursday</th>
								<th>Friday</th>
								<th>Saturday</th>
							</tr>
						</thead>
						<tbody>
							<ScheduleRow data={scheduleData[0]} />
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default SchedulePage;
