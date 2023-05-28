import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TagRightIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { useState } from "react";

interface Props {
  onSelect: (id: Platform) => void;
  currentPlatform: Platform | null;
}

export default function Platforms({ onSelect, currentPlatform }: Props) {
  const { data: platforms, errors } = usePlatform();

  if (errors.length > 0) return null;

  return (
    <Menu>
      <MenuButton as="button">
        {currentPlatform?.name || "Platforms"}
        <TagRightIcon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelect(platform)}
            value={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
