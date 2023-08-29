import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Input,
  Tabs,
  Tab,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

import { SelectorIcon, LogOutIcon, SearchIcon } from "./svg";

import { CharactersContext } from "@application-context";

export default function Header() {
  const location = useLocation();

  const isFavoritesRoute = location.pathname === "/favorites";

  const {
    setIsAuth,
    speciesFilter,
    setSpeciesFilter,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
  } = useContext(CharactersContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Rick & Morty</p>
        </NavbarBrand>
        <NavbarContent className="flex gap-4 items-center" justify="center">
          <NavbarItem>
            <Tabs
              aria-label="pages"
              size="lg"
              defaultSelectedKey={["galery"]}
              selectedKey={isFavoritesRoute ? "favorites" : "galery"}>
              <Tab key={"galery"} title="Galería" as={Link} to={"/"} />
              <Tab
                key={"favorites"}
                title="Favoritos"
                as={Link}
                to={"/favorites"}
              />
            </Tabs>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex gap-4">
            <Input
              value={searchQuery}
              variant="bordered"
              color="secondary"
              isDisabled={isFavoritesRoute}
              onChange={handleSearchChange}
              onClear={() => setSearchQuery("")}
              isClearable={false}
              radius="lg"
              placeholder="Escribe para buscar..."
              startContent={
                <SearchIcon className="text-purple-500 pointer-events-none flex-shrink-0 w-5" />
              }
            />
            <Dropdown>
              <DropdownTrigger isDisabled={isFavoritesRoute}>
                <Button
                  color="secondary"
                  endContent={<SelectorIcon />}>{`Especie: ${
                  speciesFilter === "All"
                    ? "Todas"
                    : speciesFilter === "Human"
                    ? "Humano"
                    : speciesFilter === "Alien"
                    ? "Alien"
                    : null
                }`}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Desplegar filtro de especies"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={speciesFilter}
                defaultSelectedKeys={"All"}>
                <DropdownItem onPress={() => setSpeciesFilter("All")} key="All">
                  Todas
                </DropdownItem>
                <DropdownItem
                  onPress={() => setSpeciesFilter("Human")}
                  key="Human">
                  Humano
                </DropdownItem>
                <DropdownItem
                  onPress={() => setSpeciesFilter("Alien")}
                  key="Alien">
                  Alien
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger isDisabled={isFavoritesRoute}>
                <Button
                  color="secondary"
                  endContent={<SelectorIcon />}>{`Estado: ${
                  statusFilter === "All"
                    ? "Todos"
                    : statusFilter === "Alive"
                    ? "Vivo"
                    : statusFilter === "Dead"
                    ? "Muerto"
                    : statusFilter === "unknown"
                    ? "Desconocido"
                    : null
                }`}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Desplegar filtro de status"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={statusFilter}
                defaultSelectedKeys={"All"}>
                <DropdownItem onPress={() => setStatusFilter("All")} key="All">
                  Todas
                </DropdownItem>
                <DropdownItem
                  onPress={() => setStatusFilter("Alive")}
                  key="Alive">
                  Vivo
                </DropdownItem>
                <DropdownItem
                  onPress={() => setStatusFilter("Dead")}
                  key="Dead">
                  Muerto
                </DropdownItem>
                <DropdownItem
                  onPress={() => setStatusFilter("unknown")}
                  key="unknown">
                  Desconocido
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex">
          <NavbarItem>
            <Button
              as={Link}
              className="rounded-md p-1"
              to={"/"}
              color="secondary"
              variant="bordered"
              isIconOnly
              onClick={() => setIsAuth(false)}>
              <LogOutIcon className="text-secondary" />
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="md:hidden"></NavbarContent>
        <NavbarMenu>
          <div className="flex items-center justify-between gap-4">
            <NavbarMenuItem className="max-w-[250px] w-full">
              <Input
                value={searchQuery}
                variant="bordered"
                color="secondary"
                isDisabled={isFavoritesRoute}
                onChange={handleSearchChange}
                onClear={() => setSearchQuery("")}
                isClearable
                radius="lg"
                placeholder="Escribe para buscar..."
                startContent={
                  <SearchIcon className="text-purple-500 pointer-events-none flex-shrink-0 w-5" />
                }
              />
            </NavbarMenuItem>
            <NavbarMenuItem className="md:hidden">
              <Button
                as={Link}
                className="rounded-md p-1"
                to={"/"}
                color="secondary"
                variant="bordered"
                isIconOnly
                onClick={() => setIsAuth(false)}>
                <LogOutIcon className="text-secondary" />
              </Button>
            </NavbarMenuItem>
          </div>
          <div className="flex items-center gap-4 justify-between max-w-[250px]">
            <NavbarMenuItem>
              <Dropdown>
                <DropdownTrigger isDisabled={isFavoritesRoute}>
                  <Button
                    color="secondary"
                    endContent={<SelectorIcon />}>{`Especie: ${
                    speciesFilter === "All"
                      ? "Todas"
                      : speciesFilter === "Human"
                      ? "Humano"
                      : speciesFilter === "Alien"
                      ? "Alien"
                      : null
                  }`}</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Desplegar filtro de especies"
                  selectionMode="single"
                  disallowEmptySelection
                  selectedKeys={speciesFilter}
                  defaultSelectedKeys={"All"}>
                  <DropdownItem
                    onPress={() => setSpeciesFilter("All")}
                    key="All">
                    Todas
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => setSpeciesFilter("Human")}
                    key="Human">
                    Humano
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => setSpeciesFilter("Alien")}
                    key="Alien">
                    Alien
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Dropdown>
                <DropdownTrigger isDisabled={isFavoritesRoute}>
                  <Button
                    color="secondary"
                    endContent={<SelectorIcon />}>{`Estado: ${
                    statusFilter === "All"
                      ? "Todos"
                      : statusFilter === "Alive"
                      ? "Vivo"
                      : statusFilter === "Dead"
                      ? "Muerto"
                      : statusFilter === "unknown"
                      ? "Desconocido"
                      : null
                  }`}</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Desplegar filtro de status"
                  selectionMode="single"
                  disallowEmptySelection
                  selectedKeys={statusFilter}
                  defaultSelectedKeys={"All"}>
                  <DropdownItem
                    onPress={() => setStatusFilter("All")}
                    key="All">
                    Todos
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => setStatusFilter("Alive")}
                    key="Alive">
                    Vivo
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => setStatusFilter("Dead")}
                    key="Dead">
                    Muerto
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => setStatusFilter("unknown")}
                    key="unknown">
                    Desconocido
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
