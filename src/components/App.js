// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const DOG_API = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(DOG_API)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setLoading(true);
      });
  }, []);

  // loading msg
  if (!loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;
