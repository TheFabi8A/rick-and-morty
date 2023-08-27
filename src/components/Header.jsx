import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Tabs,
  Tab,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useContext } from "react";
import { CharactersContext } from "../../ApplicationContext";
import { SearchIcon } from "./svg/SearchIcon";

export default function Header() {
  const { setIsAuth } = useContext(CharactersContext);

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
          <Select label="Select a specie">
            <SelectItem value={"alien"}>Alien</SelectItem>
            <SelectItem value={"human"}>Humans</SelectItem>
          </Select>
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
