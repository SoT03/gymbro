const scheduleData = [
	{
		name: 'BJJ',
		day: 'Mon',
		time: '17',
		duration: '2',
	},
	{
		name: 'Fitness',
		day: 'Mon',
		time: '19',
		duration: '1',
	},
	{
		name: 'Boks for kids',
		day: 'Tue',
		time: '18',
		duration: '1',
	},
	{
		name: 'PhysioMobility',
		day: 'Wen',
		time: '18',
		duration: '2',
	},
	{
		name: 'BJJ',
		day: 'Wen',
		time: '19',
		duration: '2',
	},
	{
		name: 'Fitness',
		day: 'Thu',
		time: '17',
		duration: '1',
	},
	{
		name: 'Boks for kids',
		day: 'Fri',
		time: '18',
		duration: '1',
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
								<th>Monday</th>
								<th>Tuesday</th>
								<th>Wednesday</th>
								<th>Thursday</th>
								<th>Friday</th>
								<th>Saturday</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};

export default SchedulePage;
