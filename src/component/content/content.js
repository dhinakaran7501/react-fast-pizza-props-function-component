import React from "react";
import "./content.css";

const Content = ({ pizzaList }) => {
  return (
    <div className="content">
      <div className="products">
        {pizzaList.map(function (values, index, array) {
          if (values.soldOut === false) {
            return (
              <div className="product-list" key={index}>
                <div className="img">
                  <img src={values.imgURL} alt={values.name} />
                </div>
                <div className="product-details">
                  <div className="product-name">
                    <h4>{values.name}</h4>
                  </div>
                  <div className="product-ingredients">
                    <p>Ingredients: {values.ingredients}</p>
                  </div>
                  <div className="product-price">
                    <p>
                      <b>{values.price}</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="product-list-true" key={index}>
                <div className="img">
                  <img src={values.imgURL} alt={values.name} />
                </div>
                <div className="product-details">
                  <div className="product-name-true">
                    <h4>{values.name}</h4>
                  </div>
                  <div className="product-ingredients-true">
                    <p>Ingredients: {values.ingredients}</p>
                  </div>
                  <div className="product-price-true">
                    <p>
                      <b>Sold Out</b>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Content;
