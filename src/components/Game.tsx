import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIcon from "./PlatformIcon";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

export default function GameItem({ game }: Props) {
  return (
    <div>
      <Box
        height="420px"
        width="100%"
        borderRadius="10px"
        backgroundColor="gray.700"
      >
        <Image
          objectFit="cover"
          borderTopRadius="10px"
          height="70%"
          width="100%"
          src={game.background_image}
        />
        <Box padding="20px">
          <Text fontWeight="700" fontSize="x-large">
            {game.name}
          </Text>
          <PlatformList
            platforms={game.parent_platforms.map((g) => g.platform)}
          />
          <Image boxSize="40px" src="../../public/images/bulls-eye.webp" />
        </Box>
      </Box>
    </div>
  );
}
