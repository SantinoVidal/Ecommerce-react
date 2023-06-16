import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Item from "./components/pages/itemList/Item";

function App() {
  return (
    <>
      <Navbar />
      <Item greeting={"Welcome to Majestic"} />
      <Home />
    </>
  );
}

export default App;
