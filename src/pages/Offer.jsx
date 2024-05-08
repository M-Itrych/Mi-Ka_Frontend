import OfferTile from "../components/forPages/OfferTile";
import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import placeholder from "./img/img-placeholder.png";
import "./css/Offer.css";
import SliderDostwacy from "../components/forPages/SliderDostawcy";
import { useEffect, useState } from "react";

const Offer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/api/offers');
        if (!res.ok) {
          throw new Error('Network response was not ok');
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
      <main className="offer-wrapper">
        <section className="offer-heading">
          <h1>Oferta</h1>
          <p>
            Zanurz się w Naszych Wyjątkowych Ofertach: Pełna Gama Usług dla Sprawności i Bezpieczeństwa Twoich Urządzeń!
          </p>
        </section>
        {data && data.map((e, index) => (
          <OfferTile
            key={index}
            heading={e.heading}
            text={e.text}
            img={{ src: e.img.src, alt: e.img.alt }}
            btn={true}
            bg={index % 2}
            reverse={!(index % 2)}
            href={"/offer/" + e._id}
          />
        ))}
        <section className="offer-contact-footer">
          <div className="offer-contact-wrapper">
            <h1>Skontaktuj się z nami w sprawie uzyskania oferty</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin eu condimentum tristique nibh in. Amet sed eget nisl vitae turpis id donec. Facilisis elit facilisis duis nisi tristique etiam massa. Feugiat.
            </p>
            <a href="/contact" className="offer-contact-btn">Napisz do nas</a>
          </div>
        </section>
      </main>
      <SliderDostwacy />
      <Footer />
    </>
  );
};

export default Offer;
