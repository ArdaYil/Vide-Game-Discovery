import { HStack, Image } from "@chakra-ui/react";
import ToggleSwitch from "./ToggleSwitch";
import logo from "../../public/images/logo.webp";
import SearchBar from "./SearchBar";

interface Props {
  onToggleMode: () => void;
}

export default function Nav({ onToggleMode }: Props) {
  return (
    <HStack padding="2">
      <Image boxSize="60px" src={logo} />
      <SearchBar>Search Games...</SearchBar>
      <ToggleSwitch onChange={onToggleMode}>Dark Mode</ToggleSwitch>
    </HStack>
  );
}
