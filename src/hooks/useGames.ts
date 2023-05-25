import useData from "../hooks/useData";

export interface Platform {
  image_background: string;
  id: number;
}

interface PlatformObject {
  platform: Platform;
}

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
}

export default () => useData<Game>("/games");
