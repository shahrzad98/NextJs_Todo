import { TodoFilters } from "./todoHttpTypes";

export const buildTodoQueryParams = (
  active: boolean
): TodoFilters | undefined => {
  if (active) {
    return { active: true };
  }
};
