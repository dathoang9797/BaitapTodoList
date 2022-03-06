import React, { useEffect } from 'react';
import { Row, Col, Button, Input } from 'antd';
import { FormAntStyle } from '@components/AddTodoFrom/AddTodoForm.styles';
import { PlusCircleFilled, SyncOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  addTaskAction,
  updateTaskAction,
} from '@redux/Reducer/TodoListReducer/TodoListAction';
import { TodoListState } from '@redux/Reducer/TodoListReducer/TodoSelector';

const AddtodoForm = () => {
  const dispatch = useAppDispatch();
  const { taskEdit } = useAppSelector(TodoListState);
  const [form] = FormAntStyle.useForm();

  const onFinish = () => {
    const taskName = form.getFieldValue('task');
    dispatch(addTaskAction(taskName));
    form.resetFields();
  };

  const updateTask = () => {
    const taskName: string = form.getFieldValue('task');
    if (!taskName.length) return;
    taskEdit.taskName = taskName;
    dispatch(updateTaskAction(taskEdit));
    form.resetFields();
  };

  useEffect(() => {
    if (taskEdit) {
      form.setFieldsValue({
        task: taskEdit.taskName,
      });
    }
  }, [form, taskEdit]);

  return (
    <>
      <h1 style={{ paddingTop: 30, color: '#FFF' }}>TodoList</h1>
      <FormAntStyle form={form} onFinish={onFinish} layout='horizontal'>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <FormAntStyle.Item
              name={'task'}
              rules={[{ required: true, message: 'This field is required' }]}
            >
              <Input placeholder='What needs to be done?' />
            </FormAntStyle.Item>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={14}>
            <Button
              type='primary'
              htmlType={Object.keys(taskEdit).length ? 'button' : 'submit'}
              style={{ marginRight: 15 }}
              disabled={Object.keys(taskEdit).length ? true : false}
            >
              <PlusCircleFilled />
              Add todo
            </Button>
            <Button
              htmlType={!Object.keys(taskEdit).length ? 'button' : 'submit'}
              type='primary'
              onClick={updateTask}
              style={{
                background: 'gray',
                borderColor: 'gray',
              }}
              disabled={!Object.keys(taskEdit).length ? true : false}
            >
              <SyncOutlined />
              Update Todo
            </Button>
          </Col>
        </Row>
      </FormAntStyle>
    </>
  );
};

export default AddtodoForm;
