import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductSreen from "./screens/ProductSreen"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact  />
          <Route path="/product/:id" component={ProductSreen}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;