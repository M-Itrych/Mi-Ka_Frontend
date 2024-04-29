import HomeOfferTile from "../components/forPages/HomeOfferTile";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import home_welcome from "./img/home-welcome.png";
import placeholder from "./img/img-placeholder.png";
import "./css/Home.css";
import NewsTile from "../components/forPages/NewsTile";
import Contact from "../components/global/Contact";

const Home = () => (
  <>
    <NavBar />
    <main className="home-container">
      <section className="home-welcome">
        <div className="home-welcome-left">
          <div className="home-welcome-text">
            <h1>Firma Mi-Ka działa na rynku od 2008 roku.</h1>
            <p>
              Od chwili naszego powstania, firma Mi-Ka z pasją i zaangażowaniem
              zajmuje się kompleksową obsługą w dziedzinie systemów grzewczych,
              serwisu technicznego oraz nadzoru budowlanego. Nasza misja to
              dostarczanie innowacyjnych rozwiązań grzewczych, profesjonalnego
              serwisu oraz kompleksowego wsparcia w realizacji projektów
              budowlanych.
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
              wykwalifikowanych specjalistów, którzy nieustannie doskonalą swoje
              umiejętności, aby sprostać najwyższym standardom branżowym. Nasza
              firma kieruje się wartościami takimi jak profesjonalizm,
              innowacyjność i uczciwość. Dążymy do ciągłego podnoszenia
              standardów naszych usług, aby sprostać dynamicznym wyzwaniom
              współczesnego rynku. Jesteśmy gotowi na nowe wyzwania, gotowi
              zrealizować nawet najbardziej wymagające projekty.
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
            <HomeOfferTile
              title="Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych"
              text="Zadbaj o efektywne i bezpieczne instalacje wodno-kanalizacyjne w swoim domu lub firmie. Oferujemy kompleksowe rozwiązania dostosowane do Twoich potrzeb!"
              href="/offer/1"
            />
            <HomeOfferTile
              title="Nowoczesne Klimatyzacje i Rekuperacje"
              text="Zapewnij sobie komfort termiczny i czyste powietrze w pomieszczeniach. Nasze rozwiązania klimatyzacyjne i rekuperacyjne są energooszczędne i dostosowane do każdego wnętrza."
              href="/offer/2"
            />
            <HomeOfferTile
              title="Kotłownie Gazowe i OZE - Oszczędność Energii"
              text="Inwestuj w przyjazne środowisku i efektywne rozwiązania ogrzewania. Nasze kotłownie gazowe oparte na OZE to gwarancja oszczędności i komfortu w Twoim domu lub firmie."
              href="/offer/3"
            />
            <HomeOfferTile
              title="Profesjonalny Serwis Hydrauliki"
              text="Zaufaj naszemu doświadczonemu zespołowi w dziedzinie hydrauliki. Oferujemy kompleksowy serwis oraz naprawy instalacji wodno-kanalizacyjnych, klimatyzacji i kotłowni gazowych, zapewniając Ci spokój i bezpieczeństwo."
              href="/offer/4"
            />
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
          <NewsTile
            date="28 kwietnia 2024"
            title="Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych"
            desc="Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!"
            href="/news"
          />
          <NewsTile
            date="28 kwietnia 2024"
            title="Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych"
            desc="Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!"
            href="/news"
          />
          <NewsTile
            date="28 kwietnia 2024"
            title="Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych"
            desc="Odkryj innowacyjne rozwiązania dla efektywnych instalacji wodno-kanalizacyjnych!"
            href="/news"
          />
        </div>
        <a href="/news">Przejdź do archiwum</a>
      </section>
    </main>
    <Contact bg={true} />
    <Footer />
  </>
);

export default Home;
