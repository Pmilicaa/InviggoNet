import { User } from "types/models/User";

export interface SearchPageState {
  searchResult: User[],
  searchText: string
}