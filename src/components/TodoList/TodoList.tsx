import React from 'react';
import TodoItem from '@components/TodoItem';
import { List } from 'antd';
import { useAppSelector } from '@redux/hooks';
import { TodoListState } from '@redux/Reducer/TodoListReducer/TodoSelector';

const TodoList = () => {
  const { taskList } = useAppSelector(TodoListState);

  return (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={taskList}
      renderItem={(task) => (
        <TodoItem id={task.id} taskName={task.taskName} done={task.done} />
      )}
      pagination={{
        position: 'bottom',
        pageSize: 5,
      }}
    />
  );
};

export default TodoList;
