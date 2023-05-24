import { VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import Genre from "./Genre";

export default function Genres() {
  const { genres } = useGenre();

  console.log(genres);

  return (
    <VStack>
      {genres.map((genre) => (
        <Genre genre={genre} />
      ))}
    </VStack>
  );
}
