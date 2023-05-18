import React from "react";

function Card({ content, number, setNumber }) {
  console.log(number);

  const handleBuy = (i) => {
    let productList = [...content];
    productList[i].qty += 1;
    setNumber([...productList]);
    

  };
  return (
    <>
      {content.map((e, i) => (
        <div className="content" key={i}>
          <img src={e.imageUrl} alt="" />
          <div className="name-product">
            <p>{e.name}</p>
            <div>
              <button onClick={() => handleBuy(i)}>Buy</button>
              <p>{e.price} USD</p>
            </div>
            <p>{e.qty}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
