import { useParams } from "react-router-dom";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import ImgText from "../components/forPages/ImgText";
import "./css/OfferId.css";
import { useEffect, useState } from "react";

const OfferId = () => {
  const [data, setData] = useState();
  
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/api/ofers/'+id);
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
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  let textParts = data.text.split("<br />")
  
  return (
    <>
      <NavBar />
      <section className="offerPage-wrapper">
        <div className="offerPage-header">
          <img src={data.headerimg.src} alt={data.headerimg.alt} />
          <h1 className="">{data.title}</h1>
          {textParts.map((tpart, i) => (
            <p key={i} className="offerPage-text">{tpart}</p>
          ))}
          
        </div>
        {data.additions && (
          <div className="offerPage-additions">
            {data.additions.map((e, i) => {
              if (e.type === "img-text"){
                return (
                <ImgText
                  title={e.title}
                  text={e.text}
                  img={e.img}
                  reverse={!(i % 2)}
                />
              )} else return;
            })}
          </div>
        )}
        <div
          className="offerPage-contact"
          style={{ backgroundColor: !data.additions && "#FFF" }}
        >
          <h2>
            Skontaktuj się z <br /> nami w sprawie uzyskania oferty
          </h2>
          <p>
            Skontaktuj się z nami, abyśmy mogli przygotować dla Ciebie
            indywidualną ofertę. Jesteśmy dostępni przez telefon, e-mail lub
            osobiście, gotowi odpowiedzieć na Twoje pytania i omówić szczegóły.
          </p>
          <a href="/contact">Napisz do nas</a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OfferId;
