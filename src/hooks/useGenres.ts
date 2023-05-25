import useData from "../hooks/useData";

export interface Genre {
  id: number;
  name: string;
}

export default () => useData<Genre>("/genres");
