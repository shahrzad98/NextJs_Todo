export type TodoItem = {
  id: number;
  title: string;
  active: boolean;
};

export type TodoFilters = {
  active?: boolean;
};

export type TodoCreateRq = {
  title: string;
  active: boolean;
};

export type TodoUpdateRq = {
  id: number;
  title: string;
  active: boolean;
};
