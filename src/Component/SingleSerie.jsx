import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./SingleSerie.css"
// Context
import ShowsContext from "../Context/Shows/ShowsContext";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { Container, Row } from "react-bootstrap";

const SingleSerie = () => {
 const {id} = useParams();
 const {SingleSerie,getSingleSerie} = useContext(ShowsContext);

 useEffect(() => {
  getSingleSerie(id);

    // eslint-disable-next-line
 }, []);
 const removeTags = (text) => {
  if (text === null || text === "") {
    return false;
  } else {
    text = text.toString();
  }
  return text.replace(/(<([^>]+)>)/gi, "");
};
 return (
    <section className="SingleSerie">
      <Header />
      <Container>
        <Row md={2} sm={1} className="my-5">
          <div className="SingleSerie-img">
          <img
            src={
              SingleSerie.image
                ? SingleSerie.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={SingleSerie.name}
          />          </div>
          <div className="SingleSerie-info">
            <div className="m-auto">
              <h1>{SingleSerie.name}</h1>
            </div>
            <div className="h2 d-flex">
              <h2>{`premiered:${SingleSerie.premiered}`}</h2>
              <h2>{`status:${SingleSerie.status}`}</h2>
              <h2>{`language:${SingleSerie.language}`}</h2>
              <h2>{`rating:
              ${SingleSerie.rating
                ?SingleSerie.rating.average
                :"no rating"}`}</h2>
            </div>
            <div className="h3 d-flex">
            {SingleSerie.genres &&
              SingleSerie.genres.map((genre) => (
                <h3 key={genre}>
                  {genre}
                </h3>
              ))}
            </div>
            <h4 className="h4">{SingleSerie.summary && removeTags(SingleSerie.summary)}</h4>
          </div>
        </Row>
      </Container>
      <Footer />
    </section>
 );
};

export default SingleSerie;