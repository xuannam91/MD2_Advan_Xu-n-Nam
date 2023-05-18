import React, { useState } from "react";
import Card from "./Card";

function Home() {
  const [contents, setContents] = useState([
    {
      name: "Airpods Pro",
      price: 24900,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      qty: 0,
    },
    {
      name: "Apple Watch",
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 0,
    },
    {
      name: "Macbook Pro",
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 0,
    },
    {
      name: "iPhone 11 pro",
      price: 106600,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 0,
    },
    {
      name: "iPad Pro",
      price: 71900,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 0,
    },
  ]);

  const [number, setNumber] = useState(0);

  return (
    <div className="main">
      <div>
        <i class="fa-solid fa-cart-shopping"></i>
        
      </div>
      <div className="container">
        <Card content={contents} number={number} setNumber={setNumber} />
      </div>
    </div>
  );
}

export default Home;
