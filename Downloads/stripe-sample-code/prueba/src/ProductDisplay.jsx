import React from "react";
import response from "./services";

const ProductDisplay = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    response();
  };
  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
};

export default ProductDisplay;
