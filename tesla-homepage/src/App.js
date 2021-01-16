import "./App.css";
import Header from "./components/Header";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Best electronic cars in the world"
          desc="Money-back guarantee"
          descLink="qweqe"
          backgroundImg={SolarPanels}
          leftBtnLink="sd"
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink="gg"
          twoButtons="true"
          first
        />
        <Item
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnLink=""
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X "
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnLink=""
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnLink=""
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar Battery for New Roofs"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnLink=""
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Accessories}
          leftBtnLink=""
          leftBtnText="Learn More"
          rightBtnText="Order Now"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
