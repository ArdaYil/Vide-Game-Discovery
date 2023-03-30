import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { CanceledError } from "../services/httpClient";
import config from "config";

const gameClient = gameService();

export default function useGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { req, cancel } = gameClient.getAll();

    setLoading(true);

    req
      .then((res) => {
        setLoading(false);
        setGames([res]);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setLoading(false);
        setErrors(error);
      });

    return cancel;
  }, []);

  return { games, errors, isLoading, setGames, setErrors };
}
