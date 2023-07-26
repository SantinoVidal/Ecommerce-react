import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

//Configurar el routing:

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
