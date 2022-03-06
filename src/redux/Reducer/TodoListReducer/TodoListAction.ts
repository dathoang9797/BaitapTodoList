import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from '@redux/Reducer/TodoListReducer/TodoListConstant';
import { Task } from '@models/Task.types';

export const addTaskAction = (payload: Task['taskName']) => {
  return {
    type: ADD_TASK,
    payload,
  } as const;
};

export const deleteTaskAction = (payload: Task['id']) => {
  return {
    type: DELETE_TASK,
    payload,
  } as const;
};

export const editTaskAction = (payload: Task) => {
  return {
    type: EDIT_TASK,
    payload,
  } as const;
};

export const updateTaskAction = (payload: Task) => {
  return {
    type: UPDATE_TASK,
    payload,
  } as const;
};

export const toggleDoneTaskAction = (payload: {
  id: Task['id'];
  done: Task['done'];
}) => {
  return {
    type: TOGGLE_DONE_TASK,
    payload,
  } as const;
};

export type ActionsTodoList = ReturnType<
  | typeof addTaskAction
  | typeof deleteTaskAction
  | typeof editTaskAction
  | typeof toggleDoneTaskAction
  | typeof updateTaskAction
>;
