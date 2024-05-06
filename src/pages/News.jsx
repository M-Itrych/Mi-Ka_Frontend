import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import NewsTile from "../components/forPages/NewsTile";
import "./css/News.css";

const News = () => {
	const news = [
		{
			id: "1",
			date: "28 kwietnia 2024",
			title: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
			desc: "Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!",
		},
		{
			id: "2",
			date: "28 kwietnia 2024",
			title: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
			desc: "Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!",
		},
		{
			id: "3",
			date: "28 kwietnia 2024",
			title: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
			desc: "Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!",
		},
		{
			id: "4",
			date: "28 kwietnia 2024",
			title: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
			desc: "Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!",
		},
	];
	return (
		<>
			<NavBar />
			<section className='news-wrapper'>
				<div className='news-header'>
					<h2>Aktualności</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Turpis tellus
						gravida habitasse velit mi vitae. Risus varius egestas
						scelerisque risus.
					</p>
				</div>
				<div className='news-tiles'>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
					<NewsTile
						date='28 kwietnia 2024'
						title='Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych'
						desc='Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!'
						href='/news'
					/>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default News;
