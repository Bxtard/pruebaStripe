import React, { useState, useEffect } from "react";
import "./App.css";
import ProductDisplay from "./ProductDisplay";
import Message from "./Message";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return (
    <div className="App">
      {message ? <Message message={message} /> : <ProductDisplay />}
    </div>
  );
}

export default App;
