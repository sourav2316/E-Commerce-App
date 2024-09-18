import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

const CardItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="cards-container">
          {Array(20)
            .fill()
            .map((_, index) => (
              <Skeleton key={index} />
            ))}
        </div>
      ) : (
        <div className="cards-container">
          {data.map((pro, i) => {
            return <Card key={i} pro={pro} />;
          })}
        </div>
      )}
    </>
  );
};

export default CardItems;
