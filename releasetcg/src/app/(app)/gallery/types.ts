export type GallerySort = "name" | "power" | "bulk" | "setName";
export type SortDirection = "asc" | "desc";

export type GalleryFilterState = {
  search: string;
  setName: string;
  color: string;
  sort: GallerySort;
  direction: SortDirection;
};