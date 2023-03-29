import { HStack, Switch } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  onChange: () => void;
  children?: ReactNode;
}

export default function ToggleSwitch({ onChange, children }: Props) {
  const [isChecked, setIsCheck] = useState(true);

  const handleSwitch = () => {
    setIsCheck(!isChecked);
    onChange();
  };

  return (
    <HStack>
      <Switch
        isChecked={isChecked}
        onChange={handleSwitch}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">{children}</Text>
    </HStack>
  );
}
