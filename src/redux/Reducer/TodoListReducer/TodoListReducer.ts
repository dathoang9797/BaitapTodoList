import { InitialStateTodoLists } from '@models/Task.types';
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from '@redux/Reducer/TodoListReducer/TodoListConstant';
import { ActionsTodoList } from '@redux/Reducer/TodoListReducer/TodoListAction';

const todoInitialState = {
  taskEdit: {},
  taskList: [
    { id: 1, taskName: 'task 1', done: true },
    { id: 2, taskName: 'task 2', done: false },
    { id: 3, taskName: 'task 3', done: true },
  ],
} as InitialStateTodoLists;

const todoListReducer = (state = todoInitialState, action: ActionsTodoList) => {
  switch (action.type) {
    case ADD_TASK: {
      const isHaveTask = state.taskList.some(
        (task) =>
          task.taskName?.trim().toLowerCase().replace(' ', '') ===
          action.payload?.trim().toLowerCase().replace(' ', '')
      );

      if (!isHaveTask) {
        const newTask = {
          id: Date.now(),
          taskName: action.payload,
          done: false,
        };
        return {
          ...state,
          taskList: [...state.taskList, newTask],
        };
      }
      alert('Task is exist');
      return { ...state };
    }

    case DELETE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };
    }

    case EDIT_TASK: {
      return {
        ...state,
        taskEdit: action.payload,
      };
    }

    case UPDATE_TASK: {
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
        taskEdit: {},
      };
    }

    case TOGGLE_DONE_TASK: {
      const index = state.taskList.findIndex(
        (task) => task.id === action.payload.id
      );
      state.taskList[index].done = action.payload.done;
      return {
        ...state,
        taskList: state.taskList,
      };
    }
    default:
      return state;
  }
};

export default todoListReducer;
