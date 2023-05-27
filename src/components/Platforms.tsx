import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TagRightIcon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelect: (id: number) => void;
}

export default function Platforms({ onSelect }: Props) {
  const { data: platforms, errors } = usePlatform();

  if (errors.length > 0) return null;

  return (
    <Menu>
      <MenuButton as="button">
        Platforms
        <TagRightIcon as={BsChevronDown} />
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelect(platform.id)}
            value={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
