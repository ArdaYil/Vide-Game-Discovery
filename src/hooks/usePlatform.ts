import platforms from "../data/platforms";

export interface Platform {
  image_background: string;
  id: number;
  name: string;
}

export default () => ({ data: platforms, isLoading: false, errors: [] });
