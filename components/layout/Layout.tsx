import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='bg-green-300 w-full h-full '>
				{children}
			</main>
		</>
	);
};

export default Layout;
