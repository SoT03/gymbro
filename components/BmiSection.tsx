import Image from 'next/image';
import SectionHeading from './util/Section/SectionHeading';
import SectionTitle from './util/Section/SectionTitle';

const BmiSection = () => {
	return (
		<section className='bg-zinc-900 text-white grid grid-rows-2'>
			<div className='bg-red-400 relative'>
				<Image
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src='/static/img/offers/gym.jpg'
					alt='XD'
				/>
			</div>
			<div className='p-6'>
				<div className='text-center'>
					<SectionHeading text='advanced calculator' />
					<SectionTitle title='Calculate Your BMI' />
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
				</div>
				<div>
					<div>
						<label htmlFor=''></label>
						<input type='text' />
					</div>
					<div>
						<label htmlFor=''></label>
						<input type='text' />
					</div>
					<div>
						<input type='checkbox' name='' id='' />
						<input type='checkbox' name='' id='' />
					</div>
					<button>Calculate</button>
				</div>
			</div>
		</section>
	);
};
export default BmiSection;
