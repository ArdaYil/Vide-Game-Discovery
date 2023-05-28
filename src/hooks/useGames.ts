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

export default (genre: Genre | null, platform: Platform | null) =>
  useData<Game>("/games", [genre, platform], {
    params: { genres: genre?.id, parent_platforms: platform?.id },
  });
