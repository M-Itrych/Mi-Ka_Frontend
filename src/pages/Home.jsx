import HomeOfferTile from "../components/forPages/HomeOfferTile";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import home_welcome from "./img/home-welcome.png";
import placeholder from "./img/img-placeholder.png";
import "./css/Home.css";
import NewsTile from "../components/forPages/NewsTile";
import Contact from "../components/global/Contact";
import SliderDostawcy from "../components/forPages/SliderDostawcy";
import { useState, useEffect } from "react";

const Home = () => {
  const [offers, setOffers] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/offers");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setOffers(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchNews = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/news?i=3");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        setNews(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = () => {
      fetchOffers();
      fetchNews();
    };
    fetchData();
  }, []);

  console.log(news)
  return (
    <>
      <NavBar />
      <main className="home-container">
        <section className="home-welcome">
          <div className="home-welcome-left">
            <div className="home-welcome-text">
              <h1>Firma Mi-Ka działa na rynku od 2008 roku.</h1>
              <p>
                Od chwili naszego powstania, firma Mi-Ka z pasją i
                zaangażowaniem zajmuje się kompleksową obsługą w dziedzinie
                systemów grzewczych, serwisu technicznego oraz nadzoru
                budowlanego. Nasza misja to dostarczanie innowacyjnych rozwiązań
                grzewczych, profesjonalnego serwisu oraz kompleksowego wsparcia
                w realizacji projektów budowlanych.
              </p>
            </div>
            <a href="/offer">Poznaj ofertę</a>
          </div>
          <img src={home_welcome} alt="brand-color-pipes"></img>
        </section>
        <section className="home-info">
          <div className="home-info-content">
            <div className="home-info-left">
              <img
                src="https://dokariery.pl/documents/20184/418923/hydraulik_1160.png/dbd256e5-6488-422b-a511-420d8ddb439d?t=1615800068669"
                alt="mika-img-hydraulik"
              />
            </div>
            <div className="home-info-right">
              <h1>
                Twój partner w hydraulice: Profesjonalne rozwiązania dla Twojego
                komfortu!
              </h1>
              <p>
                Z wieloletnim doświadczeniem na rynku, zdobyliśmy zaufanie
                klientów poprzez solidność, wysoką jakość usług oraz terminowe
                wykonanie powierzonych nam zadań. Nasza firma to zespół wysoko
                wykwalifikowanych specjalistów, którzy nieustannie doskonalą
                swoje umiejętności, aby sprostać najwyższym standardom
                branżowym. Nasza firma kieruje się wartościami takimi jak
                profesjonalizm, innowacyjność i uczciwość. Dążymy do ciągłego
                podnoszenia standardów naszych usług, aby sprostać dynamicznym
                wyzwaniom współczesnego rynku. Jesteśmy gotowi na nowe wyzwania,
                gotowi zrealizować nawet najbardziej wymagające projekty.
              </p>
            </div>
          </div>
        </section>
        <section className="home-offers">
          <div className="home-offers-content">
            <div className="home-offers-text">
              <h2>
                Nasza Bogata Oferta - Rozwiązania Dla Kompleksowej Hydrauliki
              </h2>
              <p>
                Odkryj szeroki zakres naszych usług hydrauliki, obejmujący
                instalacje wodno-kanalizacyjne, klimatyzacje, rekuperacje,
                kotłownie gazowe i OZE. Solidność i profesjonalizm.
              </p>
            </div>
            <div className="home-offers-tiles">
              {offers &&
                offers.map((e) => (
                  <HomeOfferTile
                    title={e.heading}
                    text={e.text}
                    href={"/offer/" + e._id}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className="home-news">
          <div className="home-news-header">
            <h2>Aktualności</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis tellus gravida
              habitasse velit mi vitae. Risus varius egestas scelerisque risus.
            </p>
          </div>
          <div className="home-news-tiles">
            {news &&
              news.map((e) => (
                <NewsTile
                  date={e.date}
                  title={e.title}
                  desc={e.desc}
                  href={"/news/"+e._id}
                />
              ))}
          </div>
          <a href="/news">Przejdź do archiwum</a>
        </section>
      </main>
      <SliderDostawcy />
      <Contact bg={true} />
      <Footer />
    </>
  );
};

export default Home;
