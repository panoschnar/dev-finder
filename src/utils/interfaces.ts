export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: "Javascript" | "Python" | "Golang";
}

export type Filters = { lastName: string; language: string };

export type DeveloperContextType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  people: IPerson[];
  loading: boolean;
  error: string | null;
  nextPage: number | null;
  loadMoreResults: () => void;
  inviting: IPerson | null;
  setInviting: (person: IPerson | null) => void;
  bookmarkUrl: () => void;
  clearFilters: () => void;
};

