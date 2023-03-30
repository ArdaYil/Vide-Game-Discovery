import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { CanceledError } from "../services/httpClient";

const gameClient = gameService();

export default function useGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { req, cancel } = gameClient.getAll(
      "/games",
      "231485f29f3f43858992896d502ceb58"
    );

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
