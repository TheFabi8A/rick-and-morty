export { default as Header } from "./Header";

import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CharactersContext } from "@application-context";

export default function Index() {
  const { setSearchQuery } = useContext(CharactersContext);

  const location = useLocation();
  const isFavoritesRoute = location.pathname === "/favorites";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return {
    isFavoritesRoute,
    isMenuOpen,
    setIsMenuOpen,
    handleSearchChange,
  };
}
