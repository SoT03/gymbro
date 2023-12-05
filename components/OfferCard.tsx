const OfferCard = () => {
	return (
		<div className='border text-center py-4 my-6'>
			<div className=''>
				<p className='mb-2'>
					<span className='font-bold  text-lg'>
						$<span className='text-2xl'>49</span>
					</span>
					/month
				</p>
				<h3 className='bg-zinc-900 py-1 font-bold'>One arm kikcs</h3>
			</div>
			<div className='px-8 py-4 text-slate-300'>
				<p className='border-b border-slate-200 pb-2'>Lorem, ipsum dolor.</p>
				<p className='border-b border-slate-200 pb-2'>Lorem, ipsum dolor.</p>
				<p className='border-b border-slate-200 pb-2'>Lorem, ipsum dolor.</p>
				<p className='border-b border-slate-200 pb-2'>Lorem, ipsum dolor.</p>
			</div>
		</div>
	);
};

export default OfferCard;
