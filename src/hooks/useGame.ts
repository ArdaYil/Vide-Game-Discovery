import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { CanceledError } from "../services/httpClient";
import { apiKey } from "../../config/config.json";

const gameClient = gameService();

export default function useGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { req, cancel } = gameClient.getAll("/games", apiKey);

    setLoading(true);

    req
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setErrors(error.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  return { games, errors, isLoading, setGames, setErrors };
}
