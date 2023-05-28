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
}

export default function Platforms({ onSelect }: Props) {
  const { data: platforms, errors } = usePlatform();
  const [currentPlatform, setCurrentPlatform] = useState<string>("Platforms");

  if (errors.length > 0) return null;

  const handleClick = (platform: Platform) => {
    setCurrentPlatform(platform.name);
    handleClick(platform);
  };

  return (
    <Menu>
      <MenuButton as="button">
        {currentPlatform}
        <TagRightIcon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleClick(platform)}
            value={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
