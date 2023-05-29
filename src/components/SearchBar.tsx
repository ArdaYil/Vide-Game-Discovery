import { Search2Icon } from "@chakra-ui/icons";
import {
  ComponentWithAs,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

interface Props {
  height?: string;
  borderRadius?: string;
  children?: string;
  onSearch: (value: string | undefined) => void;
}

export default function SearchBar({
  height = "4",
  borderRadius = "full",
  children = "Search...",
  onSearch,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSearch(ref.current?.value);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon height={height} />}
        />
        <Input ref={ref} placeholder={children} borderRadius={borderRadius} />
      </InputGroup>
    </form>
  );
}
