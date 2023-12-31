import {
	IconMapPinFilled,
	IconMailFilled,
	IconPhoneFilled,
} from '@tabler/icons-react';

const iconStyle = 'text-orange-400';

const infoData = [
	{
		icon: <IconMapPinFilled className={iconStyle} />,
		text: 'Nowy Świat 12, 96-300 Żyrardów',
	},
	{
		icon: <IconMailFilled className={iconStyle} />,
		text: 'GymBro@gymBro.com',
	},
	{
		icon: <IconPhoneFilled className={iconStyle} />,
		text: '829 942 022',
	},
];

const Info = () => {
	return (
		<div className='flex flex-col items-center text-center'>
			<h2 className='text-lg font-semibold md:mt-6'>Quick Info</h2>
			<div className=''>
				{' '}
				{infoData.map((info) => (
					<div key={info.text} className='flex gap-2 my-2 '>
						{' '}
						{info.icon} {info.text}
					</div>
				))}{' '}
			</div>
		</div>
	);
};

export default Info;
