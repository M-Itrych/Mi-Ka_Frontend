import "./OfferComponent.css";

const OfferTile = ({
  text,
  img,
  heading,
  btn = false,
  reverse = false,
  href = "/",
  bg,
}) => (
  <section
    className="offer-tile-wrapper"
    style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: bg ? "var(--white)" : "transparent",
    }}>
    <div
      className="offer-tile-section"
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <img src={img.src} alt={img.alt} />
      <div className="offer-tile-text">
        <h2>{heading}</h2>
        <p>{text}</p>
        {btn && (
          <a className="offer-btn" href={href}>
            Poznaj ofertę
          </a>
        )}
      </div>
    </div>
  </section>
);

export default OfferTile;
