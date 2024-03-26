import Image from 'next/image';
import SectionHeading from './util/Section/SectionHeading';
import SectionTitle from './util/Section/SectionTitle';
import BMICalculator from './BMICalculator';
import { useState } from 'react';

const BmiSection = () => {
	const [result, setResult] = useState(0);

	const style = {
		text: 'Normal',
		color: 'text-green-400',
	};

	const resultHandler = (result: number ) => {
		setResult(result);
	};
	if (result <= 18.5) {
		style.text = 'Underweight';
		style.color = result < 16 ? 'text-red-500' : 'text-yellow-300';
	} else if (result > 25) {
		style.text = result > 35 ? 'Obesity' : 'Overweight';
		style.color = result > 35 ? 'text-red-500' : 'text-yellow-300';
	}

	return (
		<section className='bg-zinc-900 text-white grid grid-rows-[2fr,3fr] md:grid-rows-none md:grid-cols-2 lg:h-[570px]'>
			<div className='bg-red-400 relative '>
				<Image
					style={{ objectFit: 'cover' }}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw'
					src='/static/img/bmi/bmiImg.jpg'
					alt='XD'
				/>
			</div>
			<div className='p-6 md:p-12 lg:py-16 lg:px-32'>
				<div className='text-center'>
					<SectionHeading text='advanced calculator' />
					<SectionTitle title='Calculate Your BMI' />
					<hr className='border-orange-400 border-solid border-2 mb-6 lg:w-24' />
				</div>
				<BMICalculator resultHandler={resultHandler} />
				<div
					className={`mt-4 lg:mt-10 ${result === 0 ? 'invisible' : 'visible'}`}>
					<p>
						You Bmi is <span className='font-semibold text-lg'>{result}</span>
					</p>
					<p>
						You are{' '}
						<span className={`${style.color} font-semibold`}>{style.text}</span>
					</p>
				</div>
			</div>
		</section>
	);
};
export default BmiSection;
