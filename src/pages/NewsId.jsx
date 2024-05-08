import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import "./css/NewsId.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsId = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/news/"+id);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await res.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  let textParts = data.text.split("<br />")

  console.log(textParts)

  return (
    <>
      <NavBar />
      <section className="news-element-section">
        <div className="news-element-card">
          <img
            src={data.img.src}
            alt={data.img.alt}
          />
          <p className="news-element-date">{data.date}</p>
          <h2 className="news-element-header">
            {data.header}
          </h2>
          <p className="news-element-text">
            {textParts.map((e)=>(
                <>
                    <p>{e}</p>
                    <br/>
                </>
            ))}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsId;
