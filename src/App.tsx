import React from 'react';
import './index.css';
import { addcount, addCountSync } from './store/gloablSlice';
import { selectCount } from './store/selectors';
import { useAppSelector, useAppDispatch } from './hooks';
import Router from './router/index';
import 'antd/dist/antd.css';

function App() {
  // 获取状态值
  const counter = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Router></Router>
  );
}

export default App;
