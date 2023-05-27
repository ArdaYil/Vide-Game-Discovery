import { List, Spinner, VStack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import Genre from "./Genre";

export default function Genres() {
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
            <Genre genre={genre} />
          ))}
        </List>
      )}
    </>
  );
}
