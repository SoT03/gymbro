import InputRow from './util/InputRow';

const BMICalculator = ({
	resultHandler,
}: {
	resultHandler: (result: string) => void;
}) => {
	const BMIValues = {
		height: 0,
		weight: 0,
	};
	const heightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		BMIValues.height = Number(e.target.value);
	};
	const weightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		BMIValues.weight = Number(e.target.value);
	};

	const calcHandler = () => {
		console.log(BMIValues);
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
			<div className='flex justify-center mt-6'>
				<button className='btn bg-orange-600' onClick={calcHandler}>
					Calculate
				</button>
			</div>
		</div>
	);
};

export default BMICalculator;
