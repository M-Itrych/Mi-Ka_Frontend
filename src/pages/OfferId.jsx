import { useParams } from "react-router-dom";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import ImgText from "../components/forPages/ImgText";
import "./css/OfferId.css";

const OfferId = () => {
  const { id } = useParams();
  let OfferDB = [
    {
      title: "Nowoczesne rozwiązania w instalacjach wodno-kanalizacyjnych",
      text: `Firma Mi-Ka to lider na rynku instalacji wodno-kanalizacyjnych, skupiający się na dostarczani
      najwyższej jakości rozwiązań dla swoich klientów. Naszym celem jest zapewnienie nie tylko
      funkcjonalności, ale także estetyki i efektywności w dziedzinie systemów grzewczych. Dlatego z dumą
      prezentujemy Państwu dwie renomowane marki grzejników - Perfexim i PURMO.`,
      headerimg: {
        src: "https://rekuperatory-ask.pl/wp-content/uploads/2023/10/mini-poradnik-na-temat-instalacji-wodno-kanalizacyjnej.jpg",
        alt: "mika-img-wodkan",
      },
      additions: [
        {
          type: "img-text",
          title: "Grzejniki Perfexim",
          text: `Grzejniki Perfexim to synonim niezawodności i trwałości. Zaprojektowane z myślą o spełnieniu najwyższych standardów, gwarantują komfort cieplny przez wiele lat. Doskonała jakość materiałów, z których są wykonane, oraz precyzyjne wykonanie sprawiają, że grzejniki Perfexim są nie tylko efektywne, ale także odporne na wszelkie warunki eksploatacyjne. To idealne rozwiązanie dla tych, którzy oczekują solidności i niezawodności w każdych warunkach.`,
          img: {
            src: "https://www.marlin.com.pl/images/makers/perfexim.png",
            alt: "mika-logo-perfexim",
          },
        },
        {
          type: "img-text",
          title: "Grzejniki Purmo",
          text: `Grzejniki Purmo to kwintesencja niezawodności i trwałości. Stworzone z myślą o osiągnięciu najwyższych standardów, zapewniają komfort cieplny na długie lata. Wykonane z doskonałej jakości materiałów oraz precyzyjnie wykonane, są nie tylko efektywne, ale także odporne na wszelkie warunki eksploatacyjne. To doskonałe rozwiązanie dla tych, którzy cenią solidność i niezawodność w każdych warunkach.`,
          img: {
            src: "https://instalsoft.com/wp-content/uploads/2018/08/Purmo-1.png",
            alt: "mika-logo-purmo",
          },
        },
      ],
    },
    {
      title: "Nowoczesne Klimatyzacje i Rekuperacje",
      text: `Mi-Ka to renomowana firma, która specjalizuje się w dostarczaniu kompleksowych rozwiązań z zakresu nowoczesnych systemów klimatyzacji i rekuperacji. Nasza oferta opiera się na najnowszych technologiach, które są indywidualnie dostosowywane do unikalnych potrzeb każdego klienta. Dążymy do zapewnienia optymalnego komfortu termicznego oraz doskonałej jakości powietrza wewnątrz pomieszczeń przez cały rok.<br />
      Nasz zespół specjalistów dba o to, aby każda instalacja była wykonana profesjonalnie, zapewniając naszym klientom nie tylko efektywne działanie systemów, ale także ich trwałość i niezawodność. Po zakończeniu montażu oferujemy kompleksowy serwis posprzedażowy oraz wsparcie techniczne, aby zapewnić naszym klientom spokój i pewność, że ich systemy działają zawsze sprawnie i zgodnie z oczekiwaniami.<br />
      Dzięki naszemu zaangażowaniu w innowacje i ciągłe doskonalenie naszych usług, Mi-Ka stała się niekwestionowanym liderem w branży, cieszącym się zaufaniem klientów na całym świecie.`,
      headerimg: {
        src: "https://d2yvmenv39glx3.cloudfront.net/images/f-148259-klimatyzacja-czy-rekuperacja-co-wybrac.jpg",
        alt: "mika-img-klimatyzacje",
      },
      additions: "",
    },
    {
      title: "Kotłownie Gazowe i OZE",
      text: `Mi-Ka to firma, która dedykuje się dostarczaniu kompleksowych rozwiązań z zakresu efektywnego wykorzystania energii, skupiając się na kotłowniach gazowych oraz systemach opartych na odnawialnych źródłach energii (OZE). Nasza firma oferuje szeroki wachlarz usług, które umożliwiają naszym klientom osiągnięcie znaczących oszczędności energetycznych, przy jednoczesnym dbaniu o środowisko naturalne.<br />
      W Mi-Ka wdrażamy innowacyjne technologie, które pozwalają na efektywne wykorzystanie dostępnych zasobów energetycznych. Dzięki naszym rozwiązaniom, klienci mogą cieszyć się zwiększoną efektywnością energetyczną oraz redukcją emisji szkodliwych substancji do atmosfery.<br />
      Nasi wysoko wykwalifikowani specjaliści zapewniają kompleksową obsługę na każdym etapie projektu - od konsultacji i doradztwa, poprzez projektowanie i montaż, aż po regularny serwis posprzedażowy. Nasze rozwiązania są idealnie dopasowane do potrzeb i oczekiwań klientów, dzięki czemu jesteśmy partnerem godnym zaufania w zakresie oszczędności energetycznych i dbałości o środowisko.<br />
      Misją Mi-Ka jest nie tylko dostarczanie nowoczesnych rozwiązań, ale także wspieranie klientów w realizacji ich celów związanych z zrównoważonym rozwojem i ochroną środowiska naturalnego. Dzięki naszemu zaangażowaniu i profesjonalizmowi, staliśmy się liderem w branży, zdobywając zaufanie klientów na całym świecie.`,
      headerimg: {src: "https://totalcms.wpcdn.pl/articles/7c5760ff4f080da46e5ccebe1bcb501a.jpeg", alt: "mika-img-kotlownie" },
      additions: "",
    },
    {
      title: "Profesjonalny Serwis Hydrauliczny",
      text: `Mi-Ka to firma, która świadczy profesjonalne usługi z zakresu serwisu hydraulicznego, zapewniając kompleksowe rozwiązania dla klientów z różnych branż. Nasza firma oferuje szeroki zakres usług, obejmujących zarówno naprawy, konserwacje, jak i kompleksowe instalacje systemów hydraulicznych, dostosowane do indywidualnych potrzeb każdego klienta.<br />
      W Mi-Ka zdajemy sobie sprawę z istotności prawidłowego funkcjonowania systemów hydraulicznych dla działalności wielu firm i instytucji. Dlatego nasz zespół wysoko wykwalifikowanych specjalistów jest gotowy sprostać wszelkim wyzwaniom, zapewniając szybką i skuteczną interwencję w przypadku awarii oraz regularne przeglądy, aby zapobiegać ewentualnym problemom.<br />
      Nasze usługi serwisowe obejmują m.in.: naprawy i wymiany uszkodzonych elementów, czyszczenie i konserwację instalacji, diagnostykę awaryjną, a także modernizacje systemów hydraulicznych. Wszystkie działania przeprowadzane są z najwyższą starannością i zgodnie z obowiązującymi normami bezpieczeństwa.<br />
      Jako firma Mi-Ka, dążymy do zapewnienia naszym klientom pełnej satysfakcji oraz gwarancji bezpieczeństwa i niezawodności działania ich systemów hydraulicznych. Naszym celem jest być partnerem, na którym można polegać w każdej sytuacji, zapewniając kompleksowy serwis hydrauliczny o najwyższej jakości.`,
      headerimg: {src: "https://kotlygrzejniki.pl/wp-content/uploads/2017/11/hydraulik-warszawa-ursynow.jpg", alt: "mika-img-serwis" },
      additions: "",
    },
  ];
  OfferDB = OfferDB[id - 1];
  const textParts = OfferDB.text.split('<br />');
  return (
    <>
      <NavBar />
      <section className="offerPage-wrapper">
        <div className="offerPage-header">
          <img src={OfferDB.headerimg.src} alt={OfferDB.headerimg.alt} />
          <h1 className="">{OfferDB.title}</h1>
          {textParts.map((tpart, i) => (
            <p key={i} className="offerPage-text">{tpart}</p>
          ))}
        </div>
        {OfferDB.additions && (
          <div className="offerPage-additions">
            {OfferDB.additions.map((e, i) => {
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
          style={{ backgroundColor: !OfferDB.additions && "#FFF" }}
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
