import { Box, HStack, Text, Image, ListItem } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import croppedUrl from "../services/imageCrop";

interface Props {
  genre: Genre;
}

export default function GenreItem({ genre }: Props) {
  return (
    <ListItem marginLeft="10px" marginBottom="20px">
      <HStack>
        <Image
          boxSize="32px"
          borderRadius="8"
          objectFit="cover"
          marginRight="2px"
          src={croppedUrl(genre.image_background)}
        />
        <Text fontSize="lg" fontWeight="600">
          {genre.name}
        </Text>
      </HStack>
    </ListItem>
  );
}
