import { Content } from "../data/content";

export const SearchFilter = (category) =>
  Content.filter((item) => item.category === category);
