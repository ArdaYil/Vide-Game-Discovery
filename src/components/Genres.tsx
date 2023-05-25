import { VStack } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import Genre from "./Genre";

export default function Genres() {
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <Genre genre={genre} />
      ))}
    </ul>
  );
}
