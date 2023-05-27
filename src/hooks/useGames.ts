import { AxiosRequestConfig } from "axios";
import useData from "../hooks/useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

interface PlatformObject {
  platform: Platform;
}

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
  genres: Genre[];
}

export default (genre: Genre | null) =>
  useData<Game>("/games", [genre], {
    params: { genres: genre?.id },
  });
