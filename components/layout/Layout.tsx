import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='bg-green-300 w-full h-full mt-14 md:mt-16 lg:mt-20'>
				{children}
			</main>
		</>
	);
};

export default Layout;
