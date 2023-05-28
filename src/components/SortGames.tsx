import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TagRightIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelect: (gameSort: SortOrder) => void;
  currentSortOrder: SortOrder | null;
}

export interface SortOrder {
  value: string;
  label: string;
}

export default function SortGames({ onSelect, currentSortOrder }: Props) {
  const sortOrders: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button}>
        Order by: {currentSortOrder?.label || sortOrders[0].label}
        <TagRightIcon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem onClick={() => onSelect(sortOrder)}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
