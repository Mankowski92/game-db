export type Game = {
  id: number;
  background_image: string;
  name: string;
  platforms: [];
  released: string;
};

export type Platform = {
  platform: { name: string };
};
