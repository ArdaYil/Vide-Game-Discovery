import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
  height?: string;
  borderRadius?: string;
  children?: string;
}

export default function SearchBar({
  height = "4",
  borderRadius = "full",
  children = "Search...",
}: Props) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Search2Icon height={height} />}
      />
      <Input placeholder={children} borderRadius={borderRadius} />
    </InputGroup>
  );
}
