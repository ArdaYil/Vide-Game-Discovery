import { Box, HStack } from "@chakra-ui/react";
import { BsBox2Fill } from "react-icons/bs";
import { Platform } from "../services/game-service";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

export default function PlatformList({ platforms }: Props) {
  return (
    <Box marginY="10px" display="flex" flexWrap="wrap" gap="5px 10px">
      {platforms.map(({ id }) => {
        return <PlatformIcon key={id} id={id} />;
      })}
    </Box>
  );
}
