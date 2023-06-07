import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>React App</title>
      </Helmet>
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
