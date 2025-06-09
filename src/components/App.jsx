// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State for the dog image and loading for fetch
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogImage = () => {
    setIsLoading(true); // show loading state while fetching
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update image URL from response
        setIsLoading(false); // Hide loading state
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  };

  // useEffect to fetch the image on initial mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    // I went with inline styles for this small action, trying to practice inline for tailwind
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={dogImage}
          alt="A Random Dog"
          style={{ width: "300px", height: "auto", borderRadius: "8px" }}
        />
      )}
      <br />
      <button
        // trigger the fetch again when button is clicked
        onClick={fetchDogImage}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Fetch New Dog
      </button>
    </div>
  );
}

export default App;
