import NewsCard from './NewsCard';
import Section from './util/Section/Section';
import SectionHeading from './util/Section/SectionHeading';
import HR from './util/Section/SectionHr';
import SectionTitle from './util/Section/SectionTitle';

const newsData = [
	{
		title: 'More plates, more dates ?',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ab incidunt corrupti quo laboriosam magni dolorem quidem, accusantium blanditiis tempora eos voluptatem possimus exercitationem ex vitae cum.',
		likes: 123,
		comments: 36,
		img: '/static/img/news/date.jpg',
	},
	{
		title: 'How to eat properly',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe id, iste delectus, itaque ipsam aliquid deserunt totam at sapiente numquam voluptate. Incidunt porro, facilis adipisci tempora.',
		likes: 69,
		comments: 3,
		img: '/static/img/news/diet.jpg',
	},
	{
		title: 'Best suplements',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil voluptate ullam reiciendis culpa laborum quisquam sit incidunt, inventore molestiae repellendus est in numquam vitae nesciunt?',
		likes: 222,
		comments: 67,
		img: '/static/img/news/suplements.jpg',
	},
];

const News = () => {
	return (
		<Section classes={['bg-zinc-800']}>
			<div className='relative py-6 px-8'>
				<div className='text-center'>
					<SectionHeading text='Articles' />
					<SectionTitle title='Our Latest News' />
					<HR />
				</div>

				<div>
					{newsData.map((news, index) => (
						<NewsCard key={news.title} data={news} index={index === 1} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default News;
