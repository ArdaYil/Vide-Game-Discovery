import useData from "../hooks/useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default () => useData<Genre>("/genres");
