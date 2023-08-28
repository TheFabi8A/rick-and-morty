import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import FormLogin from "./components/FormLogin";
import { CharactersContext } from "../ApplicationContext";
import Header from "./components/Header";
import { HomePage } from "./components/pages";
import { FavoritesCharactersCards } from "./components/Cards";

export default function Application() {
  const { isAuth } = useContext(CharactersContext);

  return (
    <BrowserRouter>
      {isAuth ? <Header /> : null}
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <FormLogin />} />
        <Route path="/favorites" element={<FavoritesCharactersCards />} />
      </Routes>
    </BrowserRouter>
  );
}
