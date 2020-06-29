import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>;
      <img src={picture} />
    </div>
  );
}

const foodLIke = [
  {
    name: "space",
    image:
      "https://earthsky.org/upl/2020/01/Tarantula-Nebula-infrared-3-wavelengths-Spitzer-Jan-27-2020-800x450.jpg",
  },
];

function App() {
  return (
    <div>
      {foodLIke.map((cur) => (
        <Food name={cur.name} picture={cur.image} />
      ))}
    </div>
  );
}

export default App;
