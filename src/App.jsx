import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemContainer from "./components/pages/itemList/ItemContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Error from "./components/pages/error/Error";

//Configurar el routing:

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Ruta principal: */}
          <Route path="/" element={<ItemContainer />} />

          {/* Rutas personalizadas: */}
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/category/:categoryName" element={<ItemContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/aboutUs" element={<h1>About us</h1>} />
        </Route>

        {/* Ruta por defecto cuando no existe: */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
