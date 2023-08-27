import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
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
import { useContext } from "react";
import { CharactersContext } from "../../ApplicationContext";
import { SearchIcon } from "./svg/SearchIcon";
import { SelectorIcon } from "./svg/SelectorIcon";

export default function Header() {
  const { setIsAuth, filtroSpecie, setFiltroSpecie } =
    useContext(CharactersContext);

  return (
    <header>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Rick & Morty</p>
        </NavbarBrand>
        <NavbarContent className="flex gap-4 items-center" justify="center">
          <Input
            classNames={{
              base: "h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button endContent={<SelectorIcon />}>{filtroSpecie}</Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Desplegar filtro de especies"
              selectionMode="single"
              disallowEmptySelection
              defaultSelectedKeys={"All"}>
              <DropdownItem onPress={() => setFiltroSpecie("All")} key="All">
                All
              </DropdownItem>
              <DropdownItem
                onPress={() => setFiltroSpecie("Human")}
                key="Human">
                Human
              </DropdownItem>
              <DropdownItem
                onPress={() => setFiltroSpecie("Alien")}
                key="Alien">
                Alien
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Tabs
            aria-label="pages"
            size="lg
            ">
            <Tab key={"Dashboard"} title="Dashboard" as={Link} to={"/"} />
            <Tab
              key={"Favorites"}
              title="Favorites"
              as={Link}
              to={"/favorites"}
            />
          </Tabs>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link
              className="rounded-md bg-pink-600 text-white py-2 px-4 font-bold"
              to={"/"}
              color="primary"
              variant="flat"
              onClick={() => setIsAuth(false)}>
              Sign off
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
