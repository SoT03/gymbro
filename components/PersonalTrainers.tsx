import Image from 'next/image';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import SectionTitle from './util/Section/SectionTitle';

const PersonalTrainers = () => {
	return (
		<section className='bg-zinc-900 text-white grid grid-rows-[2fr,3fr] md:grid-rows-none md:grid-cols-2 lg:h-[570px]'>
			<div className='p-6 md:p-12 lg:py-16 lg:px-32'>
				<div className='text-center'>
					<SectionHeading text='our trainers' />
					<SectionTitle title='Meet Our Proffesionalists' />
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
				</div>
				<menu>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
				</menu>
				<div>
					<h3></h3>
					<p></p>
				</div>
			</div>
			<div className='bg-red-400 relative '>
				<Image
					style={{ objectFit: 'contain', background: 'black' }}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw'
					src='/static/img/trainers/trainer1.png'
					alt='XD'
				/>
			</div>
		</section>
	);
};

export default PersonalTrainers;
