import "./App.css";
import ReactGa from "react-ga";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize('G-BT2M4S0YH2')
    ReactGa.pageview('/')
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
