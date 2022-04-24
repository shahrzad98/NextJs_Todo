import { TodoCreateRq, TodoItem, TodoUpdateRq } from "./todoHttpTypes";
import { HttpRequest } from "../httpRequest";

export const TodoHttp = {
  getAll: (filters?: { active?: boolean }): Promise<TodoItem[]> => {
    let url = "todos";
    if (filters?.active) {
      url += `?active=${filters.active}`;
    }
    return HttpRequest.get(url);
  },
  create: (data: TodoCreateRq) => {
    return HttpRequest.post("todos", data);
  },
  update: (data: TodoUpdateRq) => {
    return HttpRequest.put(`todos/${data.id}`, data);
  },
  delete: (id: number) => {
    return HttpRequest.delete(`todos/${id}`);
  },
  deleteCompleted: (ids: number[]) => {
    return HttpRequest.delete(`todos/${ids}`);
  },
};
