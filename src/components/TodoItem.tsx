import { useTodos } from "../store";
import { Todo } from "../types/types"

type TodoProps = {
  todo: Todo,
}

export const TodoItem: React.FC<TodoProps> = ({
  todo
}) => {
  const { id, name, completed } = todo;
  const toggleTodoStatus = useTodos(state => state.toggleTodoStatus);

  return (
    <div 
      className={completed ? 'completed' : ''}
      onClick={() => toggleTodoStatus(id)}
    >
      {name}
    </div>
  )
}