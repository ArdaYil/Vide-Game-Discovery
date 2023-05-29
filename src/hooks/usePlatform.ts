import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: Array<any>;
}

export default () => ({ data: platforms, isLoading: false, errors: [] });
