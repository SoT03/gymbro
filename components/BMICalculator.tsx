import { useState } from 'react';
import InputRow from './util/InputRow';

const BMICalculator = ({
	resultHandler,
}: {
	resultHandler: (result: number) => void;
}) => {
	const [BMIValues, setBMIValues] = useState({
		height: 0,
		weight: 0,
	});
	const heightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBMIValues({ ...BMIValues, height: Number(e.target.value) });
	};
	const weightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBMIValues({ ...BMIValues, weight: Number(e.target.value) });
	};

	const calcHandler = () => {
		const heightDivided = BMIValues.height / 100;
		let res: number = BMIValues.weight / Math.pow(heightDivided, 2);
		resultHandler(parseFloat(res.toFixed(2)));
	};
	return (
		<div>
			<InputRow
				onChange={heightHandler}
				data={{ labelText: 'Your Height', id: 'Height', measure: 'cm' }}
			/>
			<InputRow
				onChange={weightHandler}
				data={{ labelText: 'Your Weight', id: 'Weight', measure: 'kg' }}
			/>
			<div className='flex justify-center mt-6 md:mt-10'>
				<button className='btn bg-orange-600' onClick={calcHandler}>
					Calculate
				</button>
			</div>
		</div>
	);
};

export default BMICalculator;
