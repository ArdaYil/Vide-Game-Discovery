import { List, Spinner, VStack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./Genre";

interface Props {
  currentGenre: Genre | null;
  onGenreUpdate: (genre: Genre | null) => void;
}

export default function Genres({ onGenreUpdate, currentGenre }: Props) {
  const { data: genres, isLoading, errors } = useGenres();

  if (errors.length > 0) return null;

  return (
    <>
      <Text fontWeight="bold" fontSize="26px" textAlign="center">
        Genres
      </Text>

      {isLoading ? (
        <Spinner />
      ) : (
        <List marginTop="20px">
          {genres.map((genre) => (
            <GenreItem
              onGenreUpdate={onGenreUpdate}
              genre={genre}
              currentGenre={currentGenre}
            />
          ))}
        </List>
      )}
    </>
  );
}
