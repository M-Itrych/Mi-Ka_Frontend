import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import NewsTile from "../components/forPages/NewsTile";
import "./css/News.css";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/news");

        if (!response.data) {
          throw new Error("No data received");
        }

        setData(response.data);
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
export default News;
