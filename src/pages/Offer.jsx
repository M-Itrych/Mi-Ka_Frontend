import OfferTile from "../components/forPages/OfferTile";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import placeholder from "./img/img-placeholder.png";
import "./css/Offer.css";
import SliderDostwacy from "../components/forPages/SliderDostawcy";

const Offer = () => {
  const OfferArr = [
    {
      id: 1,
      heading: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
      text: "Nasi klienci zasługują na najwyższy standard, dlatego prezentujemy Państwu dwie renomowane marki grzejników - Perfexim i PURMO. Oferując niezawodność, efektywność oraz styl, te produkty są wyborem numer jeden dla tych, którzy oczekują doskonałej jakości.",
      img: {src: "https://rekuperatory-ask.pl/wp-content/uploads/2023/10/mini-poradnik-na-temat-instalacji-wodno-kanalizacyjnej.jpg", alt: "mika-img-wodkan" }
    },
    {
      id: 2,
      heading: "Nowoczesne Klimatyzacje i Rekuperacje",
      text: "Oferujemy klimatyzatory, które łączą niezawodność, efektywność energetyczną i nowoczesny design. Dzięki nim ciesz się doskonałym klimatem w domu lub biurze, minimalizując jednocześnie zużycie energii. Skorzystaj z naszego szerokiego wyboru modeli dostosowanych do Twoich potrzeb.",
      img: {src: "https://d2yvmenv39glx3.cloudfront.net/images/f-148259-klimatyzacja-czy-rekuperacja-co-wybrac.jpg", alt: "mika-img-klimatyzacje" }
    },
    {
      id: 3,
      heading: "Kotłownie Gazowe i OZE",
      text: "Zapewnij sobie i Twojej rodzinie zdrowe i czyste powietrze w każdym pomieszczeniu. Nasza oferta rekuperacji to gwarancja komfortu, oszczędności i dbałości o środowisko. Dzięki nowoczesnym systemom wentylacji z odzyskiem ciepła, Twój dom będzie zawsze wypełniony świeżym, oczyszczonym powietrzem.",
      img: {src: "https://totalcms.wpcdn.pl/articles/7c5760ff4f080da46e5ccebe1bcb501a.jpeg", alt: "mika-img-kotlownie" }
    },
    {
      id: 4,
      heading: "Profesjonalny Serwis Hydrauliczny",
      text: "Profesjonalna opieka nad urządzeniami renomowanych marek: Beretta, Vaillant, Termet. Rutynowe przeglądy, naprawy, konserwacja. Oryginalne części, szybka obsługa. Bezpieczeństwo i sprawność Twojego sprzętu zawsze na pierwszym miejscu.",
      img: {src: "https://kotlygrzejniki.pl/wp-content/uploads/2017/11/hydraulik-warszawa-ursynow.jpg", alt: "mika-img-serwis" }
    },
  ]
  return(
  <>
    <NavBar />
    <main className="offer-wrapper">
      <section className="offer-heading">
        <h1>Oferta</h1>
        <p>
        Zanurz się w Naszych Wyjątkowych Ofertach: Pełna Gama Usług dla Sprawności i Bezpieczeństwa Twoich Urządzeń!
        </p>
      </section>
      { OfferArr.map(e => {
        return(
          <OfferTile
          heading={e.heading}
          text={
            e.text
          }
          img={{ src: e.img.src, alt: e.img.alt }}
          btn={true}
          bg={e.id % 2}
          reverse={!(e.id % 2)}
          href={"/offer/"+e.id}
        />
        )
      }
      )}
    <section className="offer-contact-footer">
      <div className="offer-contact-wrapper">
		<h1>Skontaktuj się z nami w sprawie uzyskania oferty</h1>
		<p>
		  Lorem ipsum dolor sit amet consectetur. Sollicitudin eu condimentum
		  tristique nibh in. Amet sed eget nisl vitae turpis id donec. Facilisis
		  elit facilisis duis nisi tristique etiam massa. Feugiat.
		</p>
	  	<a href="/contact" className="offer-contact-btn">Napisz do nas</a>
	  </div>
    </section>
    </main>
    <SliderDostwacy />
    <Footer />
  </>
)};

export default Offer;
