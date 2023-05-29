import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformList from "./PlatformList";
import bullsEye from "../assets/bulls-eye.webp";
import imageCrop from "../services/imageCrop";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

export default function GameItem({ game }: Props) {
  return (
    <div style={{ height: "100%" }}>
      <Box
        height="100%"
        width="100%"
        borderRadius="10px"
        backgroundColor="gray.700"
        display="flex"
        flexDirection="column"
        overflow="hidden"
        justifyItems="stretch"
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
          <Emoji rating={game.rating_top} />
        </Box>
      </Box>
    </div>
  );
}
