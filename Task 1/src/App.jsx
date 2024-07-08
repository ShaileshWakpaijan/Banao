import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" w-full font-[Poppins]">
      <Navbar />
      <Home />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
};

export default App;
