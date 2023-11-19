type SliderItem = {
	itemData: {
		title: string;
		desc: string;
		url: string;
	};
};

const SliderItem = ({ itemData }: SliderItem) => {
	console.log(itemData);
	return (
		<div
			className='h-full bg-cover bg-center'
			style={{ backgroundImage: `url(${itemData.url})` }}>
			<h2>{itemData.title}</h2>
			<p>{itemData.desc}</p>
		</div>
	);
};

export default SliderItem;
