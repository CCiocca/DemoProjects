import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import FavouritesPage from "./pages/FavouritesPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:company" element={<CompanyPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
