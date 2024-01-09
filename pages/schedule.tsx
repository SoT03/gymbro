import ScheduleRow from '@/components/schedule/scheduleRow';

const scheduleData = [
	{
		time: 17,
		events: [
			{ day: 'Mon', name: 'BJJ', duration: 2, trainer: 'John Morrison' },
			{ day: 'Tue' },
		],
	},
];

const SchedulePage = () => {
	return (
		<main className='h-screen  bg-zinc-800 text-white '>
			<div className='wrapper flex items-center justify-center flex-col h-screen'>
				<h1 className='uppercase font-bold mb-20'>group sessions Schedule</h1>

				<table className='w-full'>
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
		</main>
	);
};

export default SchedulePage;
