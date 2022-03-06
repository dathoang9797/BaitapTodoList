export type Task = { id?: number; taskName?: string; done?: boolean };

export type InitialStateTodoLists = {
  taskList: Task[];
  taskEdit: Task;
};
