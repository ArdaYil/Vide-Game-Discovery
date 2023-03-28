import { Switch } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onChange: () => void;
}

export default function ToggleSwitch({ onChange }: Props) {
  const [isChecked, setIsCheck] = useState(true);

  const handleSwitch = () => {
    setIsCheck(!isChecked);
    onChange();
  };

  return (
    <Switch isChecked={isChecked} onChange={handleSwitch} colorScheme="green" />
  );
}
