import { create } from 'zustand';
import { Todo } from './types/types';

type useTodosState = {
  todos: Todo[];
  toggleTodoStatus: (id: number) => void;
  addTodo: (title: string) => void;
};

export const useTodos = create<useTodosState>((set, get) => ({
  todos: [
    { id: 1, name: 'freak', completed: true },
    { id: 2, name: 'sad', completed: false },
    { id: 3, name: 'no', completed: true },
    { id: 4, name: 'zxc', completed: false },
  ],
  toggleTodoStatus: (id) => {
    const changedTodos = get().todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    set({ todos: changedTodos });
  },
  addTodo: (title) => {
    const newTodo: Todo = { id: +Date(), completed: false, name: title };

    set((state) => ({ todos: [...state.todos, newTodo] }));
  }
}));

type useFilterProps = {
  searchString: string;
  updateSearch: (string: string) => void;
};

export const useSearch = create<useFilterProps>((set, get) => ({
  searchString: '',
  updateSearch: (string) => {
    set({ searchString: string });
  },
}));
