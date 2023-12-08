import "./App.css";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";

function App() {
  const pizzaList = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      imgURL: "./images/i1.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      imgURL: "./images/i2.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      imgURL: "./images/i3.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      imgURL: "./images/i4.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      imgURL: "./images/i5.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      imgURL: "./images/i6.jpg",
      soldOut: false,
    },
  ];
  return (
    <div className="container">
      <Header shopName={"Fast React Pizza Co."} menuTitle={"Our Menu"} />
      <Content pizzaList={pizzaList} />
      <Footer />
    </div>
  );
}

export default App;
