import { Box, Image, Text, Icon, HStack } from "@chakra-ui/react";
import { platform } from "os";
import { Game } from "../services/game-service";

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
          <HStack>
            {game.platforms.map(({ platform }) => {
              return <Image boxSize="40px" src={platform.image_background} />;
            })}
          </HStack>
          <Image boxSize="40px" src="../../public/images/bulls-eye.webp" />
        </Box>
      </Box>
    </div>
  );
}
