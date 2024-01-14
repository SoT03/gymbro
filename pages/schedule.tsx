import ScheduleRow from '@/components/schedule/scheduleRow';

const scheduleData = [
	{
		time: 17,
		events: [
			{ day: 'Mon', name: 'BJJ', duration: 2, trainer: 'John Morrison' },
			{ day: 'Tue' },
			{ day: 'Wed', name: 'Fitness', duration: 1, trainer: 'Aj Lee' },
			{ day: 'Thu' },
			{ day: 'Fri', name: 'Fitness', duration: 1, trainer: 'Aj Lee' },
			{ day: 'Sat' },
		],
	},
	{
		time: 18,
		events: [
			{
				day: 'Tue',
				name: 'PchysioMobility',
				duration: 2,
				trainer: 'Daniel Bryan',
			},
			{ day: 'Wed' },
			{ day: 'Thu', name: 'BJJ', duration: 2, trainer: 'John Morrison' },
			{
				day: 'Fri',
				name: 'Perfect ABS',
				duration: 1,
				trainer: 'Kendall Orton',
			},
			{ day: 'Sat' },
		],
	},
	{
		time: 19,
		events: [
			{ day: 'Mon' },
			{
				day: 'Wed',
				name: 'Perfect ABS',
				duration: 1,
				trainer: 'Kendall Orton',
			},
			{ day: 'Fri' },
			{ day: 'Sat' },
		],
	},
];

const cellStyle = 'lg:w-[13.5%]';

const SchedulePage = () => {
	return (
		<main className='h-screen  bg-zinc-800 text-white overflow-scroll'>
			<div className='wrapper h-full lg:flex lg:flex-col lg:items-center lg:justify-center '>
				<h1 className='uppercase font-bold mb-20'>group sessions Schedule</h1>

				<table className='w-full'>
					<thead>
						<tr>
							<th className='lg:w-[6%]'></th>
							<th className={cellStyle}>Monday</th>
							<th className={cellStyle}>Tuesday</th>
							<th className={cellStyle}>Wednesday</th>
							<th className={cellStyle}>Thursday</th>
							<th className={cellStyle}>Friday</th>
							<th className={cellStyle}>Saturday</th>
						</tr>
					</thead>
					<tbody className=''>
						{scheduleData.map((time) => (
							<ScheduleRow data={time} key={time.time} />
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default SchedulePage;
