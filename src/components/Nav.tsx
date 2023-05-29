import { HStack, Image } from "@chakra-ui/react";
import ToggleSwitch from "./ToggleSwitch";
import logo from "../../public/images/logo.webp";
import SearchBar from "./SearchBar";

interface Props {
  onToggleMode: () => void;
  onSearch: (search: string | undefined) => void;
}

export default function Nav({ onToggleMode, onSearch }: Props) {
  return (
    <HStack padding="2">
      <Image boxSize="60px" src={logo} />
      <SearchBar onSearch={(search: string | undefined) => onSearch(search)}>
        Search Games...
      </SearchBar>
      <ToggleSwitch onChange={onToggleMode}>Dark Mode</ToggleSwitch>
    </HStack>
  );
}
