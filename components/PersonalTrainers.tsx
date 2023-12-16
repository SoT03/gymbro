import Image from 'next/image';
import SectionHeading from './util/Section/SectionHeading';
import SectionTitle from './util/Section/SectionTitle';
import { useState } from 'react';
import TrainerInfo from './TrainerInfo';

const trainersData = [
	{
		name: 'John Morrison',
		profession: 'Personal Trainer',
		desc: 'Certified Personal Trainer with an international IFBB license, recommended by PZKFITS.Paul is involved in conducting individual training, training and nutrition reigns, as well as preparing athletes to compete in figure competitions.Patience, passion, humility and commitment are his core values as a successful trainer. Knowing that someone achieves their goals with his help gives him great satisfaction. He loves to infect people with positive energy and motivate them to action. As he says , motivation and hard work is a guarantee of success!He has high expectations of his charges, but demands even more from himself. He regularly monitors the progress of his charges, correcting training and dietary mistakes on an ongoing basis.',
	},

	{
		name: 'Aj Lee',
		profession: 'Fitness Trainer',
		desc: 'Associated with sports since childhood. As a 5-year-old, she started skiing, and in the early 90s she was the first of the few girls in Poland to start snowboarding and windsurfing - which she loves and still does. She takes on sports challenges as often as possible, especially those related to water sports - she has been kitesurfing for 5 years and has successfully tried her hand at wakeboarding.She swapped corporate life for a job in the family business, and for less than 2 years she has been involved with Silver Gym.Life at the gym drew her in so much that she decided to learn the ins and outs of coaching herself.She took a personal trainer course at Mauricz Training Center, receiving REPs accreditation. Since then, she has constantly deepened her knowledge, both practical and theoretical.',
	},

	{
		name: 'Daniel Bryan',
		profession: 'Personal Trainer',
		desc: 'Personal trainer with an international IFBB license. Passionate about silhouette sports and, above all, extreme bodybuilding. Winner of the title of the international Champion of Poland of rookies of the NPC IFBB PRO LEAGUE federation in the category up to 90 kg and the category OPEN 2020r.Winner of the title of Champion in the Open Cup of Poland Sopot 2019r. in the 90k. category and OPEN category.Medalist of IFBB PZKFiTS 2020 federation debuts in the + 80kg category. ',
	},

	{
		name: 'Kendall Orton',
		profession: 'Physiotherapist',
		desc: 'Masters degree in physiotherapy, graduate of the Medical College of Jan Kochanowski University in Kielce.Specializes in the treatment of pain in the spine, peripheral joints and soft tissues. In his work he mainly uses:',
		options: [
			'Manual therapy',
			'Pinotherapy according to the FRSc concept',
			' Myofascial trigger point therapy (MPPS).',
			' Deep tissue massage (MTG).',
			'Musculo-fascial release therapy',
			'Instrument therapy',
		],
	},
];

const PersonalTrainers = () => {
	const [currentTrainer, setCurrentTrainer] = useState(0);

	return (
		<section className='bg-zinc-900 text-white grid grid-rows-[3fr,1fr] md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none '>
			<div className='p-6 md:p-12 lg:py-20 lg:h-[720px] xl:h-[600px]  xl:px-32'>
				<div className='text-center'>
					<SectionHeading text='our trainers' />
					<SectionTitle title='Meet Our Proffesionalists' />
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
				</div>
				<menu className='flex flex-wrap justify-between gap-4 lg:flex-nowrap'>
					{trainersData.map((trainer, index) => (
						<button
							className={`w-[45%] border-2 h-2/4 p-2 lg:w-[20%] lg:h-auto ${
								currentTrainer === index
									? 'border-orange-400'
									: 'border-zinc-400'
							}`}
							key={index}
							onClick={() => setCurrentTrainer(index)}>
							{trainer.name}
						</button>
					))}
				</menu>
				<div className=''>
					{trainersData.map((trainer, index) => (
						<TrainerInfo
							data={trainer}
							isActive={index === currentTrainer}
							key={index}
						/>
					))}
				</div>
			</div>
			<div className='bg-red-400 relative '>
				<Image
					style={{ objectFit: 'contain', background: 'black' }}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw'
					src={`/static/img/trainers/trainer${currentTrainer + 1}.png`}
					alt='XD'
				/>
			</div>
		</section>
	);
};

export default PersonalTrainers;
