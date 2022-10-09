import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <HeroBanner />
      <Routes>
      <Route path="/"element={ <ItemListContainer geeting="Disfruta tus productos" />} />
      <Route path="/category/:categoryID" element= {<ItemListContainer/>} />
      <Route
        path="/Product/:itemID"
        element={
      <ItemDetailContainer />
       }
      />
      <Route path="*" element={<h4>No es la ruta! Error: 404</h4>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
