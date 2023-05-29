import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { parent_platforms, genre } = gameQuery;

  return (
    <Heading as="h1" marginBottom={5} marginLeft={3}>{`${
      parent_platforms?.name || ""
    } ${genre?.name || ""} Games`}</Heading>
  );
}
