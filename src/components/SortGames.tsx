import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TagRightIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortGames() {
  return (
    <Menu>
      <MenuButton as={Button}>
        Order by: Relevance
        <TagRightIcon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
