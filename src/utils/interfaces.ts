// Person model
export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: "Javascript" | "Python" | "Golang";
}

// Response from the API
export interface PeopleResponse {
  data: Person[];
  hasMore: boolean;
}
