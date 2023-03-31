import { HStack } from "@chakra-ui/react";
import { Platform } from "../services/game-service";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

export default function PlatformList({ platforms }: Props) {
  return (
    <HStack marginY="10px">
      {platforms.map(({ id }) => {
        return <PlatformIcon key={id} id={id} />;
      })}
    </HStack>
  );
}
