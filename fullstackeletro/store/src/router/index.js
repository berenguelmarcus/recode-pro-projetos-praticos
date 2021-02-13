import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Páginas

import Index from "../pages/App";
import ShowcasePage from "../pages/Showcase";
import Contact from "../pages/Contact";
import Adress from "../pages/Adress";

// Componentes

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Index} />
      <Route path="/loja" exact component={ShowcasePage} />
      <Route path="/contato" exact component={Contact} />
      <Route path="/lojas-fisicas" exact component={Adress} />
      <Footer />
    </Router>
  );
}

export default AppRouter;
