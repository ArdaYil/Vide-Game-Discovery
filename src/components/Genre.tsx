import { Box, HStack, Text, Image, ListItem, Button } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import croppedUrl from "../services/imageCrop";

interface Props {
  genre: Genre;
  currentGenre: Genre | null;
  onGenreUpdate: (genre: Genre | null) => void;
}

export default function GenreItem({
  genre,
  onGenreUpdate,
  currentGenre,
}: Props) {
  return (
    <ListItem
      boxShadow={currentGenre?.id == genre.id ? "0px 0px 10px 2px" : ""}
      borderRadius="10px"
      padding="5px"
      marginLeft="10px"
      marginBottom="20px"
    >
      <HStack>
        <Image
          boxSize="32px"
          borderRadius="8"
          objectFit="cover"
          marginRight="2px"
          src={genre.image_background}
        />
        <Button
          variant="link"
          whiteSpace="pre-wrap"
          textAlign="left"
          onClick={() => onGenreUpdate(genre)}
          fontSize="lg"
          fontWeight="600"
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
}
