import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genre-service";
import { CanceledError } from "../services/httpClient";
import { apiKey } from "../../config/config.json";

const gameClient = genreService();

export default function useGame() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreErrors, setGenreErrors] = useState("");
  const [genreIsLoading, setGenreIsLoading] = useState(false);

  useEffect(() => {
    const { req, cancel } = gameClient.getAll("/genres", apiKey);

    setGenreIsLoading(true);

    req
      .then((res) => {
        setGenres(res.data.results);
        setGenreIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setGenreErrors(error.message);
        setGenreIsLoading(false);
      });

    return cancel;
  }, []);

  return { genres, genreErrors, genreIsLoading, setGenres, setGenreErrors };
}
