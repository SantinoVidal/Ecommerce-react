import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ItemContainer from "../components/pages/itemList/ItemContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import CartContextComponent from "../context/CartContext";
import Error from "../components/pages/error/Error";
import Dashboard from "../components/pages/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <div>
      <CartContextComponent>
        <Routes>
          <Route element={<Layout />}>
            {/* Ruta principal: */}
            <Route path="/" element={<ItemContainer />} />

            {/* Rutas personalizadas: */}
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/category/:categoryName" element={<ItemContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Ruta por defecto cuando no existe: */}
          <Route path="*" element={<Error />} />
        </Routes>
      </CartContextComponent>
    </div>
  );
};

export default AppRoutes;
