import React, { useState, useEffect, useContext } from "react";
// Context
import Filter from './filter/Filter';
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import ShowsContext from "../../Context/Shows/ShowsContext";
import Pages from "./Pages/Pages";

const Series = ({OnePage , TowPage}) => {
  const showsContext = useContext(ShowsContext);
  const { searchTerm, shows } = showsContext;
  async function fetchData() {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  }
  function getFirst36Cards(data) {
    return data.slice(OnePage,TowPage);
  }
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const data = await fetchData();
      const first36Cards = getFirst36Cards(data);
      setCards(first36Cards);
    }
    fetchCards();
  }, []);
    // filter
    const [filters, setFilters] = useState({genres: "all"});
    const handleFiltersChange = (event) => {
      const { name, value } = event.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    };
    const filterSeries = () => {
      return cards.filter((Series) => {
        const matchSeries = filters.genres === "all" || filters.genres === Series.genres[0]&&[1]&&[2];
      return  matchSeries ;
      });
    };
    const filterSeries2 = () => {
      return shows.filter((Series) => {
        const matchSeries = filters.genres === "all" || filters.genres === Series.show.genres[0]&&[1]&&[2];
      return  matchSeries ;
      });
    };
    // filter end
 return (
    <div>
      <Filter handleFiltersChange={handleFiltersChange} />
      {shows.length >= 1 ? (
        <Row className="m-auto" lg={6} md={4} sm={2}> 
          {filterSeries2().map((card) => (
            <Card key={card.show.id} card={card.show} />
          ))}
        </Row>
      ) : (
        <>
          <Row className="m-auto" lg={6} md={4} sm={2}> 
            {filterSeries().map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </Row>
          <Row className="w-100 mt-5">
            <Pages />
          </Row> 
        </>
      )}
    </div>
  )
}

export default Series