import { Badge } from "@chakra-ui/react";

interface Props {
  children: number;
}

const colors = {
  red: 0,
  yellow: 40,
  green: 80,
};

export default function CriticScore({ children }: Props) {
  const getColor = () => {
    if (children < colors.yellow) return "red";
    if (children < colors.green) return "yellow";

    return "green";
  };

  return (
    <Badge
      borderRadius="3px"
      padding="1px 8px"
      colorScheme={getColor()}
      variant="subtle"
    >
      {children}
    </Badge>
  );
}
