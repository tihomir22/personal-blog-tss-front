import React from "react";
import LandingPage from "./components/LadingPage.tsx";

function App() {
  return (
    <div>
      <MetaTags>
        <meta
          name="description"
          content="Tihomir Stoychev Stoychev. Romper lo irrompible. Evitar lo inevitable. Romper las reglas sin quebrantar la ley.
Me defino como una persona trabajadora, apasionada, positiva y firme."
        />
      </MetaTags>
      <LandingPage />
    </div>
  );
}

export default App;
