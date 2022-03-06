import React from 'react';
import 'antd/dist/antd.css';
import GlobalStyle, { AppStyle } from './Global.styles';
import AddtodoForm from '@components/AddTodoFrom';
import TodoList from '@components/TodoList';

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <AddtodoForm />
      <TodoList />
    </AppStyle>
  );
}

export default App;
