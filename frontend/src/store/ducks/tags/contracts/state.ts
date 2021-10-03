import { LoadingStatus } from "../../../types";

export interface Tag {
  id: number;
  name: string;
  count: number;
}
export interface Tags {
  items: Tag[];
  loadingStatus: LoadingStatus;
}
