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
          title="asd"
          desc="asdsa"
          descLink="qweqe"
          backgroundImg={SolarPanels}
          leftBtnLink=""
          leftBtnText=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="asd"
          desc="asdsa"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnLink=""
          leftBtnText=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons="true"
          
        />
        <Item
          title="asd"
          desc="asdsa"
          descLink=""
          backgroundImg={ModelX}
          leftBtnLink=""
          leftBtnText=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons="true"
          
        />
      </div>
    </div>
  );
}

export default App;
