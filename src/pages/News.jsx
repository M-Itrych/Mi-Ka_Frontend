import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import NewsTile from "../components/forPages/NewsTile";
import "./css/News.css";
<<<<<<< HEAD
import { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/news");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <section className="news-wrapper">
        <div className="news-header">
          <h2>Aktualności</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Turpis tellus gravida
            habitasse velit mi vitae. Risus varius egestas scelerisque risus.
          </p>
        </div>
        <div className="news-tiles">
          {data &&
            data.map((e) => (
              <NewsTile
                date={e.date}
                title={e.title}
                desc={e.desc}
                href={"/news/" + e._id}
              />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

=======

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

>>>>>>> 31f0f8bcdad5ae2e83968a1db81779b67b16a2b2
export default News;
