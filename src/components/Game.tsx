import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import CriticScore from "./CriticScore";
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
          <HStack justifyContent="space-between">
            <PlatformList
              platforms={game.parent_platforms.map((g) => g.platform)}
            />
            <CriticScore>{game.metacritic}</CriticScore>
          </HStack>
          <Text fontWeight="700" fontSize="x-large">
            {game.name}
          </Text>
          <Image boxSize="40px" src="../../public/images/bulls-eye.webp" />
        </Box>
      </Box>
    </div>
  );
}
