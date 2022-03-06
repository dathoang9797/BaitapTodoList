import React from 'react';
import { Tooltip, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined, EditFilled } from '@ant-design/icons';
import {
  ListItemAntStyle,
  TagAntStyle,
  TodoItemStyle,
} from './TodoItems.styles';

import { PropsTodo } from '@models/Todo.types';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  deleteTaskAction,
  toggleDoneTaskAction,
  editTaskAction,
} from '@redux/Reducer/TodoListReducer/TodoListAction';
import { TodoListState } from '@redux/Reducer/TodoListReducer/TodoSelector';

const TodoItem = ({ done, id, taskName }: PropsTodo) => {
  const dispatch = useAppDispatch();
  const { taskEdit } = useAppSelector(TodoListState);

  return (
    <ListItemAntStyle
      actions={[
        <Tooltip title={done ? 'Mark as uncompleted' : 'Mark as completed'}>
          <Switch
            disabled={Object.keys(taskEdit).length ? true : false}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => {
              dispatch(toggleDoneTaskAction({ id, done: !done }));
            }}
            defaultChecked={done}
          />
        </Tooltip>,

        <Button
          onClick={() => {
            dispatch(editTaskAction({ done, id, taskName }));
          }}
          type='primary'
          style={{
            backgroundColor: 'orange',
            borderColor: 'orange',
          }}
          disabled={done ? true : false}
        >
          <EditFilled />
        </Button>,
        <Popconfirm
          title='Are you sure you want to delete?'
          onConfirm={() => {
            dispatch(deleteTaskAction(id));
          }}
        >
          <Button type='primary' danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      key={id}
    >
      <TodoItemStyle>
        <TagAntStyle color={done ? 'cyan' : 'red'}>{taskName}</TagAntStyle>
      </TodoItemStyle>
    </ListItemAntStyle>
  );
};

export default TodoItem;
