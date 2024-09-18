import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousal.css";
import Spinner from "./Spinner";

const Carousal = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setData(data.slice(0, 5));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) return <Spinner className="spineerr" />;

  return (
    <Carousel
      key={data.length}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      transitionTime={500}
      stopOnHover={true}
      swipeable={true}
      className="car-main"
    >
      {data.map((pro, i) => {
        return (
          <div className="car-container" key={i}>
            <div className="img-container">
              <img
                className="img-size"
                src={pro.image}
                alt={pro.title || `Slide ${i + 1}`}
              />
            </div>
            <div className="right-side">
              <h1>{pro.title} </h1>
              <span className="cate">{pro.category.toUpperCase()}</span>
              <p className="des">{pro.description || `Slide ${i + 1}`}</p>
              <div className="price-rating">
                <span className="price">PRICE : ${pro.price}</span>
                <span className="price">RATING : {pro.rating.rate}⭐</span>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carousal;
