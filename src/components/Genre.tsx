import { Box, Text } from "@chakra-ui/react";
import { Genre } from "../services/genre-service";

interface Props {
  genre: Genre;
}

export default function GenreItem({ genre }: Props) {
  return (
    <Box>
      <Text textAlign="left">{genre.name}</Text>
    </Box>
  );
}
