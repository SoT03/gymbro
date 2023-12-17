import NewsCard from './NewsCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import SectionTitle from './util/Section/SectionTitle';

const News = () => {
	return (
		<Section classes={['bg-zinc-800']}>
			<div className='relative py-6 px-8'>
				<div className='text-center'>
					<SectionHeading text='Articles' />
					<SectionTitle title='Our Latest News' />
				</div>

				<div>
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</Section>
	);
};

export default News;
