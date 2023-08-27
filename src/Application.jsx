import { BrowserRouter, Routes, Route } from "react-router-dom";

import FavoritesCharactersCards from "./components/FavoritesCharactersCards";

import { useContext } from "react";
import FormLogin from "./components/FormLogin";
import { CharactersContext } from "../ApplicationContext";
import HomePage from "./components/pages/HomePage";
import Header from "./components/Header";

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
