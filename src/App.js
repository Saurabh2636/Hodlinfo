import React, { useState } from "react";
import Header from "./Component/Header/Header";
import Body from "./Component/Body/Body";
import Table from "./Component/Table/Table";
import Footer from "./Component/Footer/Footer";
import "./App.css";
const App = () => {
  const [check, setcheck] = useState(false);
  return (
    <div className="app">
      <Header setcheck={setcheck} />
      <Body />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
