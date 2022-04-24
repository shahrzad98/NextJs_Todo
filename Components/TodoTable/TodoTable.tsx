import styles from "../../styles/Home.module.scss";
import React, { useState } from "react";
import { TodoItem } from "../../http/todo";
import { Loading } from "../Loading";

type TodoTableProps = {
  isLoading: boolean;
  items: TodoItem[];
  onTodoUpdate: (todoItem: TodoItem) => void;
  onTodoDelete: (todoId: number) => void;
};
const TodoTable: React.FC<TodoTableProps> = (props) => {
  const [todoItemEdit, setTodoItemEdit] = useState<TodoItem>();

  const handleRowClicked = (todoItem: TodoItem) => {
    setTodoItemEdit(todoItem);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoItemEdit) {
      props.onTodoUpdate({
        id: todoItemEdit.id,
        title: e.currentTarget.value,
        active: todoItemEdit.active,
      });
      setTodoItemEdit(undefined);
    }
  };

  const handleDeleteClicked = (id: number) => {
    props.onTodoDelete(id);
  };

  const handleToggleStatusChanged = (
    todoItem: TodoItem,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.onTodoUpdate({
      id: todoItem.id,
      title: todoItem.title,
      active: !e.target.checked,
    });
  };

  return (
    <Loading isLoading={props.isLoading}>
      <table>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td>
                {todoItemEdit?.id === item.id ? (
                  <input
                    type="text"
                    defaultValue={item.title}
                    onKeyDown={handleInputKeyDown}
                  />
                ) : (
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={!item.active}
                      value="true"
                      onChange={(e) => handleToggleStatusChanged(item, e)}
                    />
                    <div onClick={() => handleRowClicked(item)}>
                      {item.title}
                    </div>
                    <span
                      className={styles.close}
                      onClick={() => handleDeleteClicked(item.id)}
                    >
                      &times;
                    </span>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Loading>
  );
};

export default React.memo(TodoTable);
