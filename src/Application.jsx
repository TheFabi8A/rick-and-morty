import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import FormLogin from "./components/Form/FormLogin";
import { CharactersContext } from "@application-context";
import { FavoritesPage, HomePage } from "./Pages";
import Header from "./components/Header/Header";

export default function Application() {
  const { isAuth } = useContext(CharactersContext);

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <FormLogin />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
