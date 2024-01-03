type CardProps = {
	index?: number;
	data: {
		title: string;
		price: {
			amount: number;
			per: string;
		};
		options: string[];
	};
};

const PricingCard = ({ data, index }: CardProps) => {
	return (
		<div className='border rounded-sm text-center py-4 my-6 shadow-lg shadow-black flex flex-col  md:mx-6 md:w-2/5 lg:flex-nowrap lg:w-auto hover:scale-110 transition-transform duration-300'>
			<div className=''>
				<p className='mb-2 md:m-4'>
					<span className='font-bold  text-lg'>
						$<span className='text-2xl md:text-3xl'>{data.price.amount}</span>
					</span>
					/{data.price.per}
				</p>
				<h3
					className={` py-1 font-bold md:p-2 ${
						index === 1
							? 'bg-gradient-to-r  from-orange-500 to-orange-600'
							: 'bg-zinc-900'
					} `}>
					{data.title}
				</h3>
			</div>
			<ul className='px-8 py-4 text-slate-300 lg:px-12'>
				{data.options.map((option) => (
					<li key={option} className='border-b mt-1 border-slate-200 pb-2'>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PricingCard;
