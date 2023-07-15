import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HeaderFooter from "./components/HeaderFooter";
import Index from "./components/Index";
import Catalog from "./features/catalog/Catalog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  element={<HeaderFooter />}>
        <Route path="/" index element={<Index/>}/>
        <Route path="catalog" element={<Catalog/>}/>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
