import useData from "./useData";

export interface Platform {
  image_background: string;
  id: number;
  name: string;
}

export default () => useData<Platform>("/platforms/lists/parents");
