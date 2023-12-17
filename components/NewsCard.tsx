import Image from 'next/image';
import { IconMessage, IconClock, IconThumbUp } from '@tabler/icons-react';

const NewsCard = () => {
	return (
		<div className='bg-zinc-800 relative grid grid-rows-[3fr,5fr]   my-10 rounded-sm shadow-lg shadow-black sm:grid-rows-none sm:grid-cols-[2fr,3fr] lg:grid-cols-[1fr,2fr] md:my-14'>
			<div className='relative bg-slate-100 md:h-72 '>
				<Image
					className=''
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					src='/static/img/header/improve_small.jpg'
					alt='XD'
				/>
			</div>
			<div className='p-6 md:px-10 relative'>
				<h2 className='mb-4 text-xl font-semibold'>
					Lorem ipsum dolor sit amet.
				</h2>
				<p className='text-left mb-4 '>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
					architecto. Porro tempore sapiente eos? Facilis mollitia natus,
					molestiae cum qui sapiente perspiciatis odio maiores, soluta id
					voluptatibus. Quis, rem minima.
				</p>
				<div className='flex justify-between w-full md:absolute md:bottom-4 md:w-3/4 lg:bottom-6 lg:w-10/12'>
					<div className='flex gap-1'>
						<IconClock /> 2h ago
					</div>
					<div className='flex gap-2'>
						<span className='flex gap-1'>
							<p>123</p>
							<IconThumbUp />
						</span>
						<span className='flex gap-1'>
							<p>22</p>
							<IconMessage />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
